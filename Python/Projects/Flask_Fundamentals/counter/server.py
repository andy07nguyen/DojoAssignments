from flask import Flask, render_template, session
app = Flask(__name__)
app.secret_key = "ThisIsASecret"

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 1
    else:
        session['count'] += 1

    return render_template("index.html", name="hello world!")
app.run(debug=True)
