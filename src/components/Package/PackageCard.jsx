import { useEffect, useState } from "react";
import PackCard from "./PackCard";

const PackageCard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://18.210.108.177:4003/api/packagelist"
				);
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	console.log(data);

	return (
		<section className="mt-16 pb-16 mx-6 xl:ml-36">
			<h5 className="text-sky-700 text-2xl font-normal text-center lg:text-start">
				All Your Package
			</h5>
			<h1 className="text-sky-900 font-bold leading-normal tracking-widest text-4xl mt-3 mb-10 text-center lg:text-start">
				Get FDR Package{" "}
			</h1>
			<div className="lg:flex">
				{data.map((item, index) => (
					<PackCard key={item.ID} item={item} index={index} />
				))}
			</div>
		</section>
	);
};

export default PackageCard;
