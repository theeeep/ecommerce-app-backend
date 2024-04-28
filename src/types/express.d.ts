import { User as PrismaUser } from '../prisma/prismaclient';

declare module 'express-serve-static-core' {
  interface Request {
    user?: PrismaUser;
  }
  interface Response {
    user?: PrismaUser;
  }
}

declare module 'express-session' {
  interface SessionData {
    user: PrismaUser;
  }
}
