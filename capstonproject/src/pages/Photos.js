import React, { useContext } from "react"
import {Context} from "../Context"
import {getClass} from "../Utils"
import Image from "../components/Image"
function Photos() {

    const {allPhotos} = useContext(Context)


     const imageElements = allPhotos.map((img,i)=>(
     <Image key={img.id} img={img} className={getClass(i) }/>))
    return (
        <main className="photos">
              {imageElements}  
        </main>
    )
}

export default Photos