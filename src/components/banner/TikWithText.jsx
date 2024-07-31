/* eslint-disable react/prop-types */
import tik from "../../assets/tik.svg";

const TikWithText = ({ tikText }) => {
	return (
		<div className="flex items-center mr-3 ">
			<img className="mr-2 w-6" src={tik} alt="tik" />
			<p className="text-lg">{tikText}</p>
		</div>
	);
};

export default TikWithText;
