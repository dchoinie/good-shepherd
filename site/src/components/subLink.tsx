import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import { SubLinkType } from '../types/common'

const SubLink = ({ external, label, link }: SubLinkType): JSX.Element => {
  if (external) {
    return (
      <a className='flex pl-2 border-l border-transparent hover:border-accent hover:text-accent mb-2 last:mb-0' href={link} target="_blank" rel='noreferrer noopener'>
        <span className='hover:text-accent whitespace-nowrap'>{label}</span>
      </a>
    )
  }
  return (
    <Link className='pl-2 border-l border-transparent hover:border-accent hover:text-accent mb-2 last:mb-0 whitespace-nowrap' to={link}>{label}</Link>
  )
}

export default SubLink