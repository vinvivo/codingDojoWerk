from __future__ import unicode_literals
from django.db import models
import re
import datetime

# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

''' BASIC VALIDATIONS:
    - Name must have length of at least 3
    - Username must have length of at least 3
    - Password and password_conf need to match

    - No empty entries
    - Travel dates should be in the future
    - Travel date to should not be before the Travel Date From
'''

class UserManager(models.Manager):
    def user_validator(self, postData):
        errors = {}
        if len(postData['name']) < 3:
            errors['name'] = "Name field should include at least 3 characters"
        if len(postData['username']) < 3:
            errors['username'] = "Username field should include at least 3 characters"
        if len(postData['password']) < 8:
            errors['password'] = "Password field must include at least 8 characters"
        if postData['password'] != postData['password_conf']:
            errors['password_conf'] = "Password field must match Confirm PW field"
        if str(postData['date_hired']) > str(datetime.date.today()):
                errors['date_hired'] = "Date Hired must be before or on today"
        if not postData['date_hired']:
            errors['date_hired'] = "Please enter a Date Hired"
        if errors:
            return errors
        else:
            pass

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    date_hired = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __str__(self):
        return self.name, self.username
    def __retr__(self):
        return self.name, self.username

class ProductManager(models.Manager):
    def product_validator(self, postData):
        errors = {}
        if len(postData['product_name']) < 4:
            errors['product_name'] = "'Item/Product:' field should be at least 4 characters"
        if errors:
            return errors
        else:
            pass

class Product(models.Model):
    product_name = models.CharField(max_length=255)
    wisher = models.ForeignKey(User, related_name = "wishers")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    users = models.ManyToManyField(User, related_name="products")
    objects = ProductManager()
    def __str__(self):
            return self.product_name, self.wisher.name
    def __retr__(self):
        return self.product_name, self.wisher.name