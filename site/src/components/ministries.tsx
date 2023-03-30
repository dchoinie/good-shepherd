import { faBible, faSchool } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Constants from '../constants/constants';
import Button from './button';

const Ministries = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query MinistriesQuery {
      bibleStudy: file(relativePath: { eq: "bibleStudy.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      sundaySchool: file(relativePath: { eq: "sundaySchool.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      cca: file(relativePath: { eq: "table.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <div className='max-w-screen-2xl mx-auto my-48'>
      <div className='flex gap-24 mb-48'>
        <div className='flex w-1/2 relative'>
          <GatsbyImage
            image={data.bibleStudy.childImageSharp.gatsbyImageData}
            alt='Bible Study'
            className='rounded-lg shadow-lg h-[50vh]'
          />
          <div className='absolute -bottom-5 -right-5 -z-10 h-[50vh] w-full bg-secondary rounded-lg shadow-lg' />
        </div>
        <div className='flex flex-col w-1/2 pl-6 border-l-2 border-secondary self-start'>
          <h4 className='text-primary mb-6'>Bible Study For Life</h4>
          <p className='text-textMedium mb-3'>
            Bible Study For Life is a wonderful opportunity for members to
            deepen their understanding of the Bible and grow in their faith.
            These study sessions provide a welcoming and supportive environment
            for participants of all ages to explore the Scriptures, ask
            questions, and share their thoughts and insights. Whether you're a
            seasoned Bible scholar or just beginning to explore the teachings of
            Christianity, you'll find a warm and welcoming community at Good
            Shepherd Lutheran Church.
          </p>
          <Button
            label='Bible Study For Life'
            theme='secondary'
            link='/ministries/bible-study'
            classes={['self-start']}
            startIcon={faBible}
          />
        </div>
      </div>
      <div className='flex gap-24 mb-48'>
        <div className='flex flex-col w-1/2 pr-6 border-r-2 border-accent self-start text-right'>
          <h4 className='text-primary mb-6'>Sunday School</h4>
          <p className='text-textMedium mb-3'>
            Sunday School is designed to teach children about the Bible,
            Christian faith, and Christian values through lessons, stories, and
            activities. Sunday School is led by dedicated teachers, parents and
            members of our congregation.
          </p>
          <Button
            label='Sunday School'
            theme='accent'
            link='/ministries/sunday-school'
            classes={['self-end']}
            startIcon={faSchool}
          />
        </div>
        <div className='flex w-1/2 relative'>
          <GatsbyImage
            image={data.sundaySchool.childImageSharp.gatsbyImageData}
            alt='Bible Study'
            className='rounded-lg shadow-lg h-[50vh]'
          />
          <div className='absolute -bottom-5 -left-5 -z-10 h-[50vh] w-full bg-accent rounded-lg shadow-lg' />
        </div>
      </div>
      <div className='flex gap-24 mb-48'>
        <div className='flex w-1/2 relative'>
          <GatsbyImage
            image={data.cca.childImageSharp.gatsbyImageData}
            alt='Bible Study'
            className='rounded-lg shadow-lg h-[50vh]'
          />
          <div className='absolute -bottom-5 -right-5 -z-10 h-[50vh] w-full bg-primary rounded-lg shadow-lg' />
        </div>
        <div className='flex flex-col w-1/2 pl-6 border-l-2 border-primary self-start'>
          <h4 className='text-primary mb-6'>Concordia Classical Academy</h4>
          <p className='text-textMedium mb-3'></p>
          <Button
            label='Concordia Classical Academy'
            theme='primary'
            href={Constants.cca}
            classes={['self-start']}
            startIcon={faSchool}
          />
        </div>
      </div>
    </div>
  );
};

export default Ministries;
