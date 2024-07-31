/* eslint-disable react/prop-types */

const PairText = ({ left_text, right_text }) => {
	return (
		<div className="flex items-center mb-3">
			<p className="font-bold text-lg text-gray-950">{left_text} : </p>
			<p className="font-bold text-lg text-gray-500"> {right_text}</p>
		</div>
	);
};

export default PairText;
