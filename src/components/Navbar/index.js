import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as BsiIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './index.css';

import product from '../../assets/product.svg';
import heart from '../../assets/heart.svg';


function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="logo">
                    <Link  to="/"><h2>DMSNE</h2></Link>
                </div>
                <div className="Search-Bar">
                    <form onSubmit={(e)=>{e.preventDefault();window.location.replace(`/searchListing/${e.target[0].value}`);}}>
                        <input class="search__input" type="text" name="search" placeholder="  Search..."  name="search" />
                    </form>
                </div>
                <div className="nav-wrapper">
                    <div className="profile" >
                        <Link to='#' className='menu-bars'>
                            <div>
                            <img src={product} />
                            <p>Product</p>
                            </div>
                        </Link>
                    </div>
                    <div className="wishlist">
                    <Link to='#' className='menu-bars'>
                        <div>
                        <img src={heart} />
                        <p>Wishlist</p>
                        </div>
                    </Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar;