import React from 'react'



const Container = ({children}) => {
    return(
        <div className='container'>
            {children}
        </div>
    )
}

export default Container;

const Button = ({type, text}) => {
    return(
        <button className={type == "light" ? "btn--light" : "btn--dark"}>
            {text}
        </button>
    )
}

export {Button, Container}
