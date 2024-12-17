import SearchInput from "../search-input/SearchInput";
import style from "./dashboard-header.module.css";

const DashboardHeader = () => {
	return (
		<header className={style.header}>
			<h2>Hello</h2>
            <SearchInput />
		</header>
	);
};

export default DashboardHeader;
