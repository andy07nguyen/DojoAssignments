import re
from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'loginregistrationdb')

@app.route('/')
def index():
    # print "hello"
    return render_template('index.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/registration_validation', methods=['POST'])
def registerValid():
    # print "hello"
    firstName = request.form['firstname']
    lastName = request.form['lastname']
    email = request.form['email']
    passWord = request.form['password']
    pwConfirm = request.form['pwconfirm']
    emailRegex = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
    nameRegex = r"(^[a-zA-Z]{2,}$)"
    passwordRegex = r"(^[a-zA-Z0-9_.+-=@#$%^&]{8,}$)"

    if re.match(nameRegex, firstName) and re.match(nameRegex, lastName) \
    and re.match(emailRegex, email) and re.match(passwordRegex, passWord) \
    and re.match(passwordRegex, pwConfirm):
        print "Valid"

    else:
        print "Invalid"


    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    # add a friend to the database!
    return redirect('/')





app.run(debug=True)
