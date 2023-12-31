import React from 'react'
import { discount, robot } from '../../assets'
import styles from '../../style'
import { GetStarted } from '../GetStarted/GetStarted'



export const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex felx-row items-center py-[0.3rem] px-4 bg-discount-gradient rounded-[0.625rem] mb-2`}>
          <img src={discount} alt="discount" className='w-[2rem] h-[2rem]' />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className='text-white'>2%</span> Bigger benefit {' '}
          </p>
        </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[4.5rem] text-[3.25rem] text-white ss:leading-[6.3rem] leading-[4.68rem]'>
          Trade <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Crypto</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>  
      </div>

      <h1 className='flex-1 font-poppins font-semibold ss:text-[4.25rem] text-[3.25rem] text-white ss:leading-[6.25rem] leading-[4.68rem]'>
      With Confidence.
      </h1>
      <p className={`${styles.paragraph} max-w-[29.375rem]`}>
        Acces a Robus Trading Plataform Offering Real-Time Data. 
        Intuive Tools, and Seamless Execution.
      </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[0] w-[80%] rounded-full h-[35%] bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}
