export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type URegister = Pick<User, 'username' | 'email' | 'password'>;
export type ULogin = Pick<User, 'email' | 'password'>;
export type UToken = Pick<User, 'id' | 'username'>;
