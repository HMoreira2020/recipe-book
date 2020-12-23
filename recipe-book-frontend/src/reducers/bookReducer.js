export default function bookReducer(state = {books: []}, action) {
    switch(action.type) {
        case "FETCH_BOOKS":
            return {books: action.payload}
        case "ADD_BOOK":
            //return what's in the state, books is all the books already in the array plus the book we submitted
            return {...state, books: [...state.books, action.payload]}
        case "ADD_RECIPE":
            let books = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload
                } else {
                    return book
                }
            })
            return {...state, books: books}
        default: 
            return state 
    } 
}