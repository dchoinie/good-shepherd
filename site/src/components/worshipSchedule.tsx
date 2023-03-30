import { faBible, faChurch, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';

const WorshipSchedule = (): JSX.Element => {
  return (
    <div className='h-[20rem] -mt-[10rem] mb-[10rem] flex flex-col justify-center w-1/2 bg-stone-100 relative z-20 mx-auto rounded shadow-lg p-12'>
      <h4 className='text-textPrimary text-center underline mb-12'>
        Worship Schedule
      </h4>
      <div className='flex justify-around'>
        <Link
          to='/worship/divine-services'
          className='flex flex-col items-center p-4 transform transition-all ease-in-out hover:scale-125'
        >
          <FontAwesomeIcon
            icon={faChurch}
            className='text-3xl mb-2 text-accent'
          />
          <h5 className='text-textPrimary'>Divine Service</h5>
          <p className='text-textMedium'>9:00 AM</p>
        </Link>
        <div className="border border-accent h-full" />
        <Link
          to='/ministries/bible-study'
          className='flex flex-col items-center p-4 transform transition-all ease-in-out hover:scale-125 hover:text-accent'
        >
          <FontAwesomeIcon
            icon={faBible}
            className='text-3xl mb-2 text-accent'
          />
          <h5 className='text-textPrimary'>Bible Study For Life</h5>
          <p className='text-textMedium'>10:15 AM</p>
        </Link>
        <div className="border border-accent h-full" />
        <Link
          to='/ministries/sunday-school'
          className='flex flex-col items-center p-4 transform transition-all ease-in-out hover:scale-125 hover:text-accent'
        >
          <FontAwesomeIcon
            icon={faSchool}
            className='text-3xl mb-2 text-accent'
          />
          <h5 className='text-textPrimary'>Sunday School</h5>
          <p className='text-textMedium'>10:15 AM</p>
        </Link>
      </div>
    </div>
  );
};

export default WorshipSchedule;
