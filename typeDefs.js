
const typeDefs = `
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }
  
  type Query {
    users: [User!]!
  }
  
  type Mutation {
    createUser(name: String!, age: Int!, email: String!): User!
    deleteUser(id: ID!): User
  }
`;

export default typeDefs;
