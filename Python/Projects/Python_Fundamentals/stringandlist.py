#Find & Replace:
str = "if monkeys like bananas, then I must be a monkey!"
print str.find('monkey')
print str.index('monkey')
print str[42:48]

str = "if monkeys like bananas, then I must be a monkey!"
print str.replace('monkey','alligator')



#Min & Max:
x = [2,54,-2,7,12,98]
print min(x)
print max(x)


#First & Last:
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]

newList = []
newList.append(x[0])
newList.append(x[len(x)-1])
print newList


#New List:
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x

temp = []
newarr = []

for i in x:
	if i < 0:
		temp.append(i)
	else:
		newarr.append(i)
		print newarr

newarr.insert(0,temp)
print newarr







