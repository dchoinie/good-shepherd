import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { NavItemType } from '../types/common';
import NavItem from './navItem';
import { GatsbyImage } from 'gatsby-plugin-image';

interface HeaderProps {
  heroHeader?: boolean;
}

const Header2 = ({ heroHeader }: HeaderProps): JSX.Element => {
    const data = useStaticQuery(graphql`
    query Nav2Query {
      nav: allSanityNavItem(sort: { order: ASC }) {
        nodes {
          _id
          external
          label
          link
          order
          subLinks {
            _id
            label
            link
            external
          }
        }
      }
      logoWhite: file(relativePath: {eq: "LCMS_logo_white.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      logoBlack: file(relativePath: {eq: "LCMS_logo_black.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <div className={heroHeader ? 'absolute z-50 w-full' : 'w-full'}>
        <div className="max-w-screen-2xl mx-auto py-4">
            <div className="flex w-full justify-between">
                <Link to="/" className="flex">
                    {heroHeader ? (
                      <GatsbyImage image={data.logoWhite.childImageSharp.gatsbyImageData} alt="LCMS Logo" className='w-16' />
                    ) : (
                      <GatsbyImage image={data.logoBlack.childImageSharp.gatsbyImageData} alt="LCMS Logo" className='w-16' />
                    )}
                </Link>
                <div className="flex w-1/2 justify-between self-center">
                    {data.nav.nodes.map((node: NavItemType) => (
                        <NavItem
                            external={node.external}
                            id={node.id}
                            key={node.id}
                            label={node.label}
                            link={node.link}
                            subLinks={node.subLinks}
                            order={node.order}
                            textColor={heroHeader ? 'text-stone-100' : undefined}
                            hoverTextColor={heroHeader ? 'hover:text-stone-300' : undefined}
                            subBgColor={heroHeader ? 'bg-stone-200' : undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header2