class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 10, less_than: 150 }
  validates :first_name, :last_name, length: { minimum: 2 }
end
