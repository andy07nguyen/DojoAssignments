from __future__ import unicode_literals
from django.db import models
import re, bcrypt

# Create your models here.
class UserManager(models.Manager):
    def register(self, postData):
        fname_Regex = r'^(?P<firstname>[\w\s\w]*)'
        lname_Regex = r'^(?P<lastname>[\w\s\w]*)'
        email_Regex = r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'
        password_Regex = r'[A-Za-z0-9!@#$%^&*+=]{8,}$'
        check = True
        errorMsg = []

        








class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
