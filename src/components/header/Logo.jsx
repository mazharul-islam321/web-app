import logo from "../../assets/logo.png";

const Logo = () => {
	return (
		<a
			id="WindUI"
			aria-label="WindUI logo"
			aria-current="page"
			className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
			href="javascript:void(0)"
		>
			<img
				className="max-w-[100px] md:max-w-[165px]"
				src={logo}
				alt="logo"
			/>
		</a>
	);
};

export default Logo;
