---
title: Development
---

If you want to further customise Mue, fork it, or open a pull request implementing fixes or changes you can follow this guide here to get started. 

## Mue Tab
The Mue development utilities we use are Git for version control and Node.js and Webpack to run the development server and create production builds to
be submitted to the extension stores. Vercel is linked to our repository in order to automatically deploy new changes to our [demo](https://demo.muetab.com)
which is embedded on the Mue website.

### Installation
#### Requirements
* [Git](https://git-scm.com)
* [Node.JS](https://nodejs.org)
* A suitable browser (Please note that IE is not supported)

#### Starting
1. Clone the repository using ``git clone https://github.com/mue/mue.git``
2. Run ``yarn`` or ``npm i`` to install all needed dependencies
3. Run ``yarn start`` or ``npm start`` to start the development server
4. Code your heart out! (See the sections below for how to build the extension)

#### Building
1. Run ```yarn run build`` or ``npm run build``
2. Run the command for your browser (chrome, firefox, opera), for example ``yarn run chrome``

#### Browser
If you need to add the built extension to your browser, follow these steps:
