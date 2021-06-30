import React, { Component, useContext } from 'react'

import { ThemeContext } from './themeContext'


function Header(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            <h2>{theme === "light" ? "Light" : "Dark"} Theme </h2>
            {console.log(theme)}
        </header>

    )
}


export default Header