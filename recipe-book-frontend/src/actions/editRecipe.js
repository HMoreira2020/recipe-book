export const editRecipe = (bookId,  recipeId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/books/${bookId}/recipes/${recipeId}`, {
            method: 'PATCH'
        })
        .then(response => response.json())
        .then(book => dispatch({type: 'EDIT_RECIPE', payload: book})
        )}
}