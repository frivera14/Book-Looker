const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: String
        title: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookData {
        authors: [String]
        description: String
        bookId: String
        title: String
        image: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookData!): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs