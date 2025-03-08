export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type AuthResponse = {
  token: string;
  user: User;
};
