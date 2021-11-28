import { Session } from 'next-auth';

export interface SessionWithUserId extends Session {
  user?: {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
  };
}

export interface User {
  id: string;
  name: string;
  username: string;
  profile_image_url: string;
}
