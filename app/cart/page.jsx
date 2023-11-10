'use client'
import { CartContext } from "@/Components/context/CardContex";
import React, { useContext } from "react";

const Cart = () => {
    const { cartItems, setCartItems, removeItemFromCart, clearCart } = useContext(CartContext);
    const handleDecrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    const handleIncrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const handleRemove = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    const calculateSubtotal = () => {
        return cartItems.reduce(
            (total, item) => total + parseInt(item.price) * item.quantity,
            0
        );
    };
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal === 0 ? 0 : subtotal + 4.99; // Adding shipping charge if subtotal is not zero
    };
    const formatCurrency = (value) => {
        const formatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        });
        return formatter.format(value);
    };
    const handleCheckout = () => {
        // Handle checkout logic
    };
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @layer utilities {
              input[type="number"]::-webkit-inner-spin-button,
              input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
          `,
                }}
            />
            <div className="h-100 min-h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {Object.values(cartItems).map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row justify-between mb-6 rounded-lg bg-white p-6 shadow-md"
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-full md:w-40 rounded-lg mb-4 md:mb-0"
                                />
                                <div className="flex flex-col justify-between md:ml-4 md:w-full">
                                    <div className="mb-4 md:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">
                                            {item?.title}
                                        </h2>
                                        <p className="mt-1 text-xs text-gray-700">
                                            {/* {item?.size} */}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <span
                                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                onClick={() => handleDecrement(item?.id)}
                                            >
                                                -
                                            </span>
                                            <input
                                                className="h-8 w-16 md:w-8 border bg-white text-center text-xs outline-none"
                                                type="number"
                                                value={item?.quantity}
                                                min={1}
                                                readOnly
                                            />
                                            <span
                                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                onClick={() => handleIncrement(item?.id)}
                                            >
                                                +
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-sm">
                                                {formatCurrency(parseInt(item?.price))}
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                onClick={() => handleRemove(item?.id)}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sub total */}
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">
                                {formatCurrency(calculateSubtotal())}
                            </p>
                        </div>
                        {calculateSubtotal() > 0 && (
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">₹4.99</p>
                            </div>
                        )}
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">
                                    {formatCurrency(calculateTotal())}
                                </p>
                                <p className="text-sm text-gray-700">including GST</p>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                            onClick={handleCheckout}
                        >
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;