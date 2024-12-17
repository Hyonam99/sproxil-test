import CustomerHeader from "../components/customers/CustomerHeader"
import CustomersList from "../components/customers/CustomersList"
import DashboardHeader from "../components/dashboard-header/DashboardHeader"

const Customers = () => {
  return (
    <section>
      <DashboardHeader />
      <CustomerHeader />
      <CustomersList />
    </section>
  )
}

export default Customers
