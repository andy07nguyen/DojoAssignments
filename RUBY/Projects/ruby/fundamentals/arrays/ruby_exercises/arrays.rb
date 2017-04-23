# Challenge
# Try the following methods at least once either on a separate Ruby file or on irb.
# .at or .fetch .delete .reverse .length .sort .slice .shuffle .join .insert values_at() -> returns an array with values specified in the param
# e.g. a = %w{cat dog bear}; puts a.values_at(1,2).join(' and ') #=> "dog and bear"

a = ["Matz", "Guido", "Dojo", "Choi", "John"]
b = [5,6,9,1,2,4,7,8,10]
c = [1,2,3]
d = ["andy"]
# .at
# puts a.at(1)

# .fetch
# puts a.fetch(3)

# .delete
# a.delete("Dojo")
# puts a

# .reverse
# puts c.reverse

# .length
# puts b.length

# .sort
# puts a.sort()
# puts b.sort()

# .slice
# puts a.slice(1)

# .shuffle
# puts a.shuffle

# .join
# puts a.join

# .insert
# puts d.insert(1, "code")

# .values_at
# puts a.values_at(1,4)
puts a.values_at(0,1).join("is")
