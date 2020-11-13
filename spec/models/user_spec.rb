require 'rails_helper'

RSpec.describe User, type: :model do
  it "should validate email" do
    user = User.create
    expect(user.errors[:email]).to_not be_empty
  end
end  
