class ChangeOverviewToBeTextInRecipes < ActiveRecord::Migration[6.0]
  def change
    change_column :recipes, :overview, :text
  end
end
