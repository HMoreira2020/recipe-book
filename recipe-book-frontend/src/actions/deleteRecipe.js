export const deleteRecipe = (bookId,  recipeId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/books/${bookId}/recipes/${recipeId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(book => dispatch({type: 'DELETE_RECIPE', payload: book})
        )}
}