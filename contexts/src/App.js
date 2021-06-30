import React from 'react'
import MyProvider from './MyProvider'
import ProductList from './ProductList' 

class App extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <header className="App-header">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title">Welcome to my web store</h1>
                    </header>
                    <ProductList />
                </div>
            </MyProvider>
        );
    }
}


export default App