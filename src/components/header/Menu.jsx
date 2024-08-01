/* eslint-disable react/prop-types */

import MenuOption from "./MenuOption";

const Menu = ({ isToggleOpen }) => {
	return (
		<ul
			role="menubar"
			aria-label="Select page"
			className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 xl:visible xl:relative xl:top-0  xl:z-0 xl:flex xl:h-full xl:w-auto xl:items-stretch xl:overflow-visible xl:bg-white/0 xl:px-0 xl:py-0  xl:pt-0 xl:opacity-100 ${
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
