import { type } from "os";

export interface User {
    id: number;
    fullname: string;
    email: string;
    password: string;
}

export type URegister= Pick<User, 'fullname' | 'email' | 'password'>;
export type ULogin= Pick<User, 'email' | 'password'>;
export type UToken= Pick<User, 'id' | 'fullname'>;