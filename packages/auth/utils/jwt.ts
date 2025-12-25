import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.AUTH_SECRET!;

export interface TokenPayload {
	userId: String;
	email: String;
}

export function signToken(payload: TokenPayload): String {
	return jwt.sign(payload, JWT_SECRET);
}

export function verifyToken(token: string): TokenPayload {
	return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
