class Book < ApplicationRecord
    has_many :books_recipes 
    has_many :recipes, through: :books_recipes, dependent: :destroy

    validates :title, :description, presence: :true 
    validates :title, uniqueness: { case_sensitive: false }
    # remove uniquess validation if user model is added - user can create a book with a name that someone else's book already has
end

