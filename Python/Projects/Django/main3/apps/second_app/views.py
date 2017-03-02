from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        'email': 'blob@gmail.com',
        'name': 'mike'
    }
    return render(request, 'second_app/index.html', context)
