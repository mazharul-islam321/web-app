import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/header/Navbar";
import PackageCard from "./components/Package/PackageCard";

function App() {
	return (
		<div className="bg-gradient-to-r from-violet-50 to-white">
			<Navbar />
			<Banner />
			<PackageCard />
		</div>
	);
}

export default App;
