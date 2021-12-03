import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";

const CreateContactPage = () => {
	return (
		<Layout>
			<h1>Create Contact</h1>
			<Header title="Visa Contacts" />
			<main className="flex flex-col flex-1 bg-gray-50">
				<Link href={`/`}>
					<a className="">Back</a>
				</Link>
				<ContactForm />
			</main>
			<Footer />
		</Layout>
	);
};

export default CreateContactPage;
