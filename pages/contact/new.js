import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ContactForm from "../../components/forms/ContactForm";

import { ArrowLeftIcon } from "@heroicons/react/solid";

const CreateContactPage = () => {
	return (
		<Layout>
			<Header
				title="Create Contact"
				leftControl={
					<Link href="/">
						<button type="button" className="flex w-8 h-8">
							<ArrowLeftIcon className="w-5 h-5 m-auto" />
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1">
				<ContactForm />
			</main>
			<Footer />
		</Layout>
	);
};

export default CreateContactPage;
