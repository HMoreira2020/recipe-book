Rails.application.routes.draw do
  
  resources :recipes, only: [:index]
  resources :books, except: [:show] do 
    resources :recipes, only: [:create, :update, :destroy]
  end
  
end

# Rails.application.routes.draw do
#   resources :recipes, only: [:index, :show, :update]
#   resources :books do 
#     resources :recipes
#   end
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# end

