export const addBook = (book) => {
    debugger
    return (dispatch) => {
        fetch("http://localhost:3000/books", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify(book)
        })
        
    };
  };