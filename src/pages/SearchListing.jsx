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
    const [category,setCategory]= useState("");

    useEffect( ()=>{
        let arr=[];
        db.ref('searchList/').orderByChild('term').startAt(props.location.pathname.split("/")[2]).endAt(`${props.location.pathname.split("/")[2]}\uf8ff`).once("value",snap=> {
            if(snap.val())
                db.ref(`${Object.values(snap.val())[0].category}/`).once("value",data=> {
                    arr=[... Object.values(data.val())];
                    setItems(arr);
                    setCategory(data.key);
                });
                setIsLoaded(true);
        });
        
    },[props])

    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <Products category={category} items={items} isLoaded={isLoaded} props={props}/>
            <FooterComponent />
        </>
    )
}

export default SearchListing;