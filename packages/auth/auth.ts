import NextAuth, { NextAuthConfig } from "next-auth";
import { prisma } from "@repo/database";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import { signToken } from "./utils/jwt";


declare module "next-auth" {
	interface Session {
		accessToken?: string;
	}
}

export const authConfig: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [Google],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (user && account) {
				token.userId = user.id;
				token.accessToken = signToken({
					userId: user.id!,
					email: user.email!,
				});
			}
			return token;
		},

		async session({ session, token }) {
			session.accessToken = token.accessToken as string;
			session.user.id = token.userId as string;
			return session;
		},
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
