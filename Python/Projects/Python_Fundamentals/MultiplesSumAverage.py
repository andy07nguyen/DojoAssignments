'''
Assignment: Multiples, Sum, Average
This assignment has several parts. All of your code should be in one file that is well 
commented to indicate what each block of code is doing and which problem you are solving. 
Don't forget to test your code as you go!

Multiples:

Part I
Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't 
use an array to do this exercise.

Part II
Create another program that prints all the multiples of 5 from 5 to 1,000,000.

Sum List
Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]

Assignment: Average List
Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
'''


#Part 1:
# def num1():
# 	for num in range(1, 10001, 2):
# 		print num
# num1()


#Part 2:
# def num2():
# 	for num in range(0, 1000005, 5):
# 		print num
# num2()


#Sum List:
# a = [1, 2, 5, 10, 255, 3]

# def sum(a):
# 	num = 0
# 	for i in a:
# 	 	num = num + i
	 
# 	print num
# sum(a)

#Average List:
a = [1, 2, 5, 10, 255, 3]

def sum(a):
	num = 0
	for i in a:
		num = num + i
	print num
	print num/len(a)
sum(a)





