from __future__ import unicode_literals
from django.db import models
import re, bcrypt
# Create your models here.
#USER MANAGER:
class UserManager(models.Manager):
    #REGISTER CLASS:
    def register(self, postData):
        name_Regex = r'^(?P<firstname>[\w\s\w]*)'
        alias_Regex = r'([a-zA-Z]+) (\d+)'
        email_Regex = r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'
        password_Regex = r'[A-Za-z0-9!@#$%^&*+=]{8,}$'
        msg = []
        check = True

    #NAME VALIDATION:
        if not len(postData['name']) > 0 and not re.match(name_Regex, postData['name']):
            msg.append("Invalid name. Required 2 or more characters")
            check = False
    #ALIAS VALIDATION:
        if not len(postData['alias']) > 0 and not re.match(alias_Regex, postData['alias']):
            msg.append("Invalid alias. Required 2 or more characters")
            check = False
    #EMAIL VALIDATION:
        #EMAIL REGEX:
        if not len(postData['email']) > 0 and not re.search(email_Regex, postData['email']):
            msg.append("Invalid email address")
            check = False
        #DUPLICATE:
        if User.objects.filter(email = postData['email']):
            msg.append("Email address is already taken. Please try again.")
            check = False
        else:
            pass
    #PASSWORD VALIDATION:
        if re.match(password_Regex, postData['password'] and postData['password'] == postData['confirmpw']):
            hashed = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
        else:
            msg.append("Invalid password. Required 8 or more characters.")
            check = False
    #DATE OF BIRTH VALIDATION:


    #ERROR CHECK:
        if check == True:
            newUser = User.objects.create(name=postData['name'], alias=postData['alias'], email=postData['email'], password=hashed)
            msg.append("Successfully Registration!")
            return(True, newUser)
        else:
            msg.append("Invalid Information")
            return(False, msg)

#USER CLASS MODEL:
class User(models.Model):
    name = models.CharField(max_length=45)
    alias = models.CharField(max_length=45)
    email = models.EmailField(max_length=45)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
