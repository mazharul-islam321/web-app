/* eslint-disable react/prop-types */

import MenuOption from "./MenuOption";

const Menu = ({ isToggleOpen }) => {
	return (
		<ul
			role="menubar"
			aria-label="Select page"
			className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
				isToggleOpen
					? "visible opacity-100 backdrop-blur-sm"
					: "invisible opacity-0"
			}`}
		>
			<MenuOption text="Customers" down_arrow />
			<MenuOption text="Products" down_arrow />
			<MenuOption text="How It's Work" />
			<MenuOption text="About" />
			<MenuOption text="News Letter" />
		</ul>
	);
};

export default Menu;
