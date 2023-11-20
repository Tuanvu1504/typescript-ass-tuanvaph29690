import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

type Product = {
    title: string;
    image: string;
    price: number;
    category: string;
};

const HomePage = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const { data } = await axios.get(
            "https://fakestoreapi.com/products?limit=10"
        );
        setProductList(data);

        try {
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setProductList(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Header />

            <div className="flex flex-wrap gap-12 mt-16 ">
                <Header />
                <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Fashion is
                                <span className="text-5xl sm:text-7xl">
                                    my life
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Dimension of reality that makes change possible
                                and understandable. An indefinite and
                                homogeneous environment in which natural events
                                and human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <a
                                    href="#"
                                    className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img
                                src="https://www.tailwind-kit.com/images/object/10.png"
                                className="max-w-xs md:max-w-sm m-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="dark:bg-gray-800 mt-10 flex flex-wrap gap-2">
                    {productList.map((product, index) => (
                        <div
                            key={index}
                            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <a href="#">
                                <img
                                    src={product.image}
                                    alt="Product"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">
                                        {product.category}
                                    </span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">
                                        {product.title}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                                            {product.price}
                                        </p>
                                        <del>
                                            <p className="text-sm text-gray-600 cursor-auto ml-2">
                                                $199
                                            </p>
                                        </del>
                                        <div className="ml-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-bag-plus"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                                />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
