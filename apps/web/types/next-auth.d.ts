import "next-auth";

declare module "next-auth" {
	interface Session {
		accessToken?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		userId?: string;
		accessToken?: string;
	}
}
