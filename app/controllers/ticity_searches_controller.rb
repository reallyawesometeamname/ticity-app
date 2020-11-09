class TicitySearchesController < ApplicationController
  
  def index
    ticity_searches = TicitySearch.all
    render json: ticity_searches
  end

  def create
    ticity_search = TicitySearch.create(ticity_search_params)
    if ticity_search.valid?
      render json: ticity_search
    else
      render json: ticity_search.errors, status: :unprocessable_entity
    end
  end

  def update
    ticity_search = current_user.searches.find(params[:id])
    ticity_search.update(ticity_search_params)
    if ticity_search.valid?
      render json: ticity_search
    else
      render json: ticity_search.errors, status: :unprocessable_entity
    end
  end

  def destroy
    ticity_search = current_user.searches.find(params[:id])
    ticity_search.destroy()
    render json: ticity_search
  end

  private

  def ticity_search_params
    params.require(:ticity_search).permit(:city1, :city2, :city3, :housing, :costofliving, :startups, :capital, :travel, :commute, :business, :safety, :healthcare, :education, :environment, :economy, :taxation, :internetaccess, :leisure, :tolerance, :outdoors, :user_id)
  end

end
