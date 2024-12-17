import { TbSettings2 } from "react-icons/tb";
import style from "./logo.module.css";
const Logo = () => {
	return (
		<div className={style.logo}>
			<TbSettings2 size={32}/>
			<h2>
				Dashboard <small>v.01</small>
			</h2>
		</div>
	);
};

export default Logo;
