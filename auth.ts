import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN_EMAIL = "etayroz@gmail.com";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    jwt({ token }) {
      if (token.email === ADMIN_EMAIL) {
        token.role = "admin";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined;
      }
      return session;
    },
  },
});
