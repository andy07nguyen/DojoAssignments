import random

def randomNumber():
	randomNum = random.randrange(60,100)
	# print randomNum
	return randomNum


def randomGrade():
	print "Scores and Grades"
	for i in range(0,10):
		# print i
		score = randomNumber()

		if score >= 90:
			print "Score: " + str(score) + " Your grade is A"
		elif score >= 80:
			print "Score: " + str(score) + " Your grade is B"
		elif score >= 70:
			print "Score: " + str(score) + " Your grade is C"	
		elif score >= 60:
			print "Score: " + str(score) + " Your grade is D"
		else:
			print "End of program. Bye!"

randomGrade()


