const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const Course = require('./controllers/course');

// The GraphQL schema in string form
// 
const typeDefs = gql`
  type Course { title: String, subtitle: String, icon: String, alt: String, href: String, description: String, startDate: String, courseImage: String }
  type Query { courses: [Course] }
`;

// The resolvers
const resolvers = {
  Query: {
    courses: () => Course.getCourses()
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

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);