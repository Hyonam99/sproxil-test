import SearchInput from "../search-input/SearchInput";
import style from "./dashboard-header.module.css";

const DashboardHeader = () => {
	const userName = JSON.parse(localStorage.getItem("currentUser") || "null") 
	return (
		<header className={style.header}>
			<h2>Hello {userName}</h2>
			<SearchInput />
		</header>
	);
};

export default DashboardHeader;
