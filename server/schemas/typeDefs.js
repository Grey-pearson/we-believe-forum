const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    post: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    // comments: [Comment]!
  }

  // type Comment {
  //   _id: ID
  //   commentText: String
  //   commentAuthor: String
  //   createdAt: String
  // }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    post(username: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): 
    // addComment(
    //   thoughtId: ID!
    //   commentText: String!
    //   commentAuthor: String!
    // ): Thought
    removeThought(thoughtId: ID!): Thought
    // removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;