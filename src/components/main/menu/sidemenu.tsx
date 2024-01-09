import { Button } from "@/components/ui/button";
import { IconData } from "@/components/main/menu/icondata";
import { ChevronDown } from "lucide-react";

const SideMenu = () => {
	const credits = 222.1;
	return (
		<nav className="sticky top-0 hidden bg-[#1E2640] w-[224px] h-screen md:flex flex-col justify-between items-center align-middle p-3">
			<div className="w-full">
				<div className="flex flex-row justify-between items-center w-full">
					<div className="flex flex-row gap-3">
						<img
							src="src/assets/svgs/nishyan-logo.png"
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
					<ChevronDown className="text-white" size={20} strokeWidth={1.5} />
				</div>
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
			<div className="bg-[#353C53] flex flex-row justify-center items-center gap-4 w-full px-1 py-2 rounded">
				<Button
					variant={"ghost"}
					className="bg-black/10 hover:bg-black/30"
					size={"icon"}
				>
					<img src="/src/assets/svgs/wallet.svg" alt="wallet" />
				</Button>
				<div className="flex flex-col">
					<p className="text-white text-xs">Available Credits</p>
					<p className="text-white">{credits}</p>
				</div>
			</div>
		</nav>
	);
};

export default SideMenu;