export const deleteBook = (bookId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/books/${bookId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(book => {
            if (book.error) {
                alert(book.error)
            } else {
                dispatch({type: 'DELETE_BOOK', payload: book})
                alert("Book deleted")
            }
        })}
}

