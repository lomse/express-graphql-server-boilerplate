export default () => {
  const resolvers = {
    Query: {
      sayHi: () => 'Hello world'
    }
  }

  return resolvers
}