import {
	Home,
	ClipboardList,
	LayoutGrid,
	Truck,
	Megaphone,
	BarChartBig,
	MousePointer2,
	BadgePercent,
	UsersRound,
	Palette,
	Zap,
} from "lucide-react";

export const IconData = [
	{
		name: "Home",
		icon: <Home size={20} strokeWidth={1.5} />,
	},
	{
		name: "Orders",
		icon: <ClipboardList size={20} strokeWidth={1.5} />,
	},
	{
		name: "Products",
		icon: <LayoutGrid size={20} strokeWidth={1.5} />,
	},
	{
		name: "Delivery",
		icon: <Truck size={20} strokeWidth={1.5} />,
	},
	{
		name: "Marketing",
		icon: <Megaphone size={20} strokeWidth={1.5} />,
	},
	{
		name: "Analytics",
		icon: <BarChartBig size={20} strokeWidth={1.5} />,
	},
	{
		name: "Payments",
		isActive: true,
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Navbar Icon">
					<path
						id="Vector"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3.75 13.75H1.47727C0.661397 13.75 0 13.1904 0 12.5V3.75C0 3.05964 0.661397 2.5 1.47727 2.5H14.7727C15.5886 2.5 16.25 3.05964 16.25 3.75L16.25 6.25H18.5227C19.3386 6.25 20 6.8796 20 7.65625V16.0938C20 16.8704 19.3386 17.5 18.5227 17.5H5.22727C4.4114 17.5 3.75 16.8704 3.75 16.0938V13.75ZM5 6C4.17157 6 3.5 6.67157 3.5 7.5V12.25H1.5V4H14.75L14.75 6H5ZM11.875 14.375C13.2557 14.375 14.375 13.2557 14.375 11.875C14.375 10.4943 13.2557 9.375 11.875 9.375C10.4943 9.375 9.375 10.4943 9.375 11.875C9.375 13.2557 10.4943 14.375 11.875 14.375Z"
						fill="white"
					/>
				</g>
			</svg>
		),
	},
	{
		name: "Tools",
		icon: <MousePointer2 size={20} strokeWidth={1.5} />,
	},
	{
		name: "Discounts",
		icon: <BadgePercent size={20} strokeWidth={1.5} />,
	},
	{
		name: "Audience",
		icon: <UsersRound size={20} strokeWidth={1.5} />,
	},
	{
		name: "Appearance",
		icon: <Palette size={20} strokeWidth={1.5} />,
	},
	{
		name: "Plugins",
		icon: <Zap size={20} strokeWidth={1.5} />,
	},
];