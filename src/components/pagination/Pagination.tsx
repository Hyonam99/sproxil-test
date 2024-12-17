import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import style from "./pagination.module.css";

interface PaginationProps {
	onPageChange: (page: number) => void;
	currentPage: number;
	totalPages: number;
}

const Pagination = (props: PaginationProps) => {
	const { currentPage, totalPages, onPageChange } = props;

	const handlePrevious = () => {
		onPageChange(currentPage - 1);
	};
	const handleNext = () => {
		onPageChange(currentPage + 1);
	};

	const handleClick = (page: number) => {onPageChange(page)}
	return (
		<div className={style.pagination}>
			<button onClick={handlePrevious} disabled={currentPage === 1}>
				<MdKeyboardArrowLeft />
			</button>
			{[...Array(totalPages)].map((_, index) => (
				<button onClick={() => { handleClick(index + 1) }} className={index + 1 === currentPage ? style.active_page : style.inactive}>{index + 1}</button>
			))}
			<button onClick={handleNext} disabled={currentPage === totalPages}>
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};

export default Pagination;
