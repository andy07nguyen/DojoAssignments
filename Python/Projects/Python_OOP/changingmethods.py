
class Bike(object):
    def __init__(self, price=200, max_speed=3, miles=25):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print self.price, self.max_speed,  self.miles
        return self

    def ride(self):
        self.miles += 10
        print "Riding: " + str(self.miles) + " miles"
        return self

    def reverse(self):
        if(self.miles < 5):
            self.miles = 0
            print "Back to: " + str(self.miles) + " miles."
            return self
        else:
            self.miles -= 5
            print "Reversing: " + str(self.miles) + " miles."
        return self

hello1 = Bike(100,55)
hello2 = Bike(200,65)
hello3 = Bike(300,75)
hello1.ride().ride().ride().reverse().displayInfo()
hello2.ride().ride().reverse().reverse().displayInfo()
hello3.reverse().reverse().reverse().displayInfo()
