export const addBook = (book) => {
    //makes a fetch post request to backend where it creates a new book
    return (dispatch) => {
        fetch("http://localhost:3000/books", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(book => {
            dispatch({type: "ADD_BOOK", payload: book})
            alert("Book created")
        })
        //takes json response and dispatches it to reducer to update state with new book
        //right away adding to redux store without refetching the data here 
    };
  };