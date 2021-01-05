export const editRecipe = (recipe, recipeId) => {
    return (dispatch) => {
        debugger
        return fetch(`http://localhost:3000/recipes/${recipeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(recipe => {
            if (recipe.error) {
                alert(recipe.error)
            } else {
                dispatch({type: "EDIT_RECIPE", payload: recipe})
            }
        })
    }
}