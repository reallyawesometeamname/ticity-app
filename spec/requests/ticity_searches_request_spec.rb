require 'rails_helper'

RSpec.describe "TicitySearches", type: :request do
    describe "create" do
        it "creates a search" do
            user = User.create email: "testover9000@test.com", password: "123123", password_confirmation: "123123"
            searchParams = {
                city1: "Seattle", 
                city2: "San Diego", 
                city3: "Austin", 
                housing: 4, 
                costofliving: 4, 
                startups: 4, 
                apital: 4, 
                travel: 4, 
                commute: 4, 
                business: 4, 
                safety: 4, 
                healthcare: 4, 
                education: 4, 
                environment: 4, 
                economy: 4, 
                taxation: 4, 
                internetaccess: 4, 
                leisure: 4, 
                outdoors: 4, 
                tolerance: 4, 
                user_id: user.id
            }
            post "/ticity_searches", params: {ticity_search: searchParams}
            search = TicitySearch.last
            expect(search).to have_attributes(searchParams)
        end
        it "fails to create a search" do
            user = User.create email: "testover9000@test.com", password: "123123", password_confirmation: "123123"
            searchParams = {
                city1: "Seattle", 
                city2: "San Diego", 
                city3: "Austin", 
                costofliving: 4, 
                startups: 4, 
                capital: 4, 
                travel: 4, 
                commute: 4, 
                business: 4, 
                afety: 4, 
                healthcare: 4, 
                education: 4, 
                environment: 4, 
                economy: 4, 
                taxation: 4, 
                internetaccess: 4, 
                leisure: 4, 
                outdoors: 4, 
                tolerance: 4, 
                user_id: user.id
            }
            post "/ticity_searches", params: {ticity_search: searchParams}
            search = TicitySearch.last
            expect(search).to eq nil
        end
    end
    describe "update" do 
        it "updates a search" do
            user = User.create email: "testover9000@test.com", password: "123123", password_confirmation: "123123"
            binding.irb
            sign_in(user)
            search = TicitySearch.create(
                city1: "Seattle", 
                city2: "San Diego", 
                city3: "Austin", 
                housing: 4, 
                costofliving: 4, 
                startups: 4, 
                capital: 4, 
                travel: 4, 
                commute: 4, 
                business: 4, 
                safety: 4, 
                healthcare: 4, 
                education: 4, 
                environment: 4, 
                economy: 4, 
                taxation: 4, 
                internetaccess: 4, 
                leisure: 4, 
                outdoors: 4, 
                tolerance: 4, 
                user_id: user.id
            )
            editParams = {startups: 6}
            patch "/ticity_searches/#{search.id}", params: {ticity_search: editParams}
            expect(search.reload).to have_attributes(editParams)
        end
    end
    describe "destroy" do 
        it "destroys a search" do
            user = User.create email: "testover9000@test.com", password: "123123", password_confirmation: "123123"
            sign_in(user)
            search = TicitySearch.create(
                city1: "Seattle", 
                city2: "San Diego", 
                city3: "Austin", 
                housing: 4, 
                costofliving: 4, 
                startups: 4, 
                capital: 4, 
                travel: 4, 
                commute: 4, 
                business: 4, 
                safety: 4, 
                healthcare: 4, 
                education: 4, 
                environment: 4, 
                economy: 4, 
                taxation: 4, 
                internetaccess: 4, 
                leisure: 4, 
                outdoors: 4, 
                tolerance: 4, 
                user_id: user.id
            )
            delete "/ticity_searches/#{search.id}", params: {ticity_search: search}
            binding.irb
            search.destroy
            expect(search).to be_destroyed
        end
    end
end
