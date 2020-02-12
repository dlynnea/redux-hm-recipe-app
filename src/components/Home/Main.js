import React from 'react'
import {connect} from 'react-redux'
import RecipeList from '../RecipeList'

const mapStateToProps = state => ({
    recipes: state.recipes
})

const Main = props => {
    return(
        <div className="main-view">
            <div className="feed-toggle">
                <ul className="feed-nav">
                    <li>
                        <a href="" className="feed-active">All</a>
                    </li>
                </ul>
            </div>
            <RecipeList recipes={props.recipes} />
        </div>
    )
}

export default connect(mapStateToProps, () => ({}))(Main)