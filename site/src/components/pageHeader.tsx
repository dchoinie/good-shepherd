import React from 'react'
import { useLocation } from "@reach/router";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faHouse, faSlash } from '@fortawesome/free-solid-svg-icons';

interface PageHeaderProps {
    title: string;
    subTitle?: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps): JSX.Element => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <div className="max-w-screen-2xl mx-auto my-12">
        <div className="flex">
          <Link to="/" className="self-center">
            <FontAwesomeIcon icon={faHouse} className="text-textPrimary hover:text-accent" />
          </Link>
          <span className="mx-4 text-textPrimary self-center text-sm">/</span>
          <div className="flex">
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <p key={to} className="text-textPrimary self-center capitalize">
                  {value}
                </p>
              ) : (
                <div className="flex" key={to}>
                  <Link
                    to={to}
                    key={to}
                    className="text-textPrimary self-center capitalize hover:text-accent"
                  >
                    {value}
                  </Link>
                  <span className="mx-4 text-textPrimary self-center text-sm">/</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-24">
          <h3>{title}</h3>
          <hr className="mt-3 border border-stone-200" />
        </div>
      </div>
    );
}

export default PageHeader