class RemoveBookReferenceFromRecipes < ActiveRecord::Migration[6.0]
  def change
    remove_column :recipes, :book_id, :integer
  end
end
