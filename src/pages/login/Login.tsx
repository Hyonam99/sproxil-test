import { useState } from "react";
import { UserType } from "../../types";
import { useLogin } from "../../hooks";
import style from "./login.module.css";

const Login = () => {
	const [formValues, setFormValues] = useState<UserType>({
		email: "",
		password: "",
		role: "USER",
	});

	const { loginUser, isLoading } = useLogin({
		onSuccess: () => {
			alert("login successful");
		},
		onError: () => {
			alert("login failed");
		},
	});

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		const formName = e.target.name as keyof UserType;

		setFormValues((prev) => {
			return { ...prev, [formName]: e.target.value };
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginUser(formValues);
	};

	return (
		<section className={style.login_wrapper}>
			<div className={style.login_intro}>
				<h2>Welcome to Sproxil</h2>
				<p>Trusted brand for combacting counterfeits</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					Email address:
					<input type="email" name="email" id="email" placeholder="enter your email" onChange={handleChange} />
				</label>

				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						id="password"
						placeholder="enter your password"
						onChange={handleChange}
					/>
				</label>
				<button disabled={isLoading}>Login</button>
			</form>
		</section>
	);
};

export default Login;
