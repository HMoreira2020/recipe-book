class Book < ApplicationRecord
    has_many :books_recipes 
    has_many :recipes, through: :books_recipes
end

