import React, { forwardRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BeliefCard from './beliefCard';
import ButtonComponent from './button';
import { faCross } from '@fortawesome/free-solid-svg-icons';

const Beliefs = forwardRef((_, ref): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BeliefsQuery {
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
  `);
  return (
    <div ref={ref as any} className='max-w-screen-2xl mx-auto flex flex-col justify-center my-48'>
      <h3 className='text-textPrimary text-center'>What We Believe</h3>
      <hr className="my-3 border border-accent w-1/4 mx-auto" />
      <p className='text-textMedium max-w-screen-md mx-auto mb-12 text-center'>
        With the universal Christian Church, The Lutheran Church—Missouri Synod
        teaches and responds to the love of the Triune God.
        <span className='text-accent underline ml-1'>The Father</span>, creator of all that exists,
        <span className='text-accent underline ml-1'>Jesus Christ</span>, the Son, who became human to suffer and die
        for the sins of all human beings and to rise to life again in the
        ultimate victory over death and Satan, and
        <span className='text-accent underline ml-1'>The Holy Spirit</span>, who creates faith through God's Word and
        Sacraments.
      </p>
      <div className='grid grid-cols-3 gap-16 mb-12'>
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
      <ButtonComponent link='/about/what-we-believe' label='More About Our Confession' startIcon={faCross} theme="secondaryOutline" classes={['self-center']} />
    </div>
  );
});

export default Beliefs;
