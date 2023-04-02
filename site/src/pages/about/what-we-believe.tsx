import React from 'react';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import BeliefCard from '../../components/beliefCard';
import { graphql } from 'gatsby';
import Constants from '../../constants/constants';
import LutheranConfessionCard from '../../components/lutheranConfessionCard';

export interface LutheranConfessionType {
  name: string;
  link: string;
}

const lutheranConfessions = [
  {
    name: 'The Three Ecumenical or Universal Creeds',
    link: Constants.creeds,
  },
  {
    name: 'The Augsburg Confession',
    link: Constants.augsburgConfession,
  },
  {
    name: 'The Defense of the Augsburg Confession',
    link: Constants.defenseOfAugsburgConfession,
  },
  {
    name: 'The Large Catechism',
    link: Constants.largeCatechism,
  },
  {
    name: 'The Small Catechism',
    link: Constants.smallCatechism,
  },
  {
    name: 'The Smalcald Articles',
    link: Constants.smalcaldArticles,
  },
  {
    name: 'Treatise on the Power and Primacy of the Pope',
    link: Constants.treatiseOnThePowerAndPrimacyOfThePope,
  },
  {
    name: 'The Epitome of the Formula of Concord',
    link: Constants.epitomeOfTheFormulaOfConcord,
  },
  {
    name: 'The Solid Declaration of the Formula of Concord',
    link: Constants.solidDeclarationOfTheFormulaOfConcord,
  },
];

const WhatWeBelieve = ({ data }: any): JSX.Element => {
  return (
    <Layout title='What We Believe'>
      <SEO title='What We Believe' />
      <div className='max-w-screen-2xl mx-auto my-24'>

        {/* intro to belifs */}
        <section>
          <div className='flex flex-col'>
            <p className='mb-2'>
              With the universal Christian Church, The Lutheran Church—Missouri
              Synod teaches and responds to the love of the Triune God:
            </p>
            <ul>
              <div className='flex ml-6 mb-1'>
                <FontAwesomeIcon icon={faCross} className='self-center mr-2' />
                <li>the Father, creator of all that exists;</li>
              </div>
              <div className='flex ml-6 mb-1'>
                <FontAwesomeIcon icon={faCross} className='self-center mr-2' />
                <li>
                  Jesus Christ, the Son, who became human to suffer and die for
                  the sins of all human beings and to rise to life again in the
                  ultimate victory over death and Satan; and
                </li>
              </div>
              <div className='flex ml-6 mb-2'>
                <FontAwesomeIcon icon={faCross} className='self-center mr-2' />
                <li>
                  the Holy Spirit, who creates faith through God’s Word and
                  Sacraments.
                </li>
              </div>
            </ul>
            <p>
              The three persons of the Trinity are coequal and coeternal, one God.
            </p>
          </div>
          <div className='mt-24 mb-12'>
            <p>
              Our congregation accepts and preaches the Bible-based teachings of
              Martin Luther that inspired the reformation of the Christian Church
              in the 16th century. The teaching of Luther and the reformers can be
              summarized in three phrases: Grace alone, Faith alone, Scripture
              alone.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-16'>
            <BeliefCard
              title='Grace Alone'
              subTitle='Sola Gratia'
              description='God loves the people of the world, even though they are sinful, rebel against Him and do not deserve His love. He sent Jesus, His Son, to love the unlovable and save the ungodly.'
              image={data.grace.childImageSharp.gatsbyImageData}
            />
            <BeliefCard
              title='Faith Alone'
              subTitle='Sola Fide'
              description='By His suffering and death as the substitute for all people of all time, Jesus purchased and won forgiveness and eternal life for them. Those who hear this Good News and believe it have the eternal life that it offers. God creates faith in Christ and gives people forgiveness through Him.'
              image={data.faith.childImageSharp.gatsbyImageData}
            />
            <BeliefCard
              title='Scripture Alone'
              subTitle='Sola Scriptura'
              description='The Bible is God’s inerrant and infallible Word, in which He reveals His Law and His Gospel of salvation in Jesus Christ. It is the sole rule and norm for Christian doctrine.'
              image={data.scripture.childImageSharp.gatsbyImageData}
            />
          </div>
        </section>

        <hr className='my-24 border border-stone-200' />

        {/* Lutheran Confessions */}
        <section>
          <div className='mb-12'>
            <h5 className='mb-3'>The Lutheran Confessions</h5>
            <p className='text-textMedium'>
              Drawn from God’s Word, the Lutheran Confessions are a true and
              binding exposition of Holy Scripture and serve as authoritative
              texts for all pastors, congregations and other rostered church
              workers of The Lutheran Church—Missouri Synod.
            </p>
          </div>
          <div className='mb-12'>
            <h5 className='mb-3'>What Are The Lutheran Confessions?</h5>
            <p className='text-textMedium mb-2'>
              The Lutheran Church—Missouri Synod accepts the Scriptures as the
              inspired and inerrant Word of God, and the LCMS subscribes
              unconditionally to all the symbolical books of the Evangelical
              Lutheran Church as a true and unadulterated statement and exposition
              of the Word of God.
            </p>
            <p className='text-textMedium'>
              We accept the Lutheran Confessions as articulated in the Book of
              Concord of 1580 because they are drawn from the Word of God, and on
              that account we regard their doctrinal content as a true and binding
              exposition of Holy Scripture and as authoritative for all pastors,
              congregations and other rostered church workers of The Lutheran
              Church—Missouri Synod.
            </p>
          </div>
          <div className='my-24 grid grid-cols-4 gap-12'>
            {lutheranConfessions.map((conf: LutheranConfessionType) => (
              <LutheranConfessionCard name={conf.name} link={conf.link} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query WhatWeBelievePageQuery {
    faith: file(relativePath: { eq: "faith_alone.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    grace: file(relativePath: { eq: "grace_alone.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    scripture: file(relativePath: { eq: "scripture_alone.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default WhatWeBelieve;
