import React, { useState,useEffect } from 'react';
import Card from "../Reusable/Product Card/Card";
import { Link } from "react-router-dom";
import loader from '../../assets/loading-200px.gif';

function Products({items,isLoaded,props}) {

    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollTo({top: 0, behavior: 'auto'});
    console.log(props.location.pathname.split("/")[2]);

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
               {/*
               
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                                <FiIcons.FiHeart />
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img4} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View Now</button>
                       </div>
                   </div>
               </div> */}
           </div> 
        </>
    )
}

export default Products
