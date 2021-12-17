import React from "react";
import validator from "validator";
import { useFormContext } from "react-hook-form";

const ContactFormInput = ({ type, name, label, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const validate = (value) => {
		switch (type) {
			case "text":
				return validator.isEmpty(value);
			case "email":
				return validator.isEmail(value);
			case "tel":
				return value.length >= 10 && validator.isMobilePhone(value);
			case "number":
				return validator.isNumeric(value);
			default:
				return true;
		}
	};

	return (
		<div className="flex-1">
			<label htmlFor={name} className="text-xs">
				{label}
			</label>
			<p className="mt-2">
				<input
					id={name}
					name={name}
					autoCorrect="off"
					autoComplete={type}
					type={type || "text"}
					aria-invalid={errors[name]}
					defaultValue={defaultValue || ""}
					aria-describedby={`${name}_error`}
					{...register(name, { required: true, validate: (v) => validate(v) })}
				/>
				{errors[name] && (
					<span
						id={`${name}_error`}
						className={`block text-xs p-2 mt-1 text-center bg-warning-contrast text-warning-contrast-foreground`}>
						Error Please enter a valid {label}
					</span>
				)}
			</p>
		</div>
	);
};

export default ContactFormInput;
