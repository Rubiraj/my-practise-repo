import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import { ThemeContextProvider } from "./themeContext"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>,
    document.getElementById('root')
)