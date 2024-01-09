import { IconData } from "@/components/main/menu/icondata";
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
	const credits = 222.1;

	return (
		<Sheet >
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-1 p-2 bg-[#1e2640] text-white hover:bg-[#353C53] hover:text-white"><Menu /></Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="bg-[#1E2640] w-[224px] p-2 h-screen border-none">
				<SheetHeader>
					<SheetTitle className="text-white">
						<div className="flex flex-row justify-between items-center w-full mt-8">
							<div className="flex flex-row gap-3">
								<img
									src="svgs/nishyan-logo.png"
									alt="Nishyan Logo"
									width={"40px"}
									height={"40px"}
									className="rounded"
								/>
								<div className="flex flex-col justify-start items-start gap-1">
									<p className="text-white text-sm font-bold">Nishyan</p>
									<a href="#" className="underline text-xs text-white/80">
										Visit Store
									</a>
								</div>
							</div>
							<ChevronDown className="text-white mr-2" size={20} strokeWidth={1.5} />
						</div></SheetTitle>
					<SheetDescription>
						<div className="w-full">

							<ul className="w-full mt-5">
								{IconData.map((element, index) => {
									return (
										<li key={index} className="my-2">
											<a href="#">
												<Button
													variant={"ghost"}
													size="sm"
													className={`flex flex-row justify-start text-white items-center gap-3 w-full hover:bg-[#353C53] hover:text-white ${element.isActive ? "bg-[#353C53]" : ""
														}`}
												>
													{element.icon}
													<p>{element.name}</p>
												</Button>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<div className="bg-[#353C53] w-[180px] m-3 flex flex-row justify-center items-center gap-4 w-full px-1 py-2 rounded">
						<Button
							variant={"ghost"}
							className="bg-black/10 hover:bg-black/30"
							size={"icon"}
						>
							<img src="svgs/wallet.svg" alt="wallet" />
						</Button>
						<div className="flex flex-col">
							<p className="text-white text-xs">Available Credits</p>
							<p className="text-white">{credits}</p>
						</div>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
