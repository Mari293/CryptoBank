import React from 'react'
import { card } from '../../assets'
import styles, { layout } from '../../style'
import { Button } from '../Button/Button'


export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the best investment opportunities <br className="sm:block hidden" />  in just few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[29.4rem] mt-5`}>
      Buy, sell and spend your cryptocurrencies on the world's 
      most trusted cryptocurrency exchange platform.
      </p>
      <Button styles={`mt-10`} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}
