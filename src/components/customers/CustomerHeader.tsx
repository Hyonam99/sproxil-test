import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import style from './customers.module.css'

const CustomerHeader = () => {
  return (
		<div className={style.customer_header}>
			<div>
				<img src="/images/profile-2user.svg" alt="dashboard image" />
				<div>
					<p>Total Customers</p>
					<h3>5,423</h3>
					<small>
						<FaArrowUpLong color="green" />
						16% this month
					</small>
				</div>
			</div>

			<div>
				<img src="/images/profile-tick.svg" alt="dashboard image" />
				<div>
					<p>Members</p>
					<h3>1,893</h3>
					<small>
						<FaArrowDownLong color="red" />
						1% this month
					</small>
				</div>
			</div>

			<div>
				<img src="/images/monitor.svg" alt="dashboard image" />
				<div>
					<p>Active Now</p>
					<h3>189</h3>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default CustomerHeader

