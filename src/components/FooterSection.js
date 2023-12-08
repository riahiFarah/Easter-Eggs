import React, {useState} from 'react'
import emailjs from 'emailjs-com'

const FooterSection = () => {
  const [send, setSend] = useState(false)
  const [email, setEmail] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true)

    emailjs.sendForm('service_afatljo', 'template_u61cksj', e.target, 'al4uUMSd4iAYPf6nX')
    .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  const validateEmail = (email) => {
    return email.match(
        // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const handleClose = () => {
    setSend(false)
  }

  const handleChangeInput = e => {
    setEmail(e.target.value)
  }
  const playHoverSound = () => {
    // Joue le son lors du survol
    const audio = new Audio('/Sonnerie.mp3');
    audio.play();
  };


  return (
    <div className='frontPage_footer-container'style={{
      backgroundImage: "linear-gradient(to right, #071952, #22668D)"
    }}>
      <section className='frontPage_footer-subscription'>
        <p className='frontPage_footer-subscription-heading'>
          Join our newsletter to receive our latest updates
        </p>
        <p className='frontPage_footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='frontPage_input-areas'>
          <form onSubmit={sendEmail}>
            <input
              className='frontPage_footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={handleChangeInput}
            />
            <button className='frontPage_btn--medium frontPage_btn--outline'
            disabled={validateEmail(email) ? false : true}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <small className='frontPage_website-rights' onMouseEnter={playHoverSound}>© 2023-2024 Tun-<span className='text_green'>ClimateX</span> by Jeagers</small>
    </div>
  )
}

export default FooterSection