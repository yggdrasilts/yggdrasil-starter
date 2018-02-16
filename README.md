# yggdrasil-starter

Simple yggdrasilts boilerplate project.

## Prerequisites

* Install [NodeJS](https://nodejs.org/en/) (_Yggdrasilts team recommends using [nvm](https://github.com/creationix/nvm)_)
* Install [yarn](https://yarnpkg.com) (_Yggdrasilts team recommends using [yarn](https://yarnpkg.com) to build its applications_)

## Run the starter

```bash
git clone https://github.com/yggdrasilts/yggdrasil-starter.git [PROJECT_NAME]
cd [PROJECT_NAME]
yarn install
yarn start
```

The default access is located on **[http://localhost:3000](http://localhost:3000)**.

## Project structure

```bash
.
├── src				// To contain source files
│   ├── controllers		// To contain controllers files
│   ├── routes			// To contain routes configurations files
│   ├── test			// To contains test files
│   ├── views			// To contains view files (pug or hbs)
│   ├── ignition.ts		// File to initiate the application
│   └── server.ts		// File that contains yggdrasil server class configuration
├── gulpfile.js			// Gulp file to load yggdrasil gulp task
├── LICENSE			// License file (MIT).
├── package.json		// Package json file with all necessary dependencies
├── README.md			// Readme file with useful information
├── tsconfig.json		// TypeScript config file to compile this yggdrasil project
├── tsconfig.spec.json 		// TypeScript config file to compile this yggdrasil project and its test files
└── tslint.json			// TypeScript lint file to ensure the coherence of the project
```

## YARN/NPM run scripts

* **clean**: This script cleans built files/directories.
* **clean:all**: This script cleans all unnecessary files/directories only leaving the source files.
* **compile**: Builds the project.
* **compile:test**: Builds the project with test (spec) files.
* **start**: Stars the application.
* **test**: Runs all tests.