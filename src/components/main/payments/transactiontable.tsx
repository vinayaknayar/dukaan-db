import { useState, useEffect } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button"
import DropDown from '@/assets/svgs/dropdown';

interface TransactionData {
	ID: string;
	Date: string;
	Amount1: string;
	Amount2: string;
}

const TableOperations = () => {
	return (
		<div className="my-3 mx-1 flex flex-row justify-between items-center"><div className="relative">
			<img src="src/assets/svgs/searchicon.svg" alt="search" className="absolute top-3 left-3" />

			<input type="text" className="text-[#808080] h-10 w-full border border-input bg-background pl-9 pr-3 ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[14px] rounded-sm" placeholder="Search by Order ID..." /></div>
			<div className="flex flex-row ml-2 gap-1 justify-center text-[#808080] sm:gap-3">
				<Button variant={'outline'}>Sort &nbsp;
					<img src="src/assets/svgs/sort.svg" alt="sort" width="20px" height="20px" />
				</Button>
				<Button variant={'outline'}>
					<img src="src/assets/svgs/download.png" alt="download" width="20px" height="20px" />
				</Button>
			</div>
		</div>
	);
}
const TablePaginator = () => {
	return (
		<>
			<Pagination className="mt-5 flex flex-wrap justify-center items-center collapse sm:visible">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" className="border" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink
							href="#"
							isActive
							className="bg-[#146EB4] hover:bg-[#10558b] hover:text-white text-white"
							size={"icon"}
						>
							10
						</PaginationLink>
					</PaginationItem>
					{
						[11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => {
							return (
								<PaginationItem key={index}>
									<PaginationLink href="#">{item}</PaginationLink>
								</PaginationItem>
							)
						})
					}
					<PaginationItem>
						<PaginationNext href="#" className="border" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			{/* Mobile Pagination */}
			<Pagination className="mt-5 flex flex-wrap justify-center items-center sm:collapse">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" className="border" />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink
							href="#"
							isActive
							className="bg-[#146EB4] hover:bg-[#10558b] hover:text-white text-white"
							size={"icon"}
						>
							10
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" className="border" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
}

const TransactionTable = () => {
	const [data, setData] = useState<TransactionData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("src/assets/data.json");
				const jsonData: TransactionData[] = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="payment-table min-w-[300px] p-2 mx-6 rounded bg-white">
			<TableOperations />
			<Table>
				<TableHeader>
					<TableRow className="bg-stone-100 text-gray-600">
						<TableHead>Order ID</TableHead>
						<TableHead>
							Order Date
							<DropDown />
						</TableHead>
						<TableHead className="text-center">Order Amount</TableHead>
						<TableHead className="text-right">
							Transaction fees
							<img src="src/assets/svgs/info.svg" alt="info" className="inline-block ml-2" />
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((row: TransactionData, index: number) => (
						<TableRow key={index}>
							<TableCell className="font-medium text-blue-700">{row.ID}</TableCell>
							<TableCell>{row.Date}</TableCell>
							<TableCell className="text-center">{row.Amount1}</TableCell>
							<TableCell className="text-right">{row.Amount2}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePaginator />
		</div>
	);
};

export default TransactionTable;
