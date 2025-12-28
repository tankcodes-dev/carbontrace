import styles from "./page.module.css";
import { auth, signOut } from "@repo/auth";
import { redirect } from "next/navigation";
import axios from "axios";
import { prisma } from "@repo/database";

export default async function Home() {
	const session = await auth();
	if (!session?.user) redirect("/user/signin");

	try {
		const response = await axios.get("http://localhost:8080/profile", {
			headers: {
				Authorization: `Bearer ${session.accessToken}`,
			},
		});

		const userfromDb = await prisma.user.findFirst();

		return (
			<div className={styles.page}>
				<div>
					{JSON.stringify(session.user)}
					<form
						action={async () => {
							"use server";
							await signOut();
						}}
					>
						<button type="submit">Sign Out</button>
					</form>
					{`Email: ${userfromDb?.email}`}
					{JSON.stringify(response.data)}
				</div>
			</div>
		);
	} catch (error: any) {
		console.log(error.response.data);
		return <div>Error</div>;
	}
}
