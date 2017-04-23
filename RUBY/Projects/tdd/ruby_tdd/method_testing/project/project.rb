class Project
  # your code here
  attr_accessor :name, :description, :owner
  attr_reader :tasks

  def initialize(name, description, owner)
    @name = name
    @description = description
    @owner = owner
    @tasks = []
    # puts "#{@name}, #{@description}"
  end

  def elevator_pitch
    "#{@name}, #{@description}"
  end

  def print_tasks
    @tasks.each { |elem| puts elem }
  end

  def add_tasks task
    @tasks << task
  end
end

project1 = Project.new("Project 1", "Description 1", "John Doe")
puts project1.name # => "Project 1"
puts project1.elevator_pitch  # => "Project 1, Description 1"
