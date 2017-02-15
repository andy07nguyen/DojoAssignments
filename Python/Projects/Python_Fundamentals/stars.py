#PART 1:
# x = [4,6,1,3,5,7,25]

# def draw_stars(num):
# 	for i in num:
# 		print i * "*"

# draw_stars(x)

####"Michael" => ["M","i",'c',"h",'a','e','l'] #####

#PART 2:
x = [4,"Tom",1,"Michael",5,7,"Jimmy Smith"]

def draw_stars(num):
	for i in num:
		if i == str(i):
			print i[0].lower() * len(i)
		else:
			print i * "*"

draw_stars(x)



