import React,{useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import Products from '../components/Products';
import { db } from '../config/firebase';


const SearchListing = (props) => {
    const [items,setItems] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect( ()=>{
        db.ref('/').orderByChild('name').equalTo("Cap").once("value",snap=> {console.log(snap.val());});

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

export default SearchListing;