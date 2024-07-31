/* eslint-disable react/prop-types */

import arrow_down from "../../assets/arrow-down.svg";

const MenuOption = ({ text, down_arrow }) => {
	return (
		<li role="none" className="flex items-stretch">
			<a
				role="menuitem"
				aria-haspopup="false"
				className="flex items-center gap-2 py-4 text-sky-900 duration-300 hover:text-sky-700 focus:text-sky-700 focus:outline-none focus-visible:outline-none lg:px-8"
				href="javascript:void(0)"
			>
				<span>{text}</span>

				{down_arrow && <img src={arrow_down} alt="logo" />}
			</a>
		</li>
	);
};

export default MenuOption;
