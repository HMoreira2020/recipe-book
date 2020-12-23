class Recipe < ApplicationRecord
    has_many :books_recipes 
    has_many :books, through: :books_recipes

    validates :name, :image_url, :overview, :ingredients, :cook_time, :prep_time, :instructions, presence: :true 


end
