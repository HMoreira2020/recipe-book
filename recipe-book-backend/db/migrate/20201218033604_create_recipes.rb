class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image_url
      t.string :overview
      t.string :ingredients
      t.string :cook_time
      t.string :prep_time
      t.text :instructions

      t.timestamps
    end
  end
end
