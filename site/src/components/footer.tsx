import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import cx from "classnames";
import * as styles from "../styles/button.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Constants from '../constants/constants';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
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
    }
  `);

  const sort = (a: any, b: any) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  };

  const topNavItems = data.nav.nodes.map((navItem: any) => navItem);
  const subNavItems = topNavItems
    .filter(
      (topNavItem: any) => topNavItem.subLinks && topNavItem.subLinks.length > 0
    )
    .map(
      (topNavItem: any) =>
        topNavItem.subLinks &&
        topNavItem.subLinks.flatMap((subItem: any) => subItem)
    );
  const subs = subNavItems.flatMap((subItem: any) => subItem);
  const allNavItemsToDisplay = topNavItems
    .filter(
      (topNavItem: any) => topNavItem.subLinks && topNavItem.subLinks.length < 1
    )
    .concat(subs)
    .sort(sort);

  return (
    <div className="bg-stone-100">
      <div className='pt-24 pb-6 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col items-center'>
          <h4 className='text-textPrimary mb-2'>{data.site.siteMetadata.title}</h4>
          <h5 className="text-textMedium mb-12">{data.site.siteMetadata.subTitle}</h5>
          <div className='grid grid-cols-5 gap-2 text-center w-3/4 justify-items-center mb-12'>
            {allNavItemsToDisplay.map((item: any) => {
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-textMedium hover:text-accent'
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.link}
                  className='text-textMedium hover:text-accent'
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <hr className='mb-12 border border-accent w-1/2' />
          <div className="flex w-3/4 justify-between mb-12">
            <div className="flex flex-col">
              <h5 className='text-textPrimary'>Subscribe to our newsletter</h5>
              <p className="text-textMedium">Get the latest news, updates & info sent to your inbox</p>
            </div>
            <form action="https://formspree.io/f/mjvdkqbp" method="POST" className='flex self-center'>
              <input type="email" name="email" id="email" placeholder='Email' className='border border-stone-200 p-2 rounded shadow-md w-56 mr-4' />
              <button className={cx(styles.btn, styles.btnSecondary, styles.btnSmall, 'flex')} type="submit">
                <span>Submit</span>
                <FontAwesomeIcon className='ml-2 self-center' icon={faPaperPlane} />
              </button>
            </form>
          </div>
          <div className="flex justify-center text-secondary">
            <a href={Constants.facebookUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook as any} />
            </a>
            <a href={Constants.twitterUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={faTwitter as any} />
            </a>
            <a href={Constants.youTubeUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube as any} />
            </a>
          </div>
          <small className='text-textMedium'>&copy; {`${new Date().getFullYear()} ${data.site.siteMetadata.title}, All Rights Reserved`} </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
