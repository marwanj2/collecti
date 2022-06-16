import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/auth.services";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vphone = (value) => {
	if (value.length !== 8) {
	  return (
		<div className="alert alert-danger" role="alert">
		  The Phone number must be between 8 numbers.
		</div>
	  );
	}
  };

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const SignUp = (props) =>{
	const form = useRef();
	const checkBtn = useRef();
  
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState(null);
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");
  
	const onChangeName = (e) => {
	  const name = e.target.value;
	  setName(name.trim().toUpperCase());	
	};
  
	const onChangePhone = (e) => {
		const phone = e.target.value;
		setPhone(phone);	
	  };
	
	const onChangeEmail = (e) => {
	  const email = e.target.value;
	  setEmail(email.trim().toLowerCase());
	};
  
	const onChangePassword = (e) => {
	  const password = e.target.value;
	  setPassword(password);
	};
  
	const handleRegister = (e) => {
	  e.preventDefault();
  
	  setMessage("");
	  setSuccessful(false);
  
	  form.current.validateAll();
  
	  if (checkBtn.current.context._errors.length === 0) {
		AuthService.register(name, email, password, phone).then(
		  (response) => {
			setMessage(response.data.message);
			setSuccessful(true);
		  },
		  (error) => {
			const resMessage =
			  (error.response &&
				error.response.data &&
				error.response.data.message) ||
			  error.message ||
			  error.toString();
  
			setMessage(resMessage);
			setSuccessful(false);
		  }
		);
	  }
	};
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Bienvenue</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Se Connecter
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<Form className={styles.form_container} onSubmit={handleRegister} ref={form}>
						<h1>Créer Compte</h1>
						<input
							type="text"
							placeholder="Nom et prénom"
							name="name"
							required
							className={styles.input}
							onChange={onChangeName}
							validations={[required, vname]}
						/>
						<Input
							type="number"
							placeholder="Numéro Télephone"
							name="phone"
							required
							className={styles.input}
							onChange={onChangePhone}
							validations={[required, vphone]}
						/>
						<Input
							type="email"
							placeholder="Email"
							name="email"
							required
							className={styles.input}
							onChange={onChangeEmail}
							validations={[required, validEmail]}
						/>
						<Input
							type="password"
							placeholder="Mot de passe"
							name="password"
							className={styles.input}
							onChange ={onChangePassword}
							validations={[required, vpassword]}
						/>
						{message && (
							<div className="form-group">
								<div className={
									successful ? "alert alert-success" : "alert alert-danger"
								}
								role="alert"
								>
							{message}
							</div>
						</div>
						)}

						<CheckButton type="submit" className={styles.green_btn} ref ={checkBtn}>
							S'inscrire
						</CheckButton>
					</Form>
				</div>
			</div>
		</div>
	);
  }

export default SignUp;