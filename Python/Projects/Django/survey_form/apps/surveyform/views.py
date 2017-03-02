from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'surveyform/index.html')

def process(request):
    # print "hello"
    count_session(request)
    request.session['name'] = request.POST['fullname']
    request.session['city'] = request.POST['dropdownCity']
    request.session['code'] = request.POST['dropdownCode']
    request.session['comment'] = request.POST['leaveComment']
    return redirect('/result')

def result(request):
    print "world"
    return render(request, 'surveyform/result.html')

def count_session(request):
    if 'count' in request.session:
        request.session['count'] += 1
        return request.session['count']
    else:
        request.session['count'] = 1
        return request.session['count']
