import { useState } from "react";
import { AuthOptionsType, UserType } from "../types";
import { useNavigate } from "react-router-dom";

export const useLogin = (options: AuthOptionsType) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSuccess = () => {
		options.onSuccess && options.onSuccess("Login Successful");
	};

    const loginUser = (values: UserType) => {
        setIsLoading(true)
		localStorage.setItem("currentUser", JSON.stringify(values));
		setTimeout(() => {
			setIsLoading(false);
			onSuccess();
			if (values.email === "sproxiladmin@gmail.com") {
				navigate("/customers");
			} else {
				navigate("/");
			}
		}, 2000);
	};

	return {
		loginUser,
		isLoading,
	};
};
