/* eslint-disable react/prop-types */

const PackageButton = ({ btnText, index }) => {
	return (
		<button
			className={`inline-flex items-center justify-center my-8 w-60 h-14 px-6 text-sm font-medium tracking-wide text-white transition duration-300  focus-visible:outline-none whitespace-nowrap bg-sky-900 ${
				index === 1 && "bg-sky-700"
			} ${
				index === 2 && "bg-gradient-to-r from-stone-800 to-sky-900"
			}  disabled:cursor-not-allowed rounded-3xl`}
		>
			{btnText}
		</button>
	);
};

export default PackageButton;
