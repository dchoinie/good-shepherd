import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import cx from 'classnames';
import * as styles from "../styles/hero.module.scss";
import Button from './button';
import ButtonComponent from './button';
import { faCalendarAlt, faCross } from '@fortawesome/free-solid-svg-icons';

const Hero = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(relativePath: { eq: "loft1.jpg" }) {
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
  return (
    <div className={cx("flex w-full h-screen", styles.hero)}>
      <div className="flex flex-col justify-center w-1/2 border-r border-primary bg-stone-200 px-32">
        <h1 className='text-primary tracking-wide'>{data.site.siteMetadata.title}</h1>
        <hr className="my-3 border border-accent w-2/3" />
        <p className='text-textMedium text-2xl mb-6'>{data.site.siteMetadata.subTitle}</p>
        <div className="flex">
          <ButtonComponent label="What We Believe" theme='primary' startIcon={faCross} classes={['mr-4']} />
          <ButtonComponent label="Worship Schedule" theme='secondaryOutline' startIcon={faCalendarAlt} />
        </div>
      </div>
      <div className="flex w-1/2">
        <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} alt="Good Shepherd Lutheran Church" />
      </div>
    </div>
  );
};

export default Hero;
