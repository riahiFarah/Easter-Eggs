import React from 'react'
import { Link } from 'react-router-dom'

const STYLES = ['frontPage_btn--primary', 'frontPage_btn--outline', 'frontPage_btn--outline frontPage_btn--sign']
const SIZES = ['frontPage_btn--medium', 'frontPage_btn--large']

const Button = ({children, type, onClick, buttonStyle, buttonSize, path}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={`/${path}`} className='frontPage_btn-mobile'>
        <button className={`frontPage_btn ${checkButtonStyle} ${checkButtonSize}`} 
        onClick={onClick} type={type}>
            {children}
        </button>
    </Link>
  )
}

export default Button