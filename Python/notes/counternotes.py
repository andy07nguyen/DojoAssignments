from flask import Flask, render_template, session
app = Flask(__name__)
app.secret_key = "ThisIsMySecretKey"

@app.route('/')
def index():
	session['count'] = 5
	return render_template('index.html', count = session['count'])

app.run(debug=True)





