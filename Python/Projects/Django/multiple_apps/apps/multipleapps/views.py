from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from ..loginreg.models import User
from ..course.models import Course

# Create your views here.
def index(request):
    # return HttpResponse("hello")
    return render(request, 'multipleapps/index.html')

def process(request):
    print "#"*20, "hello", "#"*20

    return redirect('/')
