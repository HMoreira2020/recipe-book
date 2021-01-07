export const editRecipe = (recipe, recipeId, bookId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/books/${bookId}/recipes/${recipeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(book => {
            if (book.error) {
                alert(book.error)
            } else {
                dispatch({type: "EDIT_RECIPE", payload: book})
            }
        })
    }
}