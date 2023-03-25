import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const Hero = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className='h-screen flex absolute top-0'>
      <div className='flex w-1/2'>
        <GatsbyImage
          image={data.hero.childImageSharp.gatsbyImageData}
          alt={data.site.siteMetadata.title}
          className='h-screen'
        />
        <div className="bg-darkOverlay absolute top-0 left-0 h-full w-1/2 z-20" />
      </div>
      <div className="flex flex-col justify-center h-full w-1/2 p-12">
        <h2>{data.site.siteMetadata.title}</h2>
        <h5>Grow in God&apos;s Truth. Show Jesus&apos; Love.</h5>
      </div>
    </div>
  );
};

export default Hero;
