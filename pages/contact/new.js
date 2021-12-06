import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/buttons/Button";
import ContactForm from "../../components/forms/ContactForm";

import { ChevronLeftIcon } from "@heroicons/react/solid";

const CreateContactPage = () => {
	return (
		<Layout>
			<Header
				centerTitle
				title="Create Contact"
				leftControls={
					<Button variant="default" href="/" aria-label="Back to Home" className="btn-default">
						<ChevronLeftIcon className="w-5 h-5" />
						Back
					</Button>
				}
			/>
			<main className="flex flex-col flex-1 w-full max-w-screen-sm m-auto">
				<ContactForm />
			</main>
		</Layout>
	);
};

export default CreateContactPage;
