import React from 'react'
import { Link } from 'react-router-dom';

const FpageCard = (props) => {
  return (
    <>
      <li className='fpage_cards__item'>
        <Link className='fpage_cards__item__link' to={props.path}>
          <figure className='fpage_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='fpage_cards__item__img'
              alt='Card cant load'
              src={props.src}
            />
          </figure>
          <div className='fpage_cards__item__info'>
            <h5 className='fpage_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default FpageCard

