from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/users', methods=['POST'])
def createUser():
	print "Got Post Info"
	return render_template('result.html', name=request.form['name'], location=request.form['dropbox1'], favorite=request.form['dropbox2'], comment=request.form['comment'])
	# return redirect('/')
app.run(debug=True)


