from flask import Flask, render_template, session, request, redirect
import random

app = Flask(__name__)
app.secret_key = "ThisIsSecret"


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/game', methods=['POST'])
def getInfo():
	print "Got Info"

	num = request.form['num']

	return redirect('/')
app.run(debug=True)







