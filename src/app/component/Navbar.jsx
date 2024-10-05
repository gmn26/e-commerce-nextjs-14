import Link from "next/link";
import CategoryListButton from "./CategoryListButton";

function Navbar({ category }) {
  return (
    <nav className="py-6 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">E-Commerce</span>
        <div className="flex gap-4">
          <div className="flex border border-green-700 rounded-xl overflow-hidden">
            <input type="text" className="px-2 focus:outline-none" />
            <button className="bg-green-700 px-4 text-xl text-white">
              Cari
            </button>
          </div>
          <Link
            className="bg-green-700 text-white px-4 py-2 rounded-xl"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-white border border-green-700 text-green-700 px-4 py-2 rounded-xl"
            href={"/register"}
          >
            Register
          </Link>
        </div>
      </div>
      <div>
        <CategoryListButton category={category} />
      </div>
    </nav>
  );
}

export default Navbar;
