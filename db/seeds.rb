# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = [
  {
    email: "test@test.com",
    password: "ticity",
    password_confirmation: "ticity",
  },
  {
    email: "test2@test.com",
    password: "ticity2",
    password_confirmation: "ticity2"
  }
]

user.each do |attribute|
  User.create attribute
end

mockSearch = [
  {
    city1: "San Diego",
    city2: "Seattle",
    city3: "Austin",
    housing: 7,
    costofliving: 6,
    startups: 3,
    capital: 1,
    travel: 1,
    commute: 5,
    business: 8,
    safety: 1,
    healthcare: 8,
    education: 4,
    environment: 7,
    economy: 6,
    taxation: 4,
    internetaccess: 5,
    leisure: 4,
    tolerance: 7,
    outdoors: 3,
    user_id: User.first.id,
  },
  {
    city1: "San Jose",
    city2: "San Francisco",
    city3: "Dallas",
    housing: 7,
    costofliving: 6,
    startups: 3,
    capital: 1,
    travel: 1,
    commute: 5,
    business: 8,
    safety: 1,
    healthcare: 8,
    education: 4,
    environment: 7,
    economy: 6,
    taxation: 4,
    internetaccess: 5,
    leisure: 4,
    tolerance: 7,
    outdoors: 3,
    user_id: User.second.id,
  },
]

mockSearch.each do |attribute|
  TicitySearch.create attribute
  puts search: "#{attribute}"
end
