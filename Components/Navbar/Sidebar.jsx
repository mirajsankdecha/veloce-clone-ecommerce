import Link from "next/link";

const Sidebar = ({ isOpen, onClose }) => {
  const navigationsLinks = [
    { name: "Home", link: "/" },
    { name: "Collection", link: "/collection" },
    { name: "Cart", link: "/cart" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact us", link: "/contactus" },
    { name: "Logout", link: "/" },
  ];
  return (
    <div className={`fixed h-screen top-0 left-0 z-50 bg-white w-64 px-4 py-8 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-end mb-4">
        <button className="text-black hover:text-gray-800" onClick={onClose}>
          <svg width="45" height="45" viewBox="0 0 48 48" className="text-black" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fillOpacity="0.01" />
            <path d="M14 14L34 34" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 34L34 14" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <ul className="space-y-5 px-2">
        {navigationsLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.link} className="text-gray-700 hover:text-blue-800 font-semibold" onClick={onClose}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>)
};

export default Sidebar;