import { gql } from "apollo-server";

export const typeDefs = gql`
type User {
    id: ID!
    name: String!
    bio: String
}

type Post {
    id: ID!
    author: User!
    content: String!
}

type Query {
    feed: [Post!]
    post(id: ID!): Post
    user(id: ID!): User
}

type Mutation {
    createPost(content: String!, authorId: ID!): Post!
    updatePost(id: ID!, content: String!): Post!
    deletePost(id: ID!): Post!

    createUser(name: String!, bio: String): User!
    updateUser(id: ID!, name: String!, bio: String): User!
    deleteUser(id: ID!): User!
}
`;
