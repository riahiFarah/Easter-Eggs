import React , {useState , useEffect} from 'react'
import FpageCard from './FpageCard';

const FpageCards = () => {
  const [gravityFlipped, setGravityFlipped] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'g') {
        setGravityFlipped((prev) => !prev);

      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`fpage_cards over-video ${gravityFlipped ? 'gravity-flipped' : ''}`}>
    <div className='fpage_cards__container'>
    <div className='fpage_cards over-video'>
      <div className='fpage_cards__container'>
        <div className='fpage_cards__wrapper'>
          <ul className='fpage_cards__items'>
            <h1 className='fpage_cards_text'>More about <span className='text_brown'>Climate</span><span className='text_green'>X</span> !</h1>
          </ul>
          <ul className='fpage_cards__items'>
            <FpageCard
              src='/frontPage/img1.jpg'
              text="Discover and Share new informations about climate changes and effects .. "
              label='Discover/Socialize'
              path='/register'
            />
            <FpageCard
              src='/frontPage/img2.jpg'
              text='Help making the world a better place !'
              label='Learn'
              path='/learnmore'
            />
          </ul>
          <ul className='fpage_cards__items'>
            <h1>Our features :</h1>
          </ul>
          <ul className='fpage_cards__items'>
            <FpageCard
              src='/frontPage/mobile.svg'
              text='Our website is functional and responsive in both mobile and desktop browsers'
              label='Mobile'
              path='/register'
            />
            <FpageCard
              src='/frontPage/real-time.svg'
              text='At ClimateX time is everything, enjoy your experience with real-time notifications and response'
              label='Real-time'
              path='/register'
            />
            <FpageCard
              src='/frontPage/shareability.svg'
              text='You can share your verified informations in posts on multiple social media platforms'
              label='Shareability'
              path='/register'
            />
          </ul>
        </div>
      </div>
    </div>     
  </div>
  </div>
  )
}

export default FpageCards 