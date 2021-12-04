import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ContactForm from "../../components/forms/ContactForm";

import { ChevronLeftIcon } from "@heroicons/react/solid";

const CreateContactPage = () => {
	return (
		<Layout>
			<Header
				centerTitle
				title="Create Contact"
				leftControl={
					<Link href="/">
						<button className="flex flex-row items-center border px-3 py-2  text-sm font-bold">
							<ChevronLeftIcon className="w-5 h-5 mr-2" />
							Back
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1 w-full max-w-screen-md m-auto">
				<ContactForm />
			</main>
			<Footer />
		</Layout>
	);
};

export default CreateContactPage;
