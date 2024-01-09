import DropDown from "@/assets/svgs/dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle } from "lucide-react";
import { MobileMenu } from "@/components/main/menu/mobilemenu";
const Header = () => {
	return (
		<div className="p-3 flex flex-row justify-between items-center bg-white border-b border-b-stone-200">
			<div className="flex flex-row items-center gap-3">
				<p>Payments</p>
				<div className="flex flex-row items-center gap-1">
					<HelpCircle size="14px" className="text-muted-foreground" />
					<p className="text-muted-foreground text-xs">How it works</p>
				</div>
			</div>
			<Input
				className="rounded-lg border-none mx-1 w-full md:w-[400px] bg-stone-100"
				placeholder="Search features, tutorials, etc."
			/>
			<div className="flex gap-2">
				<Button variant="outline" size="icon">
					<img src="src/assets/svgs/notification.svg" alt="notification" />
				</Button>
				<Button variant="outline" size="icon">
					<DropDown height={20} width={20} />
				</Button>
			</div>
			<div className="md:hidden">
				<MobileMenu />
			</div>
		</div>
	);
};

export default Header;