from django.shortcuts import render, redirect, HttpResponse
from .models import User
from django.contrib import messages

# Create your views here.
def index(request):
    # request.session['user'] = "andy"
    return render(request, 'friends/test.html')

def process(request):
    print "hello"
    # user = User.objects.register(request.POST)
    # if user[0] == True:
    #     messages.info(request, "Successfully Registered")
    #     request.session['id'] = user[1].id
    #     request.session['user'] = "Registered"
    # else:
    #     for i in user[1]:
    #         print "#"*20, i, "#"*20
    #         messages.info(request, i)
    #     return redirect('/')
    return redirect('/success')

def test(request):
    print "works"
    return render(request, 'friends/index.html')
