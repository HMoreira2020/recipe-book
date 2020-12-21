class BookSerializer 
    def initialize(book_object)
        @book = book_object 
    end 

    def to_serialized_json
        options = {
            include: {
              recipes: {
                except: [:created_at, :updated_at]
              }
            },
            except: [:created_at, :updated_at],
          }
        @book.to_json(options)
    end
end 

