import bcrypt from 'bcrypt';

export const cryptPassword = async (password:string) => await bcrypt.hash(password,10);

export const validationPassword = async (data :string, encrypted :string) => await bcrypt.compare(data,encrypted)