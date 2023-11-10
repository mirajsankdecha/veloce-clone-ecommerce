'use client'
import Navbar from "@/Components/Navbar";
import Card from "./Card";
// import cardData from './card.json'
import { useState } from "react";
const page = () => {
    const [card, setCard] = useState(cardData);
    return (
        <>
            <div className="container">
                <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4">
                    <Card data={card} />
                </div>
            </div>
        </>
    )
}

export default page;