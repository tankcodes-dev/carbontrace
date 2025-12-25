export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="h-screen w-screen grid grid-cols-2">{children}</div>;
}
