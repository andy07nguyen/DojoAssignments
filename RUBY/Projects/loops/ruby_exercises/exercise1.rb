# WHILE LOOP:
# $i = 0
# $num = 5
# begin
#   puts "Inside the loop i = #{$i}"
#   $i += 1
#
#   puts "#1 is now 3" if $i == 3
#   puts "#1 is now 3" unless $i == 3
#
#
# end while $i < $num

# FOR LOOP:
for i in 0..5
  puts "Value of local variable is #{i}"

  puts "i is now 3!!!" if i==3
end
