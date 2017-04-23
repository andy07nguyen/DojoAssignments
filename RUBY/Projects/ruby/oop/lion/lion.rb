puts 'I am in the lion file'

require_relative 'mammal'
class Lion < Mammal
  # previous code removed for brevity
  def initialize
    @health = 170
  end

  def fly
    @health-=10
    self
  end

  def attack_town
    @health-=50
    self
  end

  def eat_humans
    @health+=20
    self
  end

  def display_health
    puts "This is a lion: #{@health}"
    super
  end

end
simba = Lion.new
simba.display_health
simba.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly.display_health
