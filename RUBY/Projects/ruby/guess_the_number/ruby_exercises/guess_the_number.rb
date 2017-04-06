
# x =  1
#
# if x > 2
#   puts "x is greater than 2"
# elsif x <= 2 and x != 0
#   puts "x is 1"
# else
#   puts "I can't guess the number"
# end

def guess_number guess
    number = 25
    # your code here
    if guess == number
      return puts "You got it!"
    elsif guess > number
      return puts "Guess was too high!"
    elsif guess < number
      return puts "Guess was too low!"
    else
      return puts "I can't guess the number"
    end
end

guess_number(7)
