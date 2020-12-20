class BookSerializer 
    def initialize(book_object)
        @book = book_object 
    end 

    def to_serialized_json
        @book.to_json(:include => [:recipes])
      end
end 