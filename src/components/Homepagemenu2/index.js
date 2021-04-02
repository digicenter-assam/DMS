import React, { useEffect, useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import './index.css';
import img from '../../assets/burnfitness.png';
import img1 from '../../assets/Banner-cabinet CPU.png';
import img2 from '../../assets/Banner-monitor.png';
import img3 from '../../assets/Banner-Keyboard2.png';
import img4 from '../../assets/Banner-hard drive.png';
import loader from '../../assets/loading-200px.gif';
import { IconContext } from "react-icons";
import { db } from "../../config/firebase";

function Homepagemenu2() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      db.ref("hardware").on("value", (snap) => {
        // snap.forEach((element, index) => {
        setItems(Object.values(snap.val()));
        console.log(Object.values(snap.val())[0]);
        // console.log(Object.values(element.val()));
        setIsLoaded(true);
        // })
      });
    }, []);
  
    let product_1 = 8; // here 1 is the id of the first product.
    let product_2 = 13; // here 2 is the id of the second product.
    let product_3 = 12; // here 3 is the id of the third product.
    let product_4 = 4; // here 4 is the id of the forth product.

    if (!isLoaded) return <div> <img src={loader} alt="Loading..." /> </div>;

    console.log(items[product_3 - 1].name);
  
    return (
        <>
            <div className='menu2'>
                <div className="menu-heading2">
                    <div className='menu-heading-bold2'>
                        <h1>ACCESSORIES</h1>
                        <p>
                            <span>
                                <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
                                    <BsIcons.BsDash />
                                </IconContext.Provider>
                            </span>
                            IT & COMPUTER ACCESSORIES
                        </p>
                    </div>
                    <p className='menu-view2'><Link className="linkStyle" to="/listing/hardware">View All</Link><span>
                        <IconContext.Provider value={{ color: "#32436b", size: "25px" }}>
                            <FiIcons.FiArrowRight />
                        </IconContext.Provider>
                    </span></p>
                </div>
                <div className='menu-products2'>
                    <div className='menu-product2'>
                        <div className='menu-product-img2'>
                            <img src={items[product_1 - 1].img} width="303.84" height="276" />
                        </div>
                        <div className='menu-product-name2'>
                            <p>{items[product_1 - 1].name}</p>
                        </div>
                        <div className='manu-product-btn2'>
                        <Link to={`/info/hardware/${product_1}`}>
                            <button className='menu-btn2'>VIEW NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className='menu-product2'>

                        <div className='menu-product-img2'>
                            <img src={items[product_2 - 1].img} width="303.84" height="276" />
                        </div>

                        <div className='menu-product-name2'>
                            <p>{items[product_2 - 1].name}</p>
                        </div>
                        <div className='manu-product-btn2'>
                        <Link to={`/info/hardware/${product_2}`}>
                            <button className='menu-btn2'>VIEW NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className='menu-product2'>

                        <div className='menu-product-img2'>
                            <img src={items[product_3 - 1].img} width="303.84" height="276" />
                        </div>

                        <div className='menu-product-name2'>
                            <p>{items[product_3 - 1].name}</p>
                        </div>
                        <div className='manu-product-btn2'>
                        <Link to={`/info/hardware/${product_3}`}>
                            <button className='menu-btn2'>VIEW NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className='menu-product2'>

                        <div className='menu-product-img2'>
                            <img src={items[product_4 - 1].img} width="303.84" height="276" />
                        </div>

                        <div className='menu-product-name2'>
                        {items[product_4 - 1].name}
                        </div>
                        <div className='manu-product-btn2'>
                        <Link to={`/info/hardware/${product_4}`}>
                            <button className='menu-btn2'>VIEW NOW</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepagemenu2
