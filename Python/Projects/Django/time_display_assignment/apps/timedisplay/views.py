import datetime
from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    now = datetime.datetime.now()
    # print now

    context = {
        "dateTime":now
    }
    return render(request, 'timedisplay/index.html', context)
