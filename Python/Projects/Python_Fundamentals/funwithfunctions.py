#Odd/Even:
# def odd_even():
# 	num = "Number is "
# 	odd =  "This is an odd number."
# 	even = "This is an even number."

# 	for i in range(1, 2001):
# 		if i % 2 == 0:
# 			print num + str(i) + even 
# 		else:
# 			i % 2 == 1
# 			print num + str(i) + odd

# odd_even()


#Multiply:
# list = [2,4,10,16]
# newList = []

# def multiply(list):
# 	for i in list:
# 		i = i * 5
# 		print i
# 	return newList.append(i)
# multiply(list)


#Hacker Chanllenge:

list = [2,4,10,16]

def multiply(list, b):
	newList = []
	for i in list:
		i = i * b
		newList.append(i)
	return newList
# print multiply(list, 4)


def layered_multiples(arr):
	new_array = []
	for i in range(0,len(arr)):
		arr1 = []
		for i in range(0,arr[i]):
			arr1.append(1)
			# print arr1
		new_array.append(arr1)
		# print new_array
	return new_array

x = layered_multiples(multiply([2,4,5],3))
print x























