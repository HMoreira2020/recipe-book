export default function bookReducer(state = {books: []}, action) {
    debugger
    switch(action.type) {
        case "FETCH_BOOKS":
            return {books: action.payload}
        default: 
            return state 
    } 
}