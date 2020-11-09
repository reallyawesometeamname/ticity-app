class ChangeVentureCapitalToCapital < ActiveRecord::Migration[6.0]
  def change
    rename_column :ticity_searches, :venturecapital, :capital
  end
end
