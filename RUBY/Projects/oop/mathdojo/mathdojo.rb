class MathDojo
  # your code here
  attr_reader :result

  def initialize *params
    # puts "DATA FROM INIT: #{params}"
    @add = 0
    @subtract = 0
    self
  end

  def add(*params)
    # puts "DATA FROM ADD: #{params}, #{@add}"
    # puts "#{params.reduce(:+)}"
    @add += params.flatten.reduce(:+)
    # puts "#{@add}"
    self
  end

  def subtract(*params)
    # puts "DATA FROM SUBTRACT: #{params}, #{@subtract}"
    # puts "#{params.reduce(:-)}"
    @subtract -= params.flatten.reduce(:-) # challenge1
    # @subtract -= params.flatten.reduce(:+) # challenge2
    # puts "#{@subtract}"
    self
  end

  def display_all()
    show = @add + @subtract
    puts show
    self
  end

end


test = MathDojo.new.add(2).add(2, 5).subtract(3, 2).display_all.result
challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).display_all.result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).display_all.result # => 23.15
