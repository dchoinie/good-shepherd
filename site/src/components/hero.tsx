import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { RefObject } from 'react';
import Button from './button';
import { faArrowRight, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeroProps {
  resultRef: any;
}

const Hero2 = ({ resultRef }: HeroProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query Hero2Query {
      hero: file(relativePath: { eq: "loft1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      lcms: file(relativePath: { eq: "LCMS_logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `);

  const scrollToRef = (): void => resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" })

  return (
    <div className='relative'>
        <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} alt={data.site.siteMetadata.title} className='h-screen w-full' />
        <div className='h-screen w-full bg-gradient-to-r from-secondary from-10% to-lightOverlay to-80% absolute top-0' />
        <div className="absolute top-0 w-full left-0 h-full">
            <div className="max-w-screen-2xl mx-auto h-full flex">
                <div className="flex flex-col w-1/2 justify-center">
                    <h2 className='text-stone-100'>{data.site.siteMetadata.title}</h2>
                    <p className="text-accent italic text-2xl mb-4">{data.site.siteMetadata.subTitle}</p>
                    <div className="flex">
                        <Button onClick={scrollToRef} label='What We Believe' startIcon={faCross} theme='white' classes={['self-start']} />
                        <Link to="/worship/divine-service" className='text-stone-200 self-center ml-6 flex transform transition-all hover:scale-110 hover:translate-x-2 hover:text-accent ease-in-out'>
                            <span>Worship Schedule</span>
                            <FontAwesomeIcon icon={faArrowRight} className='self-center ml-2' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-stone-300 absolute bottom-2 flex w-full justify-center">
          <p>
            A Lutheran Church - Missouri Synod
          </p>
        </div>
    </div>
  );
};

export default Hero2;
