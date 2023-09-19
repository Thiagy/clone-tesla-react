import React from 'react'

export default function Carsection({id, img}){
   
    return(
        <section id={id} style={{backgroundImage: `url(${img})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundPosition: 'center',
        backgroundSize: 'cover'}}></section>
    )
}