
Security Warning:
=================
No usages or installs that depend on Node.js, NPM, or equivalent should ever
be done with your personal user account on your personal machine!
This could read/write/delete/execute all your personal data,
your company's data, or your client's data.

For running the code that is built on the ES6 module feature you either
- have to run it from an IDE-integrated server (preferably in debug mode),
- have to run it from local server with caches disabled, or
- bundle it *on a separate, isolated machine* with a bundler like webpack, parcel, or [rollup](https://rollupjs.org), e.g.
  - install with  `npm install rollup`
  - run via `rollup allTests.js --file allTestSuite.js --format es --watch` 
  
