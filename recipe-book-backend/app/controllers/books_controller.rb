class BooksController < ApplicationController
    before_action :set_book, only: [:show, :update, :destroy]
    
   def index
       books = Book.all 
       render json: BookSerializer.new(books).to_serialized_json
   end 

   def create 
       book = Book.new(book_params)
       if book.save  
           render json: BookSerializer.new(book).to_serialized_json, status: :created 
       else
           render json: { errors: book.errors.full_messages }, status: :not_acceptable
       end

   end 

   def show 
       render json: BookSerializer.new(@book).to_serialized_json
   end 

   def update
       if @book.update(book_params) 
           render json: BookSerializer.new(@book).to_serialized_json, status: :updated
       else
           render json: { errors: @book.errors.full_messages }, status: :not_acceptable
       end
   end 

   def destroy
       @book.destroy 
   end 

   private 
   def set_book
       @book = Book.find(params[:id])
   end
   
   def book_params 
       params.require(:book).permit(:title, :description)
   end 
end
