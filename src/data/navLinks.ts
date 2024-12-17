import { LiaWalletSolid } from "react-icons/lia";
import { LuSquareUserRound } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";
import { TbCube } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";

export const sideNavLinks = [
	{ label: "Dashboard", icon: IoKeyOutline, url: "/" },
	{ label: "Product", icon: TbCube, url: "/product" },
	{ label: "Customers", icon: LuSquareUserRound, url: "/customers" },
	{ label: "Income", icon: LiaWalletSolid, url: "/income" },
	{ label: "Promote", icon: RiDiscountPercentLine, url: "/promote" },
	{ label: "Help", icon: MdOutlineLiveHelp, url: "/help" },
];
