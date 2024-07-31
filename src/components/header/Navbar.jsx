import { useState } from "react";
import Logo from "./Logo";
import MobileTriggerButton from "./MobileTriggerButton";
import Menu from "./Menu";

import log_in from "../../assets/log-in.svg";

const Navbar = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	return (
		<div className="mx-36">
			<header className="border-b-1 relative z-20 w-full border-b border-slate-200  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
						role="navigation"
					>
						<Logo />

						<MobileTriggerButton
							isToggleOpen={isToggleOpen}
							setIsToggleOpen={setIsToggleOpen}
						/>

						<Menu isToggleOpen={isToggleOpen} />

						<div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
							<a
								href="#"
								className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-sky-700"
							>
								<img className="mr-4" src={log_in} alt="logo" />
								<span>LOGIN</span>
							</a>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
