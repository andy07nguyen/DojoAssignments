import random, string
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    # print "hello"
    return render(request, 'randomword/index.html')

def ranDom(request):
    # print "world"
    # print randomword(14)
    # print count_session(request)
    count_session(request)
    show = randomword(14)
    data = {
        'randTxtNum':show
    }
    return render(request, 'randomword/index.html', data)

#FUNCTIONS: BEYOND THIS POINT
def randomword(length):
    rand = string.ascii_uppercase + string.digits
    return ''.join(random.choice(rand) for _ in range(length))

def count_session(request):
    if 'count' in request.session:
        request.session['count'] += 1
        return request.session['count']
    else:
        request.session['count'] = 1
        return request.session['count']
