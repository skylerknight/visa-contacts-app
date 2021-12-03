import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ContactForm from "../../components/forms/ContactForm";

const CreateContactPage = () => {
	return (
		<Layout>
			<Header title="Create Contact" />
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
