import React from 'react' 
import RecipesInput from '../components/RecipesInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends React.Component {

    render() {
        return (
            <div className="Recipes-Container">
                <RecipesInput />
                <Recipes book={this.props.book}/>
            </div>
        )
    }



}

export default RecipesContainer