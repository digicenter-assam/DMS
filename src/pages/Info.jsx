import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import InfoComponent from '../components/Info';
import { db } from '../config/firebase';


const Info = (props) => {
    const [item,setItem] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        db.ref(`${props.location.pathname.split("/")[2].toLowerCase()}/${props.location.pathname.split("/")[3]}`).on("value", snap => {
            setItem(snap.val());
            console.log(snap.val());
            setIsLoaded(true);
        })
    },[props])
    if(!isLoaded) return <div>Loading......</div>
    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            {/* <ImageSlider /> */}
            <InfoComponent data={item} isLoaded={isLoaded} props={props}/>
            <FooterComponent />
        </>
    )
}

export default Info;