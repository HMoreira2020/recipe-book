class RecipeSerializer 
    def initialize(recipe_object)
        @recipe = recipe_object 
    end 

    def to_serialized_json
        @recipe.to_json(:include => {
          :books => {:only => :id}
        })
    end
end 