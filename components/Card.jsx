import React from 'react'
import { ReactPropTypes } from 'react'
import styles from '../styles/Card.module.css'
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi2'


function Card({ name, iurl, purl, price, discount, sprice }) {
  return (

    <div className={styles.card}>
      {/* image */}
      <div className="top container w-full overflow-hidden">
        <div className="btn">
          <button type="button" className={styles.bm}>
            <HiOutlineBookmark className="
           m-3 r-2 text-black text-3xl"/>
          </button>
        </div>

        <img className="w-full lg:h-[320px] object-cover" src={iurl} alt="" />



      </div>
      {/* info */}<a href={purl} className='group'>
      <div className={styles.bottom}>
        {/* productname */}
        
          <div className='flex flex-col justify-between'>
            <div className={styles.productname}>{name}</div>

            <div className='flex flex-row justify-between mt-3'>
              <div >

                {/* current price */}
                <span className={styles.dprice}>&#8377; {" " + sprice}</span>
                {/* actual price */}
                <span className={styles.price}>{' '}<strike>{price}</strike></span>
                {/* % off */}
                <span className={styles.dpercent}>{' '}({discount}% Off)</span>
              </div>


              <div className='mt-auto min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] -mt-1' >
                <img className='shop-bag' src={'/Shop+.png'} alt="add to cart" />
              </div>
            </div>
          </div>
       
      </div> </a>
    </div>
  )
}

Card.ReactPropTypes = {}

export default Card
