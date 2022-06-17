import { Link } from "react-router-dom";
import styles from "./style.module.css";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
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

const Login = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [phone, setPhone] = useState(null);
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
  
	const onChangePhone = (e) => {
	  const phone = e.target.value;
	  setPhone(phone);
	};
  
	const onChangePassword = (e) => {
	  const password = e.target.value;
	  setPassword(password);
	};
  
	const handleLogin = (e) => {
	  e.preventDefault();
  
	  setMessage("");
	  setLoading(true);
  
	  form.current.validateAll();
		console.log(checkBtn)
	  if (checkBtn.current.context._errors.length === 0) {
		AuthService.login(phone, password).then(
		  (user) => {
			console.log(user);		
			if(user.roles.includes("ROLE_ADMIN")){
				 props.history.push("/layout");
			}
			else{
				props.history.push("/home");
			}//window.location.reload();
		  },
		  (error) => {
			const resMessage =
			  (error.response &&
				error.response.data &&
				error.response.data.message) ||
			  error.message ||
			  error.toString();
  
			setLoading(false);
			setMessage(resMessage);
		  }
		);
	  } else {
		setLoading(false);
	  }
	};


	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<Form className={styles.form_container} onSubmit={handleLogin} ref={form}>
						<h1>Connectez-vous à votre compte</h1>
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
							type="password"
							placeholder="Mot de passe"
							name="password"
							required
							className={styles.input}
							onChange={onChangePassword}
							validations={[required]}
						/>
						          {message && (
									<div className="form-group">
									<div className="alert alert-danger" role="alert">
										{message}
									</div>
									</div>
								)}
						<CheckButton type="submit" className={styles.green_btn} ref={checkBtn}>
							Se Connecter
						</CheckButton>
					</Form>
				</div>
				<div className={styles.right}>
					<h1>Nouveau ici ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							S'inscrire
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;