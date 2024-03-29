import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            
                { 
                    isLoading && (<h2>Se están cargando las imágenes</h2> ) 
                }
            
            <div className="card-grid" >
                { images.map((image) => (<GifGridItem 
                                            key={ image.id } 
                                            { ...image } />)) }

            </div>
        </>
    )
}