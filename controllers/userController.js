import User from '../models/userModel.js';

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

const createUser = async ({ name, age, email }) => {
    try {
        const user = await User.create({ name, age, email });
        return user;
    } catch (error) {
        throw new Error('Failed to create user');
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
};

export { getUsers, createUser, deleteUser };
