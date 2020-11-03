class CreateTicitySearches < ActiveRecord::Migration[6.0]
  def change
    create_table :ticity_searches do |t|
      t.string :city1
      t.string :city2
      t.string :city3
      t.integer :housing
      t.integer :costofliving
      t.integer :startups
      t.integer :venturecapital
      t.integer :travel
      t.integer :commute
      t.integer :business
      t.integer :safety
      t.integer :healthcare
      t.integer :education
      t.integer :environment
      t.integer :economy
      t.integer :taxation
      t.integer :internetaccess
      t.integer :leisure
      t.integer :tolerance
      t.integer :outdoors
      t.integer :user_id

      t.timestamps
    end
  end
end
