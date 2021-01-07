class AddColumnsToRecipes < ActiveRecord::Migration[6.0]
  def change
    rename_column :recipes, :instructions, :instructions_1
    add_column :recipes, :instructions_2, :text
    add_column :recipes, :instructions_3, :text
    add_column :recipes, :instructions_4, :text
    add_column :recipes, :instructions_5, :text
  end
end
