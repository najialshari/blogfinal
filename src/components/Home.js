import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.jpg'


const Home = () => {
    
    return (
     
            
        <div className='fuild bg-light'>
            <div className='carousel slide' data-bs-ride="carousel">
                <div className='carousel-inner d-block'>
                    <img src={slider1} className='carousel-item active' data-bs-interval="5000" alt='...' />
                    <img src={slider2} className='carousel-item' data-bs-interval="5000" alt='...' />
                </div>
            </div>
        </div>
            
            )

}
export default Home