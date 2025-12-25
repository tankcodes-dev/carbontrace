import { signIn } from "@repo/auth";
import Image from "next/image";
import Logo from "../../../resources/images/carbontrace-logo.png";
import FactoryBg from "../../../resources/images/ct-factory-bg.png";

export default function SignIn() {
	return (
		<>
			<div className="bg-[#F7F9FC] relative">
				<div className="absolute top-3 left-3">
					<Image src={Logo} alt="carbontrace-logo" height={80} />
				</div>
				<div className="flex w-full h-full flex-col justify-center items-center">
					<h1 className="font-bold text-4xl mb-4">
						Log Into Your account
					</h1>
					<p className="w-md text-center mb-3">
						Start calculating your facility's embedded carbon
						emissions today. Generate EU compliance reports.
					</p>
					<SignInForm />
				</div>
			</div>
			<div className="bg-linear-to-tr from-[#006D5B] via-[#073b64]/85 to-transparent relative">
                <Image src={FactoryBg} alt="ct-factory-bg" className="absolute -z-1 object-cover" fill/>
				<div className="flex flex-col h-full w-full justify-center items-center">
					<h1 className="font-bold text-4xl mb-4 text-[#f7f9fc] text-center w-md">
						From Raw Bills to CBAM Compliant XML.
					</h1>
					<p className="w-md text-center mb-3 text-[#F7F9FC]">
						Stop manual calculations. Automate your embedded carbon
						reporting and ensure seamless EU Customs clearance.
					</p>
				</div>
			</div>
		</>
	);
}

function SignInForm() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google", { redirectTo: "/" });
			}}
		>
			<button
				className="bg-[#073b64] text-[#F7F9FC] w-2xs px-4 py-2 border-2 rounded hover:cursor-pointer"
				type="submit"
			>
				Sign in
			</button>
		</form>
	);
}
