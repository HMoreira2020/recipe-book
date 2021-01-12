export const addRecipe = (recipe, bookId) => {
    //makes a fetch post request to backend where it creates a new book
    return (dispatch) => {
        fetch(`http://localhost:3000/books/${bookId}/recipes`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(book => {
            if (book.error) {
                alert(book.error)
            } else {
                dispatch({type: "ADD_RECIPE", payload: book})
                alert("New Recipe added!")
            }
        })
        //redirect here if needed with history.push after the dispatch inside the 2nd .then
        //send the book to the reducer is easier than sending the recipe, finding book associated, etc. 
        //takes json response and dispatches it to reducer to update state with new book
        //right away adding to redux store without refetching the data here 
    }
  };