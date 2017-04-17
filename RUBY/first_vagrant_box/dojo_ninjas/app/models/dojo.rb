class Dojo < ActiveRecord::Base
  has_many :ninja, dependent: :destroy  # It was ninjas. I changed it to ninja.
  validates :name, :city, :state, presence: true
  validates :state, length: {is: 2}
end
