import Link from "next/link";

const Footer = () => {
    const socialIconSize = "27px";
    const navigationsLinks = [
        { name: "Policies", link: "/policies" },
        { name: "Returns & Exchanges", link: "/return" },
        { name: "Shipping Policy", link: "/policies" },
        { name: "About us", link: "/about" },
        { name: "Contact us", link: "/contactus" },
    ]
    return (
        <>
            <nav className="bg-[#EDEDED] flex flex-col sticky top-[100%] border-t-2">
                <div className=" gap-5 xl:gap-10 m-auto py-10 text-center text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-flow-col">
                    {
                        navigationsLinks.map((link, index) => {
                            return (
                                <Link key={index} href={link.link} className="cursor-pointer underline-offset-1 hover:underline">
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="w-full border-y-2 border-[#bebebe] flex">
                    <div className="flex gap-7 m-auto py-7">
                        {/* ICONS : Facebook, Instagram, Linkedin, Twitter */}
                        <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 50 50">
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                        <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 30 30">
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                        <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </div>
                </div>
                <div className="m-auto py-5 text-gray-500">
                    © 2023 V8Wardrobe™
                </div>
            </nav>
        </>
    )
}

export default Footer;