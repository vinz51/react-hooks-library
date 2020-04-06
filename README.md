# react-hooks-library

I created this project to make easier the build of one library for only ui components.
The build is entirely managed by webpack for dev and production way.
Besides, actually, there is a bug between the npm/yarn link and react. In fact, the hooks cannot be working with some rules to respect. One of the braking rule is the existence of 2 instances of react in the DOM. To avoid this, i create a file that will link the version of the parent inside `react-hooks-library`.
Thanks to this command line, you will be able to working, in development, to build your own react components !! And that's awesome !!

## Command lines

`yarn start` : start your app
`yarn run watch` : watch your app for Hot Reload Middleware
`yarn run debug` : debug webpack
`yarn build` : build the current project
`yarn run link` : link the current version of react from the parent project to `react-hooks-library`
  - This command works like :
    - go to the parent and enter `pwd` to get absolute path
    - write the `yarn run link [absolute path]`
    (reload your parent's build after launch this project before)
    - to finished, write `yarn run link` without parameter (or `-f` flag to enforce the unlink) to unlink the previous react library. Next to that, build your project
`yarn run clear` : clean the link
`yarn test` : launch the test
`yarn run test:w` : watch the test
`yarn run test:coverage` : build coverage
`yarn run lint` : execute linter and prettier to format the project
`yarn run linf` : fixe wrong formats

## Tools installed

- Jest
- Prettier
- Eslint
- Webpack


Copyright (c) 2019-present Benoit Vincent
