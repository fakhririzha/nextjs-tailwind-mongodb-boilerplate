import { compare, hash } from 'bcrypt';

export const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
    console.log('password', password);
    console.log('hashedPassword', hashedPassword);
    const isValid = await compare(password, hashedPassword);
    return isValid;
};
