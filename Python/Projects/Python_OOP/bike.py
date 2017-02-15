
class Bike(object):
    def __init__(self, price=200, max_speed=3, miles=25):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print self.price, self.max_speed,  self.miles

    def ride(self, times):
        for i in range(0,times):
            self.miles += 10
        print "Riding: " + str(self.miles) + " miles"

    def reverse(self, times):
        for i in range(0, times):
            if(self.miles < 5):
                self.miles = 0
                print "Back to: " + str(self.miles) + " miles."
                return
            else:
                self.miles -= 5
                print "Reversing: " + str(self.miles) + " miles."


hello1 = Bike(100,55)
hello2 = Bike(200,65)
hello3 = Bike(300,75)
hello1.ride(3)
hello1.reverse(1)
hello1.displayInfo()
hello2.ride(2)
hello2.reverse(2)
hello2.displayInfo()
hello3.reverse(3)
hello3.displayInfo()
