import { WebSocketServer } from "ws";
import { prisma } from "@repo/database";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", async (ws: WebSocket, request) => {
	await prisma.user.create({
		data: {
			email: "shwetank1309@gmail.com",
		},
	});

	ws.send("You have successfully connected to server");
});
