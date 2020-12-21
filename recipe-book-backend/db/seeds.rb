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
    instructions: "Add all ingredients to a jar, cover with a tightly closed lid and shake untill well blended."
    )
book = Book.create(title: 'Healthy Favorites', description: "Recipes we eat weekly")
book.recipes << recipe
book.save 