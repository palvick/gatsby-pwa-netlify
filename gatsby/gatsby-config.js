require('dotenv').config({
  path: '.env',
});
const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Gatsby PWA Example',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '../drupal/content/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '../drupal/files/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby PWA',
        short_name: 'Gatsby PWA',
        start_url: '/',
        background_color: '#1d69ab',
        theme_color: '#1d69ab',
        display: 'standalone',
        icon: path.join(__dirname, 'src/images/logo.png'),
      },
    },
  ],
  mapping: {
    'ContentJson.fields.field_image': 'ContentJson',
    'ContentJson.fields.field_tags': 'ContentJson',
    'ContentJson.fields.uid': 'ContentJson',
    'ContentJson.fields.file': 'File',
  },
}
