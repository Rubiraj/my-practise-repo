import React, { useContext } from 'react'
import { ThemeContext } from './Colorcontext'

function Button(props) {

    const { color, toggle } = useContext(ThemeContext)
    return (
        <button onClick={toggle} style={{ background: color }}>
            Beautify Name
        </button>
    )
}

export default Button