from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')


def index():
	return render_template('index.html')
# app.run(debug=True)



@app.route('/ninjas')
def ninjas():
	return render_template('ninjas.html', name='Ninjas!!!')
# app.run(debug=True)


@app.route('/dojos/new')
def dojos():
	return render_template('dojos.html')
app.run(debug=True)	