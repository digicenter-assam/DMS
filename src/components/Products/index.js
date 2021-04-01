import React, { useState,useEffect } from 'react';
import Card from "../Reusable/Product Card/Card";
import { Link } from "react-router-dom";
import loader from '../../assets/loading-200px.gif';

function Products({items,isLoaded}) {

    useEffect(()=> {
        
    });

    if(!isLoaded)
        return (<div className='loader'> <img src={loader} alt="Loading..." /> </div>)
    if(items.length === 0)
        return (<div>No items found</div>)
    return (
        <>
           <div className='products'>
           {items.map(element=>
                <Link to={`/info/${element.category}/${element.id}`} key={element.id} >
                    <Card name={element.name} img={element.img} />
                </Link>
           )}
           </div> 
        </>
    )
}

export default Products
