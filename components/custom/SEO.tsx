import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

/**
 * Reusable SEO component for Next.js (app directory)
 * Usage: Place <SEO ... /> in your page component to set per-page SEO tags.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description = "Good Shepherd Lutheran Church is a community of faith that is committed to growing in our understanding of God's truth through worship, study, and fellowship. We strive to demonstrate Jesus' love in our community and beyond through service, compassion, and outreach.",
  keywords,
  canonical = "https://goodshepherdmankato.org",
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite,
  twitterCreator,
}) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open Graph tags */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {/* Twitter Card tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && (
        <meta name="twitter:description" content={ogDescription} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
};

export default SEO;
