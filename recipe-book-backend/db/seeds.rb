# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



recipe = Recipe.create(
    name: "Heather's Best Dressing", 
    image_url: "https://www.recipetineats.com/wp-content/uploads/2016/12/Maple-Syrup-Dressing-2-747x747.jpg", 
    overview: "I somehow threw together this combo a few years ago and my husband just can't get enough. It's an amazing, healthy salad dressing but also a dipping sauce and pairs well with just about everything.  We've eaten it with steak, chicken, even pizza! It's vegan, gluten-free, dairy-free and the raw garlic supports your immunity.", 
    ingredients: "4 raw garlic cloves, crushed. 2 tbsp Dijon mustard. 1/2 cup olive oil. 1 tbsp maple syrup. 2 tsp fresh squeezed lemon juice.", 
    cook_time: " - ", 
    prep_time: "5 minutes", 
    instructions_1: "Add all ingredients to a jar, cover with a tightly closed lid and shake untill well blended.",
    instructions_2: "",
    instructions_3: "",
    instructions_4: "",
    instructions_5: ""
    )
recipe_2 = Recipe.create(
    name: "'Good on Everything' Sauce", 
    image_url: "https://i.pinimg.com/564x/6e/dc/07/6edc077c9718cb7814a4c81ec809a700.jpg", 
    overview: "Keep this around for a quick and delicious salad dressing, but my husband puts it on everything from pizza to tacos!", 
    ingredients: "2 cups olive oil, 4 raw garlic cloves minced, 2 tsp lemon juice, 3 tbsps dijon or honey dijon mustard, dash salt, 1 tbsp maple syrup", 
    cook_time: "0 minutes", 
    prep_time: "15 minutes", 
    instructions_1: "Put everything together in a jar and shake until well incorporated.  Do not refrigerate. Lasts for about a week on the counter"
)
book = Book.create(title: 'Healthy Favorites', description: "Recipes we eat weekly")
book_2 = Book.create(title: 'Healthy Sauces', description: 'Salad dressings and sauces')
book.recipes << recipe
book_2.recipes << recipe_2
book.save 