from flask import Flask, request, redirect, render_template, session, flash
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'friendsdb')
# an example of running a query
@app.route('/')
def index():
	query = "SELECT * FROM friends"
	friends = mysql.query_db(query)
	return render_template('index.html', all_friends=friends)


@app.route('/friends', methods=['POST'])
def create():
	print request.form['first_name']
	print request.form['last_name']
	print request.form['occupation']

	query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, NOW(), NOW())"

	data = {
		"first_name": resquest.form['first_name'],
		"last_name": request.form['last_name'],
		"occupation": request.form['occupation']
	}

	mysql.query_db(query, data)
	return redirect('/')
	# print mysql.query_db("SELECT * FROM users")


@app.route('/friends/<friend_id>')
def show(friend_id):
	query = "SELECT * FROM friends WHERE id = :specific_id"
	data = {'specific_id': friend_id}
	friends = mysql.query_db(query, data)
	return render_template('index.html', one_friend=friends[0])


#Updating Records:
@app.route('/update_friend', methods=['POST'])
def update():
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
    data = {
             'first_name': request.form['first_name'], 
             'last_name':  request.form['last_name'],
             'occupation': request.form['occupation'],
             'id': request.form['byid']
           }
    mysql.query_db(query, data)
    return redirect('/')


#Deleting Records
@app.route('/remove_friend/<friend_id>', methods=['POST'])
def delete(friend_id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')


app.run(debug=True)











