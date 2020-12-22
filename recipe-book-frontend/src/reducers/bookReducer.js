export default function bookReducer(state = {books: []}, action) {
    switch(action.type) {
        case "FETCH_BOOKS":
            return {books: action.payload}
        case "ADD_BOOK":
            //return what's in the state, books is all the books already in the array plus the book we submitted
            return {...state, books: [...state.books, action.payload]}
        default: 
            return state 
    } 
}