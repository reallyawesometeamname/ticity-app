require 'rails_helper'

RSpec.describe TicitySearch, type: :model do
  it "should validate city1" do
    search = TicitySearch.create
    expect(search.errors[:city1]).to_not be_empty
  end
  it "should validate city2" do
    search = TicitySearch.create
    expect(search.errors[:city2]).to_not be_empty
  end
  it "should validate city3" do
    search = TicitySearch.create
    expect(search.errors[:city3]).to_not be_empty
  end
  it "should validate housing" do
    search = TicitySearch.create
    expect(search.errors[:housing]).to_not be_empty
  end
  it "should validate costofliving" do
    search = TicitySearch.create
    expect(search.errors[:costofliving]).to_not be_empty
  end
  it "should validate startups" do
    search = TicitySearch.create
    expect(search.errors[:startups]).to_not be_empty
  end
  it "should validate capital" do
    search = TicitySearch.create
    expect(search.errors[:capital]).to_not be_empty
  end
  it "should validate travel" do
    search = TicitySearch.create
    expect(search.errors[:travel]).to_not be_empty
  end
  it "should validate commute" do
    search = TicitySearch.create
    expect(search.errors[:commute]).to_not be_empty
  end
  it "should validate business" do
    search = TicitySearch.create
    expect(search.errors[:business]).to_not be_empty
  end
  it "should validate safety" do
    search = TicitySearch.create
    expect(search.errors[:safety]).to_not be_empty
  end
  it "should validate healthcare" do
    search = TicitySearch.create
    expect(search.errors[:healthcare]).to_not be_empty
  end
  it "should validate education" do
    search = TicitySearch.create
    expect(search.errors[:education]).to_not be_empty
  end
  it "should validate environment" do
    search = TicitySearch.create
    expect(search.errors[:environment]).to_not be_empty
  end
  it "should validate economy" do
    search = TicitySearch.create
    expect(search.errors[:economy]).to_not be_empty
  end
  it "should validate taxation" do
    search = TicitySearch.create
    expect(search.errors[:taxation]).to_not be_empty
  end
  it "should validate internetaccess" do
    search = TicitySearch.create
    expect(search.errors[:internetaccess]).to_not be_empty
  end
  it "should validate leisure" do
    search = TicitySearch.create
    expect(search.errors[:leisure]).to_not be_empty
  end
  it "should validate tolerance" do
    search = TicitySearch.create
    expect(search.errors[:tolerance]).to_not be_empty
  end
  it "should validate outdoors" do
    search = TicitySearch.create
    expect(search.errors[:outdoors]).to_not be_empty
  end
end
