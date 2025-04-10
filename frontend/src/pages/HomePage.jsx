import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-700 text-white">
			{/* 🚀 Hero Section */}
			<div className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/futuristic-bg.jpg')" }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
				<div className="relative z-10 text-center px-6">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 neon-glow">
						Step into the Future of Fashion
					</h1>
					<p className="text-xl text-blue-200 mt-4 tracking-wide">
						Experience the fusion of style and technology.
					</p>
				</div>
			</div>

			{/* 🟢 Categories Section */}
			<section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16">
				<h2 className="text-center text-4xl font-bold text-cyan-300 neon-glow mb-6">
					Shop by Category
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{categories.map((category) => (
						<div
							key={category.name}
							className="group relative overflow-hidden rounded-2xl shadow-xl bg-opacity-30 backdrop-blur-lg p-6 transition-all transform hover:scale-105 neon-border"
						>
							<img
								src={category.imageUrl}
								alt={category.name}
								className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-all duration-300"
							/>
							<h3 className="text-lg font-bold text-white mt-4 text-center tracking-wider">
								{category.name}
							</h3>
							<a href={`category${category.href}`} className="absolute inset-0"></a>
						</div>
					))}
				</div>
			</section>

			{/* 🔵 Featured Products */}
			{!isLoading && products.length > 0 && (
				<section className="max-w-7xl mx-auto px-6 py-10">
					<h2 className="text-center text-4xl font-bold text-cyan-300 neon-glow mb-6">
						Featured Products
					</h2>
					<FeaturedProducts featuredProducts={products} />
				</section>
			)}
		</div>
	);
};

export default HomePage;
