import { Context } from "./context";

export const feed = async (parent: any, args: any, context: Context) => {
    return await context.prisma.post.findMany();
};

export const fetchPost = async (parent: any, args: any, context: Context) => {
    return await context.prisma.post.findOne({
        where: {
            id: args.id,
        },
    });
};

export const createPost = async (parent: any, args: any, context: Context) => {
    return await context.prisma.user.update({
        where: {
            id: args.authorId,
        },
        data: {
            posts: {
                create: [{ content: args.content }],
            },
        },
    });
};

export const updatePost = async (parent: any, args: any, context: Context) => {
    return await context.prisma.post.update({
        where: {
            id: args.id,
        },
        data: {
            content: args.content,
        },
    });
};

export const deletePost = async (parent: any, args: any, context: Context) => {
    return await context.prisma.post.delete({
        where: {
            id: args.id,
        },
    });
};
