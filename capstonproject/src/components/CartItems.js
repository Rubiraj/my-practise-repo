import React, { useContext, useState,useRef } from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"


function CartItems({ item }) {
    const { removeFromCart } = useContext(Context)
    //const [hover,setHover] = useState(false)
    const [hovered, ref] = useHover()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItems