import React from 'react'
import { features } from '../../constants'
import styles, {layout} from '../../style'
import {Button} from '../Button/Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[1.3rem] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[4rem] h-[4rem] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[1.15rem] leading-[1.rem] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[1rem] leading-[1.5rem]">
        {content}
      </p>
    </div>
  </div>
)

export const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Start building your<br className='sm:block hidden'/> Cryptocurrency Portfolio</h2>
        <p className={`${styles.paragraph} max-w-[29.37rem] mt-5`}> 
        CryptoBank is the easiest place to buy and sell cryptocurrencies. 
        Sign up and get started today
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
      </div>
    </section>
  )
}
