puts 'I am in the dog file'
require_relative 'mammal'

class Dog < Mammal
  # previous code removed for brevity
  def pet
    @health+=5
    # puts "PET: #{@health}"
    self
  end

  def walk
    @health-=1
    self
  end

  def run
    @health-=10
    self
  end

end
doggy = Dog.new
doggy.display_health
doggy.walk.walk.walk.run.run.pet.display_health
