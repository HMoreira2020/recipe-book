class CreateJoinTableBooksRecipes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :books, :recipes do |t|
      t.index [:book_id, :recipe_id]
      t.index [:recipe_id, :book_id]
    end
  end
end
