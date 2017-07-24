from __future__ import unicode_literals
from django.db import models
import re
import datetime

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

''' BASIC VALIDATIONS:
    - Email must be of specified regex format
    - Name must have length of at least 1
    - Password and password_conf need to match
'''

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) < 1:
            errors['name'] = "First name field should include at least 1 character"
        if len(postData['alias']) < 1:
            errors['alias'] = "Last name field should include at least 1 character"
        if not re.match(EMAIL_REGEX, postData['email']):
            errors['email'] = "Email is not fomatted correctly"
        if len(postData['password']) < 8:
            errors['password'] = "Password field must include at least 8 characters"
        if postData['password'] != postData['password_conf']:
            errors['password_conf'] = "Password field must match Password Confirmation field"
        if str(postData['birthdate']) > str(datetime.date.today()):
            errors['birthdate'] = "Birthdate must be before today"
        if not postData['birthdate']:
            errors['birthdate'] = "Please enter a birthdate"
        if errors:
            return errors
        else:
            pass

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class QuoteManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['author']) < 1:
            errors['author'] = "'Quoted By:' field should include at least 1 character"
        if len(postData['quotation']) < 1:
            errors['quotation'] = "'Quotation:' field should include at least 1 character"
        if errors:
            return errors
        else:
            pass

class Quote(models.Model):
    author = models.CharField(max_length=254)
    quotation = models.TextField()
    poster = models.ForeignKey(User, related_name = "posters")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    users = models.ManyToManyField(User, related_name="quotes")
    objects = QuoteManager()