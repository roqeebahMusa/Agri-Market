import './Body.css'
import cat from "../../assets/main-catfish.jpg";
import hen from "../../assets/poult.jpg"

const Body = () => {
  return (
    <div className='Main-Body'>
        <div className='Agri-Text'>
            <div className='Text1'>
                <p className='Products'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</p>
            </div>
            <div className='Text2'>
                <p>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p>
            </div>
        </div>
        <div className='Shopping'>
            <div className='Image-Holder1'>
                 <img className='img1' src={cat}/>
                 <p>Catfish</p>
            </div>
           <div className='Image-Holder2'>
             <img className='img2' src={hen}/>
             <p>Chicken</p>
           </div>
           
        </div>
    </div>
  )
}

export default Body