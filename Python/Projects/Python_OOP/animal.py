class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        print "Health: " + str(self.health)
        return self

    def run(self):
        self.health -= 5
        print "Health: " + str(self.health)
        return self

    def displayHealth(self):
        print "Animal Name: " + str(self.name)
        print "Animal Health: " + str(self.health)
        print "Dog Name: " + str(self.name)
        print "Dog Health: " + str(self.health)
        print "This is a Dragon!: " + str(self.name)
        print "This is a Dragon!: " + str(self.health)
        return self


class Dog(Animal):
    def __init__(self, name):
        super(Dog,self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        print "Petting: " + str(self.health)
        return self


class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self


animal = Animal("andy")
animal.walk().walk().walk().run().run().displayHealth().fly().pet()

dog = Dog("Doggie")
dog.walk().walk().walk().run().run().pet().displayHealth()

dragon = Dragon("Tom")
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
