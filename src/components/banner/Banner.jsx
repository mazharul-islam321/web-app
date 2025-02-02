import TikWithText from "./TikWithText";

import banner from "../../assets/banner.png";

const Banner = () => {
	return (
		<section className=" lg:flex lg:items-center mx-6 xl:ml-36 xl:mr-10 ">
			<div>
				<h1 className="text-4xl xl:w-2/3  text-sky-900 font-bold leading-normal tracking-widest">
					Your money is in your piggy bank. Invest, withdraw and
					higher yields cash anytime.
				</h1>

				<div className="md:flex items-center my-7">
					<TikWithText tikText="Lowest Free" />
					<TikWithText tikText="Save in digital currency " />
					<TikWithText tikText="Cash Out Anytime" />
					<TikWithText tikText="Higher Yields" />
				</div>

				<input
					type="text"
					placeholder="Enter your e-mail"
					className="input mb-4 w-full md:w-2/5  h-16 border input-bordered ring-gray-950 mr-6 pl-6"
				/>

				<button className="inline-flex items-center justify-center w-full md:w-64 h-16 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300  focus-visible:outline-none whitespace-nowrap bg-sky-600  disabled:cursor-not-allowed">
					<span>Get Early News</span>
				</button>
			</div>

			<img
				src={banner}
				className="mx-auto mt-4 w-1/2 lg:w-1/3"
				alt="banner image"
			/>
		</section>
	);
};

export default Banner;
