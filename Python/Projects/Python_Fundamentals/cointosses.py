import random

def coin():
	randCoin = random.randint(0,1)
	# print randCoin
	return randCoin

def toss():
	head = 0
	tails = 0
	for i in range(1,5001):
		# print i
		flip = coin()

		if flip == 0:
			head = head + 1
			print "Attempt #" + str(i) + " Throwing a coin... It's a head! ... Got " + str(head) + "head(s) so far and " + str(tails) + " so far" 

		elif flip == 1:
			tails = tails + 1
			print "Attempt #" + str(i) + " Throwing a coin... It's a tail! ... Got " + str(head) + "head(s) so far and " + str(tails) + " so far"
toss()