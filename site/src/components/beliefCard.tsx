import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { BeliefCardType } from '../types/common'

const BeliefCard = ({ title, subTitle, image, description}: BeliefCardType): JSX.Element => {
  return (
    <div className='flex flex-col p-6 rounded-lg shadow-lg border border-stone-100'>
        <GatsbyImage image={image} alt={title} className="rounded-lg mb-4" />
        <h5 className='text-textPrimary text-center'>{title}</h5>
        <p className="text-accent italic text-center mb-4">{subTitle}</p>
        <p className="text-textMedium">{description}</p>
    </div>
  )
}

export default BeliefCard