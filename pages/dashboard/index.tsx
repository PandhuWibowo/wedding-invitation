import Navbar from "../../components/dashboard/Navbar";
import MetaHeader from "../../components/MetaHeader";
import Link from "next/link";
import {
  FaTh,
  FaUsers,
  FaMoneyBillWaveAlt,
  FaRegCommentAlt,
} from "react-icons/fa";

export default function Index() {
  return (
    <MetaHeader title="Dashboard">
      <Navbar />

      {/* Mobile Menu Bar */}
      <div className="bg-gray-200 text-black w-60"></div>

      {/* Side Bar */}
      <div className="bg-gray-200 text-black w-60 space-y-6 py-20 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
        <nav>
          <Link href="dashboard">
            <a className="block py-2.5 px-4 rounded transition hover:bg-white hover:text-indigo-800 text-left font-semibold cursor-pointer">
              <span className="flex items-center space-x-4">
                <FaTh />
                <label className="cursor-pointer">Dashboard</label>
              </span>
            </a>
          </Link>
          <Link href="dashboard">
            <a className="block py-2.5 px-4 rounded transition hover:bg-white hover:text-indigo-800 text-left font-semibold cursor-pointer">
              <span className="flex items-center space-x-4">
                <FaUsers />
                <label className="cursor-pointer">Users</label>
              </span>
            </a>
          </Link>
          <Link href="dashboard">
            <a className="block py-2.5 px-4 rounded transition hover:bg-white hover:text-indigo-800 text-left font-semibold cursor-pointer">
              <span className="flex items-center space-x-4">
                <FaMoneyBillWaveAlt />
                <label className="cursor-pointer">Payments</label>
              </span>
            </a>
          </Link>
          <Link href="dashboard">
            <a className="block py-2.5 px-4 rounded transition hover:bg-white hover:text-indigo-800 text-left font-semibold cursor-pointer">
              <span className="flex items-center space-x-4">
                <FaRegCommentAlt />
                <label className="cursor-pointer">Comments</label>
              </span>
            </a>
          </Link>
        </nav>
      </div>
      <div className="p-16 mt-10 text-2xl font-bold">
        <h1>Dashboard</h1>
      </div>
    </MetaHeader>
  );
}
