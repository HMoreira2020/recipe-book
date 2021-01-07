class BooksRecipe < ApplicationRecord
    belongs_to :book 
    belongs_to :recipe

    validates_uniqueness_of :book_id, :scope => :recipe_id, message: "already has this recipe."
    
end
