import { Outlet } from "react-router-dom";
import SideNav from "../components/side-nav/SideNav";
import style from "./layout.module.css"
import DashboardHeader from "../components/dashboard-header/DashboardHeader";

const AppLayout = () => {
	return (
		<main className={style.app_layout}>
			<SideNav />
			<section className={style.app_content}>
				<DashboardHeader />
				<Outlet />
			</section>
		</main>
	);
};

export default AppLayout;
