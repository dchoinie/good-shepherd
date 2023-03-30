import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Constants from '../constants/constants';
import { LectionaryType } from '../types/common';
import ButtonComponent from './button';

const DivineService = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query DivineServiceQuery {
      img: file(relativePath: { eq: "aisle_lent.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      lectionary: allSanityLectionary(sort: { date: DESC }, limit: 1) {
        nodes {
          date(formatString: "MMMM DD, YYYY")
          epistle
          holyGospel
          liturgicalColor
          oldTestamentReading
          sundayName
          id
          epistleLink
          holyGospelLink
          oldTestamentLink
        }
      }
    }
  `);

  const partsOfLiturgy = [
    {
      name: 'Invocation',
    },
    {
      name: 'Confession & Absolution',
    },
    {
      name: 'Kyrie',
    },
    {
      name: 'Hymn of Praise',
    },
    {
      name: 'Word of God & Sermon',
    },
    {
      name: 'Creed',
    },
    {
      name: 'Offertory',
    },
    {
      name: 'Sanctus',
    },
    {
      name: 'Words of Our Lord',
    },
    {
      name: 'Agnus Dei',
    },
    {
      name: 'Distrubution',
    },
    {
      name: 'Nunc Dimittis',
    },
    {
      name: 'Benediction',
    },
  ];

  return (
    <div className='relative h-screen w-full'>
      <div className='h-screen bg-secondaryOverlay absolute top-0 z-10 w-full' />
      <GatsbyImage
        image={data.img.childImageSharp.gatsbyImageData}
        alt='Altar'
        className='h-screen w-full absolute top-0'
      />
      <div className='max-w-screen-2xl mx-auto relative pt-20 z-20'>
        <h3 className='text-center text-stone-100'>Divine Service</h3>
        <div className='w-full grid grid-cols-3 gap-12 h-full mt-12'>
          <div className='flex flex-col items-center'>
            <h5 className='text-stone-200 text-2xl'>The Liturgy</h5>
            <hr className='my-3 border border-accent w-1/2 mx-auto' />
            <div className='grid grid-rows-7 grid-flow-col gap-x-6 gap-y-2 mb-6'>
              {partsOfLiturgy.map((part: any) => (
                <div className='flex mb-2'>
                  <FontAwesomeIcon
                    icon={faCross}
                    className='text-stone-300 self-center mr-2'
                  />
                  <span className='text-stone-300'>{part.name}</span>
                </div>
              ))}
            </div>
            <ButtonComponent
              link='/worship/divine-service'
              label='More About The Liturgy'
              theme='white'
              size='small'
              endIcon={faAngleRight}
            />
          </div>
          <div className='flex flex-col'>
            <h5 className='text-stone-200 text-center text-2xl'>Lectionary</h5>
            <hr className='my-3 border border-accent w-1/2 mx-auto' />
            {data.lectionary.nodes.map((node: LectionaryType) => (
              <div className="flex flex-col items-center text-center text-stone-300">
                <div className="mb-3">
                  <p className="underline">{node.sundayName}</p>
                  <p>{node.date}</p>
                </div>
                <a href={node.oldTestamentLink} target="_blank" rel="noopener noreferrer" className="mb-3 hover:text-accent transform transition-all hover:scale-110 ease-in-out">
                  <p className="underline">Old Testament Reading</p>
                  <p>{node.oldTestamentReading}</p>
                </a>
                <a href={node.epistleLink} target="_blank" rel="noopener noreferrer" className="mb-3 hover:text-accent transform transition-all hover:scale-110 ease-in-out">
                  <p className="underline">Epistle</p>
                  <p>{node.epistle}</p>
                </a>
                <a href={node.holyGospelLink} target="_blank" rel="noopener noreferrer" className="mb-3 hover:text-accent transform transition-all hover:scale-110 ease-in-out">
                  <p className="underline">Holy Gospel</p>
                  <p>{node.holyGospel}</p>
                </a>
              </div>
            ))}
          </div>
          <div className='flex flex-col'>
            <h5 className='text-stone-200 text-center text-2xl'>Stream</h5>
            <hr className='my-3 border border-accent w-1/2 mx-auto' />
            <p className="text-stone-300 mb-6">
              If you are unable to attend in person, you can stream our Sunday Divine Service on YouTube.
            </p>
            <div className="flex justify-center">
              <ButtonComponent href={Constants.youTubeUrl} label="Stream Divine Service" startIcon={faYoutube} theme="white" classes={['self-start']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineService;
