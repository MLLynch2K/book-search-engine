const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }
    input BookInput {
        authors: [String]
        description: String
        title: String
        bookId: ID!
        image: String
        link: String
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!, password: String!): Auth
        addBook(authors: [String], description: String, bookId: String!, image: String, link: String, title: String!): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs
