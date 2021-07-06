import { node } from "prop-types"
import React, { useState, useRef, useEffect, useCallback } from "react"

function useHover() {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    


    function enter(){ setHovered(true)}

    function leave(){ setHovered(false) }

    


    useEffect(() => {
        
            ref.current.addEventListener("mouseenter", enter)
            ref.current.addEventListener("mouseleave", leave)
            return () => {
                if (ref.current) {
                    ref.current.removeEventListener("mouseenter", enter)
                    ref.current.removeEventListener("mouseleave", leave)
                }
            }
    
    }, [])



    return [hovered, ref]

}





export default useHover