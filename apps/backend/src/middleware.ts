import "dotenv/config";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export async function authenticatedUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log(JSON.stringify(req.headers));
	
	if (!req.headers.authorization) {
		return res.status(401).json({
			status: "Failed",
			msg: "Unauthorized",
		});
	}

	const token = req.headers.authorization?.split(" ")[1];

	try {
		const data = jwt.verify(
			token as string,
			process.env.AUTH_SECRET as string
		);
		console.log(data);
		next();
	} catch {
		return res.status(401).json({
			status: "Failed",
			msg: "Invalid token",
		});
	}
}
