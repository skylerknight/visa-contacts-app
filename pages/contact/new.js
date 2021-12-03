import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";

const CreateContactPage = () => {
	return (
		<Layout>
			<h1>Create Contact</h1>
			<Link href={`/`}>
				<a className="">Back</a>
			</Link>
			<ContactForm />
		</Layout>
	);
};

export default CreateContactPage;
