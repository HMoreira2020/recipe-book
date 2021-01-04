export function fetchRecipes(){
    return (dispatch) => {
      console.log("fetch recipes")
      fetch("http://localhost:3000/recipes")
      .then(resp => resp.json())
      .then(recipes => dispatch({
        type: "FETCH_RECIPES", 
        payload: recipes
      }))
    } 
  }
  