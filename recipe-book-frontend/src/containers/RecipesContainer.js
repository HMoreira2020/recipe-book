import React from 'react' 
import RecipesInput from '../components/RecipesInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends React.Component {

    render() {
        return (
            <div className="Recipes-Container">
                <RecipesInput book={this.props.book}/>
                <Recipes recipes={this.props.book && this.props.book.recipes}/>
            </div>
        )
    }



}

export default RecipesContainer