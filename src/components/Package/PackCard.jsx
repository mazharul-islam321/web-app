/* eslint-disable react/prop-types */
import PackageButton from "./PackageButton";
import PairText from "./PairText";
import Price from "./Price";
import classic from "../../assets/classic.png";
import gold from "../../assets/gold.png";
import platinum from "../../assets/platinum.png";
import long_arrow from "../../assets/long-arrow.svg";

const PackCard = ({ item, index }) => {
	return (
		<div className="w-3/5 lg:w-2/5 h-[800px] mt-7 lg:mr-7 bg-white rounded-2xl truncate drop-shadow-xl flex flex-col items-center ">
			<div
				className={`flex justify-center items-center ${
					index === 1 && "bg-sky-700"
				}  ${
					index === 2 && "bg-gradient-to-r from-stone-800 to-sky-900"
				} bg-sky-900 w-full h-[367px] rounded-b-[200px]`}
			>
				{index === 0 && <img src={classic} alt="classic" />}
				{index === 1 && <img src={gold} alt="gold" />}
				{index === 2 && <img src={platinum} alt="platinum" />}
			</div>

			<PackageButton btnText={item.Name} index={index} />

			<Price
				leftPrice={item.PriceStart}
				rightPrice={item.PriceEnd === 0 ? "above" : item.PriceEnd}
			/>

			<PairText left_text="Profit" right_text="4% to 7%  monthly" />
			<PairText left_text="Maturity" right_text="1 year or 2 years" />
			<PairText left_text="Bonus" right_text={`${item.Bonus} tokens`} />
			<PairText
				left_text="Maturity bonus"
				right_text={`${item.MaturityBonus}% after maturity`}
			/>

			<button className="inline-flex items-center justify-center my-8 w-48 h-12 px-6 gap-3 text-sm font-medium tracking-wide text-white transition duration-300  focus-visible:outline-none whitespace-nowrap bg-sky-600  disabled:cursor-not-allowed rounded">
				Select
				<img src={long_arrow} alt="long arrow" />
			</button>
		</div>
	);
};

export default PackCard;
