import React from 'react'
import './myStyle.css'


//in line css
const heading = {
    fontSize : '72px',
    color: 'Blue'

}


function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheet used</h1>
            <h2 style={heading}>Inline</h2>
        </div>
    )
}

export default StyleSheet
