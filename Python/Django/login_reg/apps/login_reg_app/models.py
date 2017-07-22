from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

''' BASIC VALIDATIONS:
    - Email must be of specified regex format
    - Name must have length of at least 1
    - Password and password_conf need to match
'''

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name']) < 1:
            errors['first_name'] = "!!---  First name field should include at least 1 character  ---!!"
        if len(postData['last_name']) < 1:
            errors['last_name'] = "!!---  Last name field should include at least 1 character  ---!!"
        if not re.match(EMAIL_REGEX, postData['email']):
            errors['email'] = "!!---  Email is not fomatted correctly  ---!!"
        if len(postData['password']) < 8:
            errors['password'] = "!!---  Password field must include at least 8 characters  ---!!"
        if postData['password'] != postData['password_conf']:
            errors['password_conf'] = "!!---  Password field must match Password Confirmation field  ---!!"
        if errors:
            return errors
        else:
            pass

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    objects = UserManager()