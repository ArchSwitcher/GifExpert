// import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])

    const { loading } = useFetchGifs();


    

    // useEffect(() => {
    //     getGifs( category )
    //     .then(
    //         imgs => setImages(imgs)
    //     )
    //     .catch(err => console.log(err));
    // }, [category]);


    return (
        <>
            <h3> { category } </h3> 
        { loading? "Cargando.....": "data Cargada" }

        {/* <div className="card-grid">
            <ol>
                {
                    images.map( 
                        ( img ) => <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    )
                }
            </ol>
        </div> */}
        </>
    )
}
