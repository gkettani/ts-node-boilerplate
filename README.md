# TS-NodeJS boilerplate
This is a small boilerplate for nodeJS using Typescript, Eslint and Jest.  

## How to run
| Command | Description |
|--------- | ----------- |
`npm run dev` |Run project in dev mode  
`npm run build` | Build project  
`npm run start` | Run build in prod mode  
`npm run test` | Run tests  
`npm run test:watch` | Run tests in watch mode  
`npm run test:coverage` | Run tests with coverage  
`npm run lint` | Run linter


### Eslint
Extends from airbnb-base-config for eslint + custom rules (see rules in .eslintrc.json)

### Absolute Path aliases
It is possible to import files by using `~/` to refer to the absolute path of the source folder.

### Winston Logger
Uses winston logger for handling logging. The config file is defined in `src/lib/Logger.ts`

### Tests
Uses Jest for unit testing

### VScode extensions:
- ESlint

### Environment variables
Create a `.env.{environment}.local` ( where {environment} is either dev or prod ) and copy all environment variables from the `.env.example`