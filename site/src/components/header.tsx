import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { NavItemType } from '../types/common';
import NavItem from './navItem';

const Header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query NavQuery {
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
      logo: file(relativePath: {eq: "LCMS_logo_black.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <div className='flex justify-between max-w-screen-2xl mx-auto px-6 py-2 bg-stone-100 mt-6 rounded-full shadow-md relative z-50'>
      <Link to="/">
        <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} alt="LCMS Logo" className='w-12 ml-2' />
      </Link>
      <div className='flex self-center w-1/2 justify-around'>
        {data.nav.nodes.map((node: NavItemType) => (
          <NavItem
            key={node.id}
            id={node.id}
            external={node.external}
            label={node.label}
            link={node.link}
            order={node.order}
            subLinks={node.subLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
