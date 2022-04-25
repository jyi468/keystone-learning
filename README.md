# Project Setup
`mkdir keystone-learning`

`cd keystone-learning`

`yarn init`

`yarn add @keystone-6/core`

You must create a `keystone.ts` file after.

`// keystone.ts`

`export default {};`

Add typescript as a dependency
`yarn add typescript`

# Local Setup and Run
`yarn install`

Run with `yarn keystone dev`

# Authentication
Need to add the Auth package, as it's not directly built into Keystone
`yarn add @keystone-6/auth`

`auth.ts` file is what will be referenced by KeystoneJS for authentication configuration.

Import the `withAuth` function and `session` object from `auth.ts` to `keystone.ts` to use auth and session.

# Links

https://keystonejs.com/docs/walkthroughs#learn-keystone

GraphQL API Playground: http://localhost:3000/api/graphql