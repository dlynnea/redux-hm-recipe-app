import React from 'react'

const RecipeList = props => {
    if (!props.recipes) {
        return(
            <div className="recipe-preview">Loading...</div>
        )
    }

    if (props.recipes.length === 0 ) {
        return(
            <div className="recipe-preview">
                There are currently no recipes!
            </div>
        )
    }

    return(
        <div>
            {
                props.recipes.map(recipe => {
                  return(
                    <h2>{recipe.title}</h2>
                    )
                })
            }
        </div>
    )
}

export default RecipeList