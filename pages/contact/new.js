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
						<button className="btn-default">
							<ChevronLeftIcon className="w-5 h-5" />
							Back
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1 w-full max-w-screen-sm m-auto">
				<ContactForm />
			</main>
		</Layout>
	);
};

export default CreateContactPage;
