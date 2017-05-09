require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  context "With valid attributes" do
    it "should save" do
      expect(build(:user)).to be_valid
    end
  end

  context "With invalid attributes" do
    it "should not save if username field is blank" do
      expect(build(:user, username: "")).to be_invalid
    end

    it "should not save if username is less than 5 characters" do
      expect(build(:user, username: "abcd")).to be_invalid
    end

    it "should be a unique username" do
      userq = create(:user, username: "codingdojo")
      expect(build(:user, username:"codingdojo")).to be_invalid
    end
  end
end
