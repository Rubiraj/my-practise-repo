import React, { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"



function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const { toggleFavourite, addToCart, cartItems,removeFromCart } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite"
                onClick={() => toggleFavourite(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite"
                onClick={() => toggleFavourite(img.id)}></i>
        }
    }
    function cartIcon() {

        const alreadyInCart = cartItems.some(item => item.id === img.id)

        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"
                onClick={() => removeFromCart(img.id)}></i>
        }
        else if (hovered)
            return <i className="ri-add-line cart"
                onClick={() => addToCart(img)} ></i>

    }

  

    return (
        <div className={`${className} image-container`}
            ref={ref}
        >

            <img src={img.url} className="image-grid"
                 />
            { cartIcon()}
            {heartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image   