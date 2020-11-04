import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { typeDefs } from "./schema";
import * as post from "./post";
import * as user from "./user";

const resolvers = {
    Query: {
        feed: post.feed,
        post: post.fetchPost,
        user: user.fetchUser,
    },
    Mutation: {
        createPost: post.createPost,
        updatePost: post.updatePost,
        deletePost: post.deletePost,

        createUser: user.createUser,
        updateUser: user.updateUser,
        deleteUser: user.deleteUser,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext(),
});
server.listen().then(({ url }) => console.log(`Server running at ${url}`));
