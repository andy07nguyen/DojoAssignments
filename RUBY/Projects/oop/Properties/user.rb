# class User
#   @first_name
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"


# class User
#   def first_name=(val)
#   @first_name = val
#   end
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"
#
# puts user1.inspect
#
# user1.first_name


# class User
#   def first_name
#     return @first_name
#   end
# end


# class User
#   def first_name
#     @first_name
#     @last_name
#   end
# end


# class User
#   attr_reader :last_name
#   attr_writer :last_name
#   ...
# end


# class User
#   attr_accessor :first_name
#   attr_accessor :last_name
# end


class User
  attr_accessor :first_name, :last_name
  def initialize(f_name, l_name)
    puts "DATA FROM attr_accessor: ", f_name.inspect, l_name.class
    @first_name = f_name
    @last_name = l_name
  end
end
steph = User.new("Stephen", "Curry")
puts steph.inspect
