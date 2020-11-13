require 'rails_helper'

RSpec.describe TicitySearch, type: :model do
  it "should validate city1" do
    search = TicitySearch.new(user: User.new, city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate city2" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
   expect(search).to eq(false)
  end
  it "should validate city3" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate housing" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate costofliving" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate startups" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate capital" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate travel" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate commute" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate business" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate safety" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate healthcare" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4,  education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate education" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate environment" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
   expect(search).to eq(false)
  end
  it "should validate economy" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate taxation" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, internetaccess: 4, leisure: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate internetaccess" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, leisure: 4, tolerance: 4, outdoors: 4).save
   expect(search).to eq(false)
  end
  it "should validate leisure" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, tolerance: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate tolerance" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, outdoors: 4).save
    expect(search).to eq(false)
  end
  it "should validate outdoors" do
    search = TicitySearch.new(user: User.new, city1: "Seattle", city2: "San Diego", city3: "Austin", housing: 4, costofliving: 4, startups: 4, capital: 4, travel: 4, commute: 4, business: 4, safety: 4, healthcare: 4, education: 4, environment: 4, economy: 4, taxation: 4, internetaccess: 4, leisure: 4, tolerance: 4).save
    expect(search).to eq(false)
  end
end
