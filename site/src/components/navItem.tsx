import { Link } from 'gatsby';
import React, { useState } from 'react';
import { NavItemType, SubLinkType } from '../types/common';
import SubLink from './subLink';

const NavItem = ({
  external,
  id,
  label,
  link,
  order,
  subLinks,
}: NavItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex'>
      {subLinks && subLinks.length > 0 ? (
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          className='text-textPrimary'
        >
          {label}
          {isOpen && (
            <div className='absolute flex flex-col bg-stone-100 min-w-[12rem] text-start pl-6 pr-10 py-4 rounded shadow-lg border border-gray-200'>
              {subLinks.map((subLink: SubLinkType) => (
                <SubLink
                  external={subLink.external}
                  id={subLink.id}
                  key={subLink.id}
                  label={subLink.label}
                  link={subLink.link}
                />
              ))}
            </div>
          )}
        </button>
      ) : (
        <Link to={link} className='text-textPrimary'>
          {label}
        </Link>
      )}
    </div>
  );
};

export default NavItem;
