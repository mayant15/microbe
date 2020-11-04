import { Context } from "./context";

export const fetchUser = async (parent: any, args: any, context: Context) => {
    return context.prisma.user.findOne({
        where: {
            id: args.id,
        },
    });
};

export const createUser = async (parent: any, args: any, context: Context) => {
    return context.prisma.user.create({
        data: {
            name: args.name,
            bio: args.bio,
        },
    });
};

export const updateUser = async (parent: any, args: any, context: Context) => {
    return context.prisma.user.update({
        where: {
            id: args.id,
        },
        data: {
            name: args.name,
            bio: args.bio,
        },
    });
};

export const deleteUser = async (parent: any, args: any, context: Context) => {
    return context.prisma.user.delete({
        where: {
            id: args.id,
        },
    });
};
