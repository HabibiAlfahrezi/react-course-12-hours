import { useState } from "react";
import "./index.css";
const FormValidation = () => {
	const [userForm, setUserForm] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [errorUserForm, setErrorUserForm] = useState({
		errorUsername: "",
		errorEmail: "",
		errorPassword: "",
		errorConfirmPassword: "",
	});

	const [colorUserForm, setColorUserForm] = useState({
		colorUsername: "",
		colorEmail: "",
		colorPassword: "",
		colorConfirmPassword: "",
	});

	const handleChange = (form, value) => {
		setUserForm((prevData) => ({ ...prevData, [form]: value }));
	};

	const setColorUser = (form, value) => {
		setColorUserForm((prevColor) => ({ ...prevColor, [form]: value }));
	};

	const setErrorUser = (form, value) => {
		setErrorUserForm((prevError) => ({
			...prevError,
			[form]: value,
		}));
	};

	const validate = (e) => {
		e.preventDefault();

		if (userForm.username.length >= 8) {
			setErrorUser("errorUsername", "");
			setColorUser("colorUsername", "green");
		} else {
			setErrorUser("errorUsername", "Your username must be 8 letter long");
			setColorUser("colorUsername", "red");
		}

		if (userForm.email.includes("@gmail.com")) {
			setErrorUser("errorEmail", "");
			setColorUser("colorEmail", "green");
		} else {
			setErrorUser("errorEmail", "Please enter a valid email address");
			setColorUser("colorEmail", "red");
		}

		// Validasi Password
		if (userForm.password.length >= 8) {
			setErrorUser("errorPassword", "");
			setColorUser("colorPassword", "green");
		} else {
			setErrorUser(
				"errorPassword",
				"Your password must be at least 8 characters long"
			);
			setColorUser("colorPassword", "red");
		}

		// Validasi Confirm Password
		if (userForm.password === userForm.confirmPassword) {
			setErrorUser("errorConfirmPassword", "");
			setColorUser("colorConfirmPassword", "green");
		} else {
			setErrorUser("errorConfirmPassword", "Passwords do not match");
			setColorUser("colorConfirmPassword", "red");
		}
	};

	return (
		<div className="card">
			<div className="card-image"></div>

			<form action="">
				<input
					type="text"
					placeholder="Name"
					style={{ borderColor: colorUserForm.colorUsername }}
					value={userForm.username}
					onChange={(e) => handleChange("username", e.target.value)}
				/>
				<p className="error">{errorUserForm.errorUsername}</p>

				<input
					type="email"
					placeholder="Email"
					style={{ borderColor: colorUserForm.colorEmail }}
					value={userForm.email}
					onChange={(e) => handleChange("email", e.target.value)}
				/>
				<p className="error">{errorUserForm.errorEmail}</p>

				<input
					type="password"
					placeholder="Password"
					style={{ borderColor: colorUserForm.colorPassword }}
					value={userForm.password}
					onChange={(e) => handleChange("password", e.target.value)}
				/>
				<p className="error">{errorUserForm.errorPassword}</p>

				<input
					type="password"
					placeholder="Confirm Password"
					style={{ borderColor: colorUserForm.colorConfirmPassword }}
					value={userForm.confirmPassword}
					onChange={(e) => handleChange("confirmPassword", e.target.value)}
				/>
				<p className="error">{errorUserForm.errorConfirmPassword}</p>

				<button className="submit-btn" onClick={validate}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormValidation;
