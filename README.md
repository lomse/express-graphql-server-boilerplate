# Boilerplate for an Express Graphql server
This is a boilerplate for a graphql server built with graphql, express.js, mongoose, typescript and es6

## How to use?
1. Install all the dependencies `yarn` or `npm i`
2. Rename `.env.sample` to `.env` and update the variables accordingly
3. Start your mongo server by running `mongod` in your terminal
4. Start the server by running `yarn dev`
5. Visit http://localhost:{PORT_NUMBER}/graphql and execute the query below: 
```
{
  sayHi
}
```
The server will return:

```
{
  "data": {
    "sayHi": "Hello world"
  }
}
```