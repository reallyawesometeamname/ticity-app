class TicitySearch < ApplicationRecord
    belongs_to :user
    validates :housing, :costofliving, :startups, :capital, :travel, :commute, :business, :safety, :healthcare, :education, :environment, :economy, :taxation, :internetaccess, :leisure, :tolerance, :outdoors, presence: true
end
