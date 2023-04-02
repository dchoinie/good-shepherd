import { Link } from 'gatsby';
import React, { useState } from 'react';
import { NavItemType, SubLinkType } from '../types/common';
import SubLink from './subLink';
import cx from 'classnames'

const NavItem = ({
  external,
  id,
  label,
  link,
  order,
  subLinks,
  textColor = 'text-textPrimary',
  hoverTextColor = 'hover:text-textMedium',
  subBgColor = 'bg-stone-50',
}: NavItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex'>
      {subLinks && subLinks.length > 0 ? (
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          className={cx(textColor, hoverTextColor)}
        >
          {label}
          {isOpen && (
            <div className={cx(subBgColor, 'absolute flex flex-col min-w-[12rem] text-start pl-6 pr-10 py-4 rounded shadow-lg border border-gray-200')}>
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
        <Link to={link} className={cx(textColor, hoverTextColor)}>
          {label}
        </Link>
      )}
    </div>
  );
};

export default NavItem;
