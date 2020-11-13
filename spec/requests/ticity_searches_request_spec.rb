require 'rails_helper'

RSpec.describe "TicitySearches", type: :request do
    let(:user)  {User.create(
        email: "testover9000@test.com", 
        password: "123123", 
        password_confirmation: "123123"
        )}
    let(:testSearch) {TicitySearch.create(
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
    )}

    describe "index" do
        it "gets a list of searches" do
            testSearch
            get "/ticity_searches"
            json = JSON.parse(response.body)
            expect(response).to have_http_status(:ok)
            expect(json.length).to eq 1
        end
    end

    describe "create" do
        it "creates a search" do
            searchParams = {
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
            }
            post "/ticity_searches", params: {ticity_search: searchParams}
            search = TicitySearch.last
            expect(search).to have_attributes(searchParams)
        end
        it "fails to create a search due to missing field (housing) " do
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

    describe "show" do
        it "displays a search" do
            sign_in(user)
            testSearch
            get "/ticity_searches/#{testSearch.id}", params: {ticity_search: testSearch}
            json = JSON.parse(response.body)
            expect(response).to have_http_status(:ok)
            expect(json["id"]).to eq(testSearch.id)
        end
    end

    describe "update" do 
        it "updates a search" do
            sign_in(user)
            editParams = {housing: 6}
            patch "/ticity_searches/#{testSearch.id}", params: {ticity_search: editParams}
            expect(testSearch.reload).to have_attributes(editParams)
        end
        it "fails to update a search due to an invalid edit" do
            sign_in(user)
            editParams = {housing: "banana"}
            patch "/ticity_searches/#{testSearch.id}", params: {ticity_search: editParams}
            expect(testSearch.reload).not_to have_attributes(editParams)
        end
    end

    describe "destroy" do 
        it "destroys a search" do
            sign_in(user)
            delete "/ticity_searches/#{testSearch.id}", params: {ticity_search: testSearch}
            testSearch.destroy
            expect(testSearch).to be_destroyed
        end
    end
end
