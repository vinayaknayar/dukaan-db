import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
	const values = {
		"orders": "231",
		"amount": "₹23,92,312.19"
	}
	return (
		<div className="p-6 max-w-screen-2xl">
			<div className="flex flex-row justify-between items-center mb-5">
				<h2 className="text-[20px]">Overview</h2>
				<Select>
					<SelectTrigger className="w-fit min-w-[140px] text-[#4D4D4D] text-[16px] py-0.5 bg-white border border-stone-200 roundedmd">
						<SelectValue placeholder="Last Month" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="last-month">Last Month</SelectItem>
						<SelectItem value="current-month">Current Month</SelectItem>
						<SelectItem value="next-month">Next Month</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
				<Card className="bg-white rounded w-full border-none sm:h-full">
					<CardHeader>
						<CardTitle className="text-md text-[#4D4D4D] font-light">
							Online Orders
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-4xl">{values.orders}</p>
					</CardContent>
				</Card>
				<Card className="bg-white rounded w-full border-none h-[140px] sm:h-full">
					<CardHeader>
						<CardTitle className="text-md text-[#4D4D4D] font-light">
							Amount Received
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-4xl">{values.amount}</p>
					</CardContent>
				</Card>
			</div>
			<h2 className="mt-6 text-[20px]">Transactions | This Month</h2>
		</div>
	);
};

export default Overview;