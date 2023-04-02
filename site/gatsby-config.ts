import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Good Shepherd Lutheran Church`,
    siteUrl: `https://goodshepherdmankato.org`,
    subTitle: `Grow in God’s Truth. Show Jesus’ Love.`,
    address: '2101 Lor Ray Drive, North Mankato, MN',
    description: 'A Lutheran Church Missouri Synod serving the Mankato area',
    email: 'goodshepmankato@gmail.com',
    phone: '507-388-4336',
    image: './src/assets/images/LCMS_logo.png',
    keywords: ['church', 'missouri', 'synod', 'lutheran', 'religion', 'good', 'shepherd', 'good shepherd', 'lcms', 'mankato', 'north mankato'],
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ms4qy7os',
        dataset: 'production',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-google-gtag',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik', 'Karla']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/LCMS_logo_black.png',
      },
    },
  ],
};

export default config;
