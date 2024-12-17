import { useEffect, useState } from "react";
import { mockedUsers } from "../../data/mockedUsers";
import Pagination from "../pagination/Pagination";
import style from "./customers.module.css";
import { UserDataType } from "../../types";
import SearchInput from "../search-input/SearchInput";

const CustomersList = () => {
    const [page, setPage] = useState(1)
    const [initialSlice, setInitialSlice] = useState(0)
    const [endSlice, setEndSlice] = useState(3)
	const tableColumns = [
		"Customer Name",
		"Company",
		"Phone Number",
		"Email",
		"Country",
		"Status",
    ];

    const itemsPerPage = 3
    
    const onChange = (currentPage: number) => {
        setPage(currentPage);
    }

    const totalPage = Math.ceil(mockedUsers.length / itemsPerPage)
    
    const paginatedUsers = mockedUsers.slice(initialSlice, endSlice);
   
    
    useEffect(() => {
        setInitialSlice((page * itemsPerPage) - 3)
        setEndSlice(page * itemsPerPage);
    }, [page])

	return (
		<section className={style.customers_section}>
			<CustomerListHeader />

			<table>
				<thead>
					<tr>
						{tableColumns.map((column) => (
							<th key={column}>{column}</th>
						))}
					</tr>
				</thead>

				<tbody>
					{paginatedUsers.map((user: UserDataType, i: number) => (
						<tr>
							<td>{user.name}</td>
							<td>{user.company.name}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>{user.address.city}</td>
							<td>
								<p
									className={
										i % 2 === 0 ? style.active_status : style.inactive_status
									}
								>
									{i % 2 === 0 ? "active" : "inactive"}
								</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className={style.pagination_wrapper}>
				<Pagination
					totalPages={totalPage}
					currentPage={page}
					onPageChange={onChange}
				/>
			</div>
		</section>
	);
};

export default CustomersList;

const CustomerListHeader = () => {
	return (
		<section className={style.customer_list_header}>
			<div className={style.customer_list_header_intro}>
				<h2>All Customers</h2>
				<small>Active Members</small>
			</div>

			<SearchInput backgroundColor="#cdc4c474" />
		</section>
	);
};
