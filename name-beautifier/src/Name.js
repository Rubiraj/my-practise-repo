import React, { useContext } from 'react'
import { ThemeContext } from './Colorcontext'

function Name(props) {

    const { color, font } = useContext(ThemeContext)
    return (
        <h1 style={{ color: color, fontFamily: font }}>Varsha </h1>
    )
}

export default Name