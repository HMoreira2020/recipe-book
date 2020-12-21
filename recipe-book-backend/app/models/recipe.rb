class Recipe < ApplicationRecord
    has_and_belongs_to_many :books

    validates :name, :image_url, :overview, :ingredients, :cook_time, :prep_time, :instructions, presence: :true 
end
