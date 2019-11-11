# gatsby-pwa-netlify

This is just an experimental project to test PWA using Gatsby

An example project for building PWA with Gatsby
it combines the example code from other Github repositories
from below
https://www.gatsbyjs.org/docs/progressive-web-app/
https://github.com/drupal-tome/tome-gatsby/

This allows you to use Drupal locally to edit content, and consume that
content with GatsbyJS to generate a static site.
The static site then can be added as a shortcut to your desktop/mobile which then can run in both offline and online mode

Your Drupal and Gatsby codebases can live together in one repository!

You can see the latest build of this demo at https://compassionate-kowalevski-399cc2.netlify.com/

# Requirements

1. PHP 7+
1. [Composer](https://getcomposer.org/download/)
1. [Drush](https://github.com/drush-ops/drush-launcher)
1. [Yarn](https://yarnpkg.com/)
1. The `gatsby` command globally available, with `yarn global add gatsby-cli@next`.

# Installation

To install the project, run:

`./install.sh`

This will install Drupal and Gatsby for you.

# Development

To run development servers for Drupal and Gatsby, run:

`./run.sh`

Drupal will run at `http://127.0.0.1:8888`, and Gatsby will run at
`http://127.0.0.1:8000`.

# Create PWA Locally

run yarn build or gatsby buid to build the production version of the Gatsby site

run gatsby serve

Launch http://localhost:9000/article/drupal-tome-and-gatsby-js-yes-please

From the Chrome/Safari/FireFox browser select "Install Gatsby PWA" application to add shrotcut to your desktop or mobile App
