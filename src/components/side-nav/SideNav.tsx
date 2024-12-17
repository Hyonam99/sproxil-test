import { NavLink } from "react-router-dom"
import Logo from "../logo/Logo";
import style from "./sidenav.module.css";
import { sideNavLinks } from "../../data/navLinks";
import {
	MdKeyboardArrowRight
} from "react-icons/md";

const SideNav = () => {
  return (
		<section className={style.nav_wrapper}>
			<Logo />
			<nav>
			  {sideNavLinks.map((link) => (
					<NavLink
						to={link.url}
						className={({ isActive }) => (isActive ? "active" : "")}
				  >
					  <div>
						  
					  	{<link.icon size={20}/>} {link.label}
					  </div>
					  <MdKeyboardArrowRight size={20}/>

					</NavLink>
					
				))}
			</nav>
		</section>
	);
}

export default SideNav
