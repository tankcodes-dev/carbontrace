import { authenticatedUser } from "./middleware";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// This route is protected
app.get("/profile", authenticatedUser, (req, res) => {
	res.json({ status: "SUCCESS", msg: "Authenticated" });
});

// This route is not protected
app.get("/", (req, res) => {
	res.send("Hi");
});

app.listen(process.env.PORT, (err) => {
	console.log(`Server started at port ${process.env.PORT}`);
});
