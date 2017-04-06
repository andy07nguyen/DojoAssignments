class User
  # previous code removed for brevity

  def self.foo
    puts "This is a class method"
  end
end
u = User.new("Jane", "Doe")
u.foo # => NoMethodError: undefined method `foo'
User.foo # => "This is a class method"
