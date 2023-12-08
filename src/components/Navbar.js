import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }

  const showButton = () => {
    if(window.innerWidth <= 768){
        setButton(false)
    }else{
        setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);


  
  const [easterEggBackground, setEasterEggBackground] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // La touche pour déclencher l'Easter egg est "n"
      if (event.key === 'n') {
        setEasterEggBackground(!easterEggBackground);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [easterEggBackground]);

  const [clickCount, setClickCount] = useState(0);
  const [easterEggLogo, setEasterEggLogo] = useState(false);

  const handleLogoClick = () => {
    setClickCount(prevCount => prevCount + 1);

    if (clickCount === 6) {
      // Toggle between original logo and easter egg logo
      setEasterEggLogo(!easterEggLogo);
    }

    // Reset click count after a certain time frame (e.g., 1 second)
    setTimeout(() => {
      setClickCount(0);
    }, 1000);
  };



  return (
    <>
    <nav className={`frontPage_navbar`} style={{
  backgroundImage: easterEggBackground
    ? "linear-gradient(to right, #243763, #A1CCD1)"
    : "linear-gradient(to right, #22668D, #071952)"
}}>
            <div className='frontPage_navbar-container'>
            <Link
  to='/'
  className={`frontPage_navbar-logo ${window.innerWidth <= 768 ? 'mb-4 me-4' : ''}`}
  onClick={(e) => {
    handleLogoClick();
    closeMobileMenu(e);
  }}
>
  {easterEggLogo ? (
    <img
      src='/logo2.png' 
      alt='easter_egg_logo'
      style={{ height: '150', width: '150' }}
      onClick={() => window.scrollTo({ top: 0 })}
    />
  ) : (
    <img
      src='/logo.png'
      alt='logo'
      style={{ height: '40', width: '60' }}
      onClick={() => window.scrollTo({ top: 0 })}
    />
  )}
</Link>
                <div className='frontPage_menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'frontPage_nav-menu active' : 'frontPage_nav-menu'}>
                    <li>
                        <Link to="/" className='frontPage_nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className='frontPage_nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className='frontPage_nav-links text_green' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className='frontPage_nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {
                    button && <Button buttonStyle='frontPage_btn--outline frontPage_btn--sign' path='register'>SIGN UP</Button>
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar