class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show, :update, :destroy]
    before_action :set_book, only: [:create, :destroy]
     # get '/recipes', to: 'recipe#index'
    def index
        if params[:book_id]
            @book = Book.find(params[:book_id])
            recipes = @book.recipes
            render json: RecipeSerializer.new(recipes).to_serialized_json
        else 
            recipes = Recipe.all 
            render json: RecipeSerializer.new(recipes).to_serialized_json
        end
    end 

    #working
    def create 
        recipe = @book.recipes.build(recipe_params)
        @book.save
        if recipe.save  
            render json: BookSerializer.new(@book).to_serialized_json, status: :created 
        else
            render json: { error: recipe.errors.full_messages }, status: :not_acceptable
        end

    end 

    def show 
        render json: RecipeSerializer.new(@recipe).to_serialized_json
    end 

    def update
        if @recipe.update(recipe_params) 
            render json: RecipeSerializer.new(@recipe).to_serialized_json, status: :updated
        else
            render json: { error: @recipe.errors.full_messages }, status: :not_acceptable
        end
    end 
    
    #working 
    def destroy
        @book.recipes.delete(@recipe) 
        render json: BookSerializer.new(@book).to_serialized_json, status: :created 
    end 

    private 
    def set_recipe
        @recipe = Recipe.find(params[:id])
    end
    
    def set_book 
        @book = Book.find(params[:book_id])
    end 

    def recipe_params 
        params.require(:recipe).permit(:name, :image_url, :overview, :ingredients, :cook_time, :prep_time, :instructions, :book_id)
    end 
end
