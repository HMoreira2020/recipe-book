export function fetchBooks(){
  return (dispatch) => {
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(books => dispatch({
      type: "FETCH_BOOKS", 
      payload: books
    }))
  } 
}
