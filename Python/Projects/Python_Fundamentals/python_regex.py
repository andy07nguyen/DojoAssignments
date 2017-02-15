import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches



if re.search(r"a.*a"):  
	print("That string had at least two 'a's in it!")
else:
	print("No more than one 'a' found!")


#FOR EXAMPLE:
def emailValid():
	userEmail = request.form['email']
	regex = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
	if re.search(regex, userEmail):
		# print "Valid Email Address"
		pushData()
		return render_template('index.html', validEmail="This is a Vaild Email Address")
	else:
		# print "Not a Valid Email Address"
		return render_template('index.html', validEmail="Not A Vaild Email Address")






