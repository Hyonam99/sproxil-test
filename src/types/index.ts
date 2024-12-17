export type UserDataType = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export type UserType = {
	email: string;
	password: string;
	role: "ADMIN" | "USER";
};

export type AuthOptionsType = {
	onSuccess: (data: any) => void;
	onError: (error: any) => void;
};
