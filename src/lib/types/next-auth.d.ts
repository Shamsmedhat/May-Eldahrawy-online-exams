/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    token: string;
    user: ApplicationUser;
  }

  interface Session {
    user: ApplicationUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends User {}
}
