export const editBook= (book, bookId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/books/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(book => {
            if (book.error) {
                alert(book.error)
            } else {
                dispatch({type: "EDIT_BOOK", payload: book})
                alert("Success!")

            }
        })
    }
}