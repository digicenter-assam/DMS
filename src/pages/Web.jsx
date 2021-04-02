import React,{useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import Products from '../components/Products';
import { db } from '../config/firebase';
import WebAndroid from '../components/WebAndroid';

function Web() {
    return (
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <WebAndroid />
            <FooterComponent />
        </>
    )
}

export default Web;
