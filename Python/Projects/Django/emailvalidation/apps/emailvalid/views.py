import re
from django.shortcuts import render, redirect, HttpResponse
from .models import Email
# Create your views here.
def index(request):

    return render(request, 'emailvalid/index.html')

def email(request):
    # print "hello"
    userEmail = request.POST['email']
    regex = r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'

    if re.search(regex, userEmail):
        print "Valid Email Address"
        Email.objects.create(email=request.POST['email'])
        return redirect('/success')
    else:
        print "Not a Valid Email Address"
        invalidEmail = "Not A Vaild Email Address"
        context = {
        'invalid': invalidEmail
        }
        return render(request, 'emailvalid/index.html', context)

def success(request):
    validEmail = "This is a Vaild Email Address"
    context = {
    'email': Email.objects.all(),
    'valid': validEmail
    }
    validEmail = "This is a Vaild Email Address"
    return render(request, 'emailvalid/success.html', context)
