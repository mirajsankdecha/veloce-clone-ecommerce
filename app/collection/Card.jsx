'use client'
import { useContext, useState } from "react";
import { CartContext } from "@/Components/context/CardContex";
import Image from "next/image";
import Link from "next/link";
const Card = ({ data }) => {
    const [likedItems, setLikedItems] = useState([]);
    const handleLike = (itemId) => {
        if (likedItems.includes(itemId)) {
            setLikedItems(likedItems.filter((id) => id !== itemId));
        } else {
            setLikedItems([...likedItems, itemId]);
        }
    };
    //const [cartItems, setCartItems] = useState([]);
    const { cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart, setCartItems } = useContext(CartContext);
    /*  const addItemToCart = (product) => {
       setCartItems([...cartItems, product]);
     }; */
    return (
        <>
            {data.map((item) => {
                const { id, title, price, imgSrc, stock, rating } = item;
                const isLiked = likedItems.includes(id);
                const stockStyle = {
                    backgroundColor: stock === "Out of Stock" ? "#C6011F" : "bg-green-400",
                };
                const showAddToCartButton = stock === "Available";
                return (
                    <div
                        key={id}
                        className="relative flex flex-col items-center justify-center"
                    >
                        <div className="container px-4 h-full">
                            <div className="w-full h-full m-auto md:w-72 bg-gray-900 shadow-lg rounded-xl p-6">
                                <div className="flex flex-col h-full">
                                    <div className="relative h-62 w-full mb-3">
                                        <div className="absolute flex flex-col top-0 right-0 p-1 md:p-3">
                                            <button
                                                className={`transition ease-in duration-100 bg-gray-800 hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1 ${isLiked ? "text-red-500" : ""
                                                    }`}
                                                onClick={() => handleLike(id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <Link href={`/${title}`}>
                                            <Image
                                                src={imgSrc}
                                                alt={title}
                                                className="w-full object-fill rounded-2xl"
                                                height={100} width={100}
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex-auto justify-evenly mt-auto">
                                        <div className="flex flex-wrap">
                                            <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-yellow-500 mr-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="text-gray-400 whitespace-nowrap mr-3">
                                                    {rating}
                                                </span>
                                                <div
                                                    className="flex items-center md:px-2 md:py-2 md:h-5 md:!text-sm ms-1 w-fit h-4 bg-green-400 text-black font-bold px-1 ml-auto rounded-lg"
                                                    style={{ fontSize: "8px", ...stockStyle }}
                                                >
                                                    {stock}
                                                </div>
                                            </div>
                                            <div className="flex items-center w-full justify-between min-w-0 mt-2">
                                                <h2 className="text-lg mr-auto h-14 cursor-pointer text-gray-200 hover:text-purple-500 overflow-clip text-ellipsis ">
                                                    <Link href={`/collection/${title}`}>
                                                        <div>
                                                            {title.length > 45
                                                                ? title.substring(0, title.indexOf(" ", 45)) +
                                                                "..."
                                                                : title}
                                                        </div>
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="text-xl text-white font-semibold mt-2 flex flex-col sm:flex-row justify-between items-center">
                                            <div className="h-fit">₹{price}</div>
                                            {showAddToCartButton && (
                                                <button
                                                    className="transition ease-in duration-300 inline-flex items-center text-sm font-medium bg-purple-500 px-6 py-1 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 mt-1"
                                                    onClick={() => addItemToCart(item)}
                                                >
                                                    <span>Add to Cart</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Card;