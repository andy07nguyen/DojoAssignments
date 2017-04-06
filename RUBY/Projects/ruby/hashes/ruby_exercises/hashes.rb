x = {"first_name" => "Coding", "last_name" => "Dojo"}
puts "Your last name is Dojo" if x["last_name"].eql? "Dojo"

y = {:first_name => "Coding", :last_name => "Dojo"}
puts "Y is ", y
puts y[:first_name], y[:last_name]

puts "DELETING :first_name"
y.delete(:first_name)
puts "Y is now", y

if y.has_key?(:first_name)
  puts "Y has a key called :first_name"
else
  puts "Y does not have a key called :first_name"
end

if y.has_value?("Dojo")
  puts "Y has a value called Dojo"
else
  puts "Y does NOT have a value called Dojo"
end





# .delete(key) deletes the key-value pair and returns the value from hsh whose key is equal to key.

h = {first_name: "Coding", last_name: "Dojo"}
h.delete :last_name
puts h

# .empty? => returns true if hash contains no key-value pairs
h = {}
h.empty?

# .has_key?(key) returns true if given key is present
h = {first_name: "Coding", last_name: "Dojo"}
h.has_key? :first_name # => true
h.has_key? "first_name" # => false

# .has_value?(value) returns true if given value is present for some key
h = {first_name: "Coding", last_name: "Dojo"}
h.has_value? "Coding" # => true
h.has_value? "Bootcamp" # => false
