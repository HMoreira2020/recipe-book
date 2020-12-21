// render other components
// pass Data 
// other functions 
// compontent did mount 
//typically class components, typically need a state

import React from 'react'
import BooksInput from '../components/BooksInput'
import Books from '../components/Books'

export default class extends React.Component {


    render(){
        return (
            <div>
                Books Container 
                <BooksInput /> 
                <Books />
            </div>
        )
    }


}
