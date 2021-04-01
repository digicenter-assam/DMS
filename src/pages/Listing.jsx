import React,{useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import Products from '../components/Products';
import { db } from '../config/firebase';


const Listing = (props) => {
    const [items,setItems] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect( ()=>{
        db.ref(props.location.pathname.split("/")[2].toLowerCase()).on("value", snap => {
            setItems(Object.values(snap.val()));
            console.log(Object.values(snap.val())[0]);
            setIsLoaded(true);
        })
    },[props])

    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <Products  items={items} isLoaded={isLoaded} props={props}/>
            <FooterComponent />
        </>
    )
}

export default Listing;