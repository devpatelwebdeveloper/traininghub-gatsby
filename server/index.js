const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { Courses } = require('./Courses');

// The GraphQL schema in string form
const typeDefs = gql`
  type Course { title: String, subtitle: String, image: String, alt: String, description: String, startDate: String, courseImage: String }
  type Query { courses: [Course] }
`;

// The resolvers
const resolvers = {
  Query: {
    courses: () => Courses
  },
};

const server = new ApolloServer({
  typeDefs, resolvers, playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  }
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`)
);