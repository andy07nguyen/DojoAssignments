from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):

    return render(request, "login_reg/index.html")

def registeration(request):
    user = User.objects.register(request.POST['fname'], )

    return
