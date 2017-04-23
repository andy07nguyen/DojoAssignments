# Print 1-255
# Write a program that would print all the numbers from 1 to 255.
# for i in 1..255
#   puts "Number: #{i}"
# end

# Print odd numbers between 1-255
# Write a program that would print all the odd numbers from 1 to 255.
# (1..255).each { |i| puts i if i.odd? }

# Print Sum
# sum = 0
# (0..255).each { |i| puts "New number: #{i} Sum: #{sum += i}" }

# Iterating through an array
# array X, say [1,3,5,7,9,13]
# x = [1,3,5,7,9,13]
# for i in x
#   puts i
# end
# x.each { |i| puts i }

# Find Max
# arr = [1,2,3,4,5,-14,-2,-33,-7]
# puts arr.max

# Get Average
# arr = [1,2,3,4,5]
# puts arr.reduce(:+) / arr.length

# Array with Odd Numbers
# y = []
# (1..255).each { |i| y << i if i.odd? }
# puts y

# Greater Than Y
# y = 4
# array = [1,2,3,6,7,9]
# puts array.count { |i| i > y }

# Square the values
# x = [1, 5, 10, -2]
# puts x.map! { |i| i * i }

# Eliminate Negative Numbers
# x = [1, 5, 10, -2]
# puts x.each_index { |i| x[i] = 0 if x[i] < 0 }

# Max, Min, and Average
# x = [1, 5, 10, -2]
# { max: x.max, min: x.min, average: x.reduce(:+) / x.length }
# puts x.max
# puts x.min
# puts x.reduce(:+) / x.length.to_f

# Shifting the Values in the Array
# x = [1, 5, 10, 7, -2]
# puts x.rotate(1)[x.length-1] = 0

# Number to String
array = [1,-2,3,4,-5]
puts array.each_index { |i| array[i] = "Dojo"  if array[i] < 0}
