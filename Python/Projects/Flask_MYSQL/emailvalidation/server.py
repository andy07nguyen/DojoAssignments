import re
from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'emailvalidationdb')

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/email', methods=['POST'])
def emailValid():
	userEmail = request.form['email']
	regex = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
	if re.search(regex, userEmail):
		# print "Valid Email Address"
		pushData()
		# showInfo()
		return redirect('/success')
		# return render_template('index.html', validEmail="This is a Vaild Email Address")
	else:
		# print "Not a Valid Email Address"
		return render_template('index.html', validEmail="Not A Vaild Email Address")


def pushData():
	# userEmail = request.form['email']
	query = "INSERT INTO users (email,created_at, uploaded_at) VALUES (:email, NOW(), NOW())" 

	data = {
		'email': request.form['email']
	}
	mysql.query_db(query, data)
	return redirect('/')
	# return render_template('index.html')


@app.route('/success')
def showInfo():
	query = "SELECT * FROM users"
	dbData = mysql.query_db(query)
	# print dbData
	return render_template('success.html', email=dbData, validEmail="This is a Vaild Email Address")

app.run(debug=True)








