import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItems from "../components/CartItems"


function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    const displayCart = cartItems.map(item => (
        <CartItems key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering.....")
        setTimeout(() => {
            console.log("order placed")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)

    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {displayCart}

            <p className="total-cost">Total:{totalCostDisplay} </p>

            { 
            cartItems.length > 0 
            ?<div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
                </div> 
            :<p>You have no Items in the cart</p>
            
            }
        </main>
    )

}
export default Cart