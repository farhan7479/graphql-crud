// userResolvers.js
import { getUsers, createUser, deleteUser } from './controllers/userController.js';

const resolvers = {
    Query: {
        users: () => getUsers()
    },
    Mutation: {
        createUser: (_, { name, age, email }) => createUser({ name, age, email }),
        deleteUser: (_, { id }) => deleteUser(id)
    }
};

export default resolvers;
