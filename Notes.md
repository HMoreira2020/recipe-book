
Dom call: 
why does the route work now since I changed it from /recipes to /recipes-list 
*how to validate if name of recipe is already in book case sensitive
authentication before deleting or adding - need a user? 
fetch the info i need to avoid losing everything on refresh?

why does the recipe title wrap? 
how can I add the responsiveness to my web pages - resizing the window 


TODO:
custom validator for uniqueness of recipe name in a book 
add search to recipes page 
refactor all routes with match instead of props? 
more destructuring 
clean up all components and containers/refactor
 
style app 
authentication before deleting or adding 

losing everything on refresh - how to fix that 


Book 
has_many recipes 
:title 
:description 

Recipe
belongs_to book 
<!-- has_many reviews -->

:name
:image_url
:overview
:ingredients 
:cook_time 
:prep_time 
:instructions 
:book_id

<!-- User
has_many reviews
:username 
:password

reviews
belongs to recipe
belongs to user 
:title 
:content 
:user_id 
:recipe_id  -->

start with: 
Create a book with a title 
edit title of book
delete book
create and add recipes to the book 
delete recipes in your book 
edit recipes 

add later: 
browse other books 
create a recipe review  
edit your review 
delete your review
add recipe to book function from someone else's book 



style 
see other books that you didn't create 
styling 
authenticate before deleting, editing, or adding to someone else's book (react router?)


how to go to a book/3 directly not working - fix it 

authentication before deleting or adding 
styling so images are all the same size 
add a recipe from someone else's book to your own book? will i need sessions on some sort? 
access routes using a name instead of id in the url 

