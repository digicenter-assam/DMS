import React, { useState,useEffect } from "react";
import './index.css';
import img from "../../assets/banner3.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner1.jpg";

const ImageSlider = () => { // takes in images as props
  
  const images = [img,
                  img2,
                  img3
]  
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
        slideLeft();
    }, 5000);
     return () => clearInterval(interval);
  }, [slideLeft]);

  return (
    images.length > 0 && (
      <div>
        {/* <button onClick={slideLeft}>{"<"}</button> */}
        <img className='banner-img' src={images[index]} alt={index} />
        {/* <button onClick={slideRight}>{">"}</button> */}
      </div>
    )
  );
};

export default ImageSlider;