import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="md:flex fixed w-full items-center justify-between px-6 h-6 bg-gray text-gray-700 border-b border-gray-200 z-10 shadow-lg">
      <div className="max-w-6xl">
        <div className="py-2 bg-opacity-75 md:bg-opacity-50 flex justify-center lg:justify-start">
          <button className="cursor-pointer flex items-center focus:outline-none focus:bg-white p-4 mb-10">
            <FaBars />
          </button>
          <div className="text-xl text-indigo-800 tracking-wide font-semibold px-3 mt-2.5">
            SOLDOUT
          </div>
        </div>
      </div>
    </nav>
  );
}
