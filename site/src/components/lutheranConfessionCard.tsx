import React from 'react';
import { LutheranConfessionType } from '../pages/about/what-we-believe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons';

const LutheranConfessionCard = ({
  name,
  link,
}: LutheranConfessionType): JSX.Element => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col justify-center bg-stone-50 rounded shadow p-4 border border-stone-100 transform transition-all ease-in-out hover:scale-110'
    >
      <h5 className='text-textMedium self-center text-center mb-2'>{name}</h5>
      <div className='flex text-accent justify-center'>
        <span>View</span>
        <FontAwesomeIcon icon={faArrowRight} className='self-center ml-2' />
      </div>
    </a>
  );
};

export default LutheranConfessionCard;
