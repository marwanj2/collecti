
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import React from "react";

const Login = () => {


	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Connectez-vous à votre compte</h1>
						<input
							type="email"
							placeholder="Numéro Télephone"
							name="email"
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Mot de passe"
							name="password"
							required
							className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
							Se Connecter
						</button>
					</form>
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