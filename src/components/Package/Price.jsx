/* eslint-disable react/prop-types */

const Price = ({ leftPrice, rightPrice }) => {
	return (
		<p className="font-bold text-4xl text-gray-950 mb-6">
			${leftPrice} To ${rightPrice}{" "}
		</p>
	);
};

export default Price;
