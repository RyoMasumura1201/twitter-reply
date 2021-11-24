import { Session } from 'next-auth';

export interface SessionWithUserId extends Session {
  user: {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
  };
}
