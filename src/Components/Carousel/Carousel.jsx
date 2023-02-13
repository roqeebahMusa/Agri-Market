import React  from 'react'
import "slick-carousel/slick/slick.css";   
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import chick from "./pic/chick.jpg";
import cut from "./pic/cut.jpg";
import fis from "./pic/fis.jpg";
import wytchic from "./pic/wytchic.jpg";



function Carousel() {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 20,
        autoplay: true,
        speed:20000,
        autoplaySpeed: 1000,
        cssEase:"linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
              initialSlide: 2
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      };



  return (
    <>
    <div className='bod'>
        <div className='slider'>
        <Slider {...settings}>

<div className='slider-div'>
  <h3 > Chicks</h3>
  <img src={chick} alt="Chicks" className='cont' />
</div>

 <div className='slider-div'>
<h3> Cat Fish</h3>
<img src={cut} alt="" className='cont' />
</div> 

<div className='slider-div'>
<h3>Cat Fish</h3>
<img src={fis} alt="" className='cont' />
</div>

<div className='slider-div'>
<h3> Hens</h3>
<img src={wytchic} alt="" className='cont'  />
</div>

</Slider>

        </div>
    </div>
    </>
  )
}


export default Carousel