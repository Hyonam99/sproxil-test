import { IoIosSearch } from "react-icons/io";
import style from "./searchinput.module.css";

const SearchInput = ({backgroundColor = "white"}: {backgroundColor?: string}) => {
	return (
		<div className={style.search_wrapper}>
			<IoIosSearch size={18} />
			<input type="text" placeholder="search" style={{backgroundColor}} />
		</div>
	);
};

export default SearchInput;
