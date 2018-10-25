# Formidable &middot; [![CircleCI](https://circleci.com/gh/omariosouto/cmail-back/tree/master.svg?style=shield)](https://circleci.com/gh/omariosouto/cmail-back/tree/master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shield)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=shield)](https://github.com/omariosouto/formidable/blob/master/LICENSE) [![Coverage Status](https://coveralls.io/repos/github/omariosouto/formidable/badge.svg?branch=master)](https://coveralls.io/github/omariosouto/formidable?branch=master)

> This project is just a test of an implementation of DDD concepts for Front End development.

## About the project
- [PT-BR](https://github.com/omariosouto/formidable/blob/master/docs/objetivo.md)

## Developing

### Setting up Dev

If you want to run project and develop new features just type:

```shell
git clone https://github.com/omariosouto/formidable.git
cd formidable/
npm install && npm run dev
```

After it the project will open in a new tab on your favorite browser :)

### Prerequisites

To run this project you need to install:

- [Node JS](https://nodejs.org/en/download/)

## Configuration

This project ready to play has setup for:

- **Circle CI Contiunous Intergation**: Just make an commit to master branch :);
- **Coveralls**: Just run `npm run test:coveralls`;
- **Code linter with an styleguide**: To check the style of your code just run: `npm run lint`;
- **Git hooks for better commits**: Aways when you try to commit a git hook run the linter process;
- **Development server**: This project has a development server with BrowserSync and you can start it running `npm run dev`;
- **Babel**: This project support the most recent updates of javascript, if you want to improve babel features just change .babelrc and install new features;

## Tests

If want to write tests in this project, place all your test files in `./tests/` directory.

### Tools
- [Chai](https://github.com/chaijs/chai)
- [Mocha](https://github.com/mochajs/mocha)
- [Sinon](https://www.npmjs.com/package/sinon)

## Style guide

This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).


## Licensing

[MIT License](https://github.com/omariosouto/formidable/blob/master/LICENSE) © [Mario Souto](https://mariosouto.com/).
