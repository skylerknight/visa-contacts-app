import Head from "next/head";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col m-auto w-full max-w-xl h-[500px] border">
				<header className="flex h-20 bg-blue-700">
					<h1 className="m-auto text-2xl font-semibold text-white">Contacts App</h1>
				</header>
				<main className="flex flex-col flex-1 p-5"></main>
				<footer className="h-10 bg-gray-50 border-t"></footer>
			</div>
		</div>
	);
}
