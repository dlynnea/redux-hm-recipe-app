import React from 'react'

const Banner = ({appName}) => {
    return(
        <div className="banner">
            <h1 className="logo">
                {appName.toLowerCase()}
            </h1>
            <p>A place to share your knowledge</p>
        </div>
    )
}

export default Banner;