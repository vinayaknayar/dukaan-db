import TransactionTable from "@/components/main/payments/transactiontable"
import Overview from "@/components/main/payments/overview"
import Header from "@/components/main/payments/header"

const Payment = () => {
	return (
		<div className="payment pb-6 bg-stone-100 w-screen md:w-full overflow-hidden">
			<Header />
			<Overview />
			<TransactionTable />
		</div>
	);
}

export default Payment;