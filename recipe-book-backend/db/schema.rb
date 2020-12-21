# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_21_001815) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "books_recipes", id: false, force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "recipe_id", null: false
    t.index ["book_id", "recipe_id"], name: "index_books_recipes_on_book_id_and_recipe_id"
    t.index ["recipe_id", "book_id"], name: "index_books_recipes_on_recipe_id_and_book_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.text "overview"
    t.string "ingredients"
    t.string "cook_time"
    t.string "prep_time"
    t.text "instructions"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "book_id", null: false
    t.index ["book_id"], name: "index_recipes_on_book_id"
  end

  add_foreign_key "recipes", "books"
end
