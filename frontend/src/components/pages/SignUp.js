import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";


const SignUp = () =>{

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
					<form className={styles.form_container}>
						<h1>Créer Compte</h1>
						<input
							type="text"
							placeholder="
              Nom et prénom"
							name="firstName"
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Numéro Télephone"
							name="lastName"
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Address"
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
							S'inscrire
						</button>
					</form>
				</div>
			</div>
		</div>
	);
  }

export default SignUp;