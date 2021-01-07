class BooksController < ApplicationController
    before_action :set_book, only: [:show, :update, :destroy]
    # working
   def index
       books = Book.all 
       render json: BookSerializer.new(books).to_serialized_json
   end 
#    working
   def create 
       book = Book.new(book_params)
       if book.save  
           render json: BookSerializer.new(book).to_serialized_json, status: :created 
       else
           render json: { error: book.errors.full_messages }, status: :not_acceptable
       end

   end 

   def show 
       render json: BookSerializer.new(@book).to_serialized_json
   end 

   def update
    binding.pry
    if @book.update(book_params)
      render json: BookSerializer.new(@book).to_serialized_json, status: :accepted
    else 
      render json: { error: @book.errors.full_messages }
    end 
   end 

   def destroy
        Book.delete(@book)
        render json: BookSerializer.new(@book).to_serialized_json, status: :accepted
    end 

   private 
   def set_book
        @book = Book.find(params[:id])
   end

   def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
   end 
   
   def book_params 
       params.require(:book).permit(:title, :description, :recipe_id)
   end 
end
