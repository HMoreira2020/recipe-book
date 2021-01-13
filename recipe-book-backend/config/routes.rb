Rails.application.routes.draw do
  # resources :recipes, only: [:index, :show, :update]  
  # resources :books do 
  #   resources :recipes [:create, :update, :destroy]
  # end
  
  resources :recipes, only: [:index]  
  resources :books, only: [:index, :create, :update, :destroy] do 
    resources :recipes [:create, :update, :destroy]
  end
end


# "http://localhost:3000/books"  create book 
# "http://localhost:3000/books/${bookId}/recipes" create recipe nested
# "http://localhost:3000/books/${bookId}" destroy book
# "http://localhost:3000/books/${bookId}/recipes/${recipeId}" destroy recipe nested 
# "`http://localhost:3000/books/${bookId}"  update book 
# "http://localhost:3000/books/${bookId}/recipes/${recipeId}" update recipe nested 
# "http://localhost:3000/books" books index 
# "http://localhost:3000/recipes" recipes index