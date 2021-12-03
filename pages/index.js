import Head from "next/head";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col justify-between m-auto w-full max-w-xl h-80 border">
				<header></header>
				<main className="flex flex-col">
					<h1 className="text-3xl font-bold">Contacts App</h1>
				</main>
				<footer></footer>
			</div>
		</div>
	);
}
