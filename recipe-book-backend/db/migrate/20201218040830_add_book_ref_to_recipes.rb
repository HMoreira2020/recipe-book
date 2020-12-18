class AddBookRefToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_reference :recipes, :book, null: false, foreign_key: true
  end
end
