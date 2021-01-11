class Book < ApplicationRecord
    has_many :books_recipes 
    has_many :recipes, through: :books_recipes, dependent: :destroy

    validates_uniqueness_of :name, scope: :recipe
end

