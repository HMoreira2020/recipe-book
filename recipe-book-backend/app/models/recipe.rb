class Recipe < ApplicationRecord
    belongs_to :book

    validates :name, :image_url, :overview, :ingredients, :cook_time, :prep_time, :instructions, presence: :true 
end
