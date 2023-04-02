import React from 'react'

const Map = (): JSX.Element => {
  return (
    <div className='w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.722393278562!2d-94.04173658433344!3d44.19218612542796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f4379757bc8f99%3A0x523c327cc55735d4!2sGood%20Shepherd%20Lutheran%20Church%20%26%20Concordia%20Classical%20Academy!5e0!3m2!1sen!2sus!4v1680316710934!5m2!1sen!2sus" width="100%" height="450" style={{ border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map