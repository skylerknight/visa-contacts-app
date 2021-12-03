import React from "react";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

const CreateContactPage = () => {
	return (
		<div>
			<h1>Create Contact</h1>
			<Link href={`/`}>
				<a className="">Back</a>
			</Link>
			<ContactForm />
		</div>
	);
};

export default CreateContactPage;
