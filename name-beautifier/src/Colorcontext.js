import React, { useContext, useState } from 'react'
import randomColor from 'randomcolor'
import fontsArr from './fontlist'

export const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    
    const [color, setColor] = useState(" ")
    const [font,setFont] = useState()
    function toggle() {
        setColor(randomColor())
        setFont(fontsArr[Math.floor(Math.random()*fontsArr.length)])        
    }


    return (
        <ThemeContext.Provider value={{ color, font, toggle }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider