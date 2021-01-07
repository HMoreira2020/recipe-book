export default function bookReducer(state = {books: [], recipes: []}, action) {
    switch(action.type) {
        case "FETCH_BOOKS":
            return {books: action.payload}
        case "FETCH_RECIPES":
            return {recipes: action.payload}
        case "ADD_BOOK":
            //return what's in the state, books is all the books already in the array plus the book we submitted
            return {...state, books: [...state.books, action.payload]}
        case "EDIT_BOOK":
            let editedBooks = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload
                } else {
                        return book
                }
            })
            return {...state, books: editedBooks}
        case "DELETE_BOOK":
                //if the book id does not match with book sent from backend, keep it in the store
            let newBooks = state.books.filter(book => book.id !== action.payload.id)
            return {...state, books: newBooks}
        case "ADD_RECIPE":
            //if the book id matches with book sent from backend, replace that book in the store
            let books = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload
                } else {
                    return book
                }
            })
            return {...state, books: books}
        case "DELETE_RECIPE":
                //if the book id matches with book sent from backend, replace that book in the store
            let booksTwo = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload
                } else {
                    return book
                }
            })
            return {...state, books: booksTwo}
        case "EDIT_RECIPE":
            let booksThree = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload
                } else {
                        return book
                }
            })
            return {...state, books: booksThree}
        default: 
            return state 
    } 
}