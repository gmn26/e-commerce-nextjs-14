import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

function ProductCard({ disc }) {
  return (
    <div className="border rounded-md w-full overflow-hidden">
      {/* gambar */}
      <div className="relative h-24">
        <Image
          src={"https://placehold.co/600x400/png"}
          alt="Foto Produk"
          fill={true}
        />
        {/* tag harga */}
        {disc ?? (
          <span className="absolute right-1 top-2 text-white bg-red-700 w-8 aspect-square rounded-full flex items-center justify-center text-sm">
            20%
          </span>
        )}
      </div>
      {/* description */}
      <div className="mx-2">
        <h3 className="text-xl font-semibold my-2">Nama Produk</h3>
        <hr />
        <p>Rp. 1.000.000,-</p>
        <p className="flex items-center gap-2 text-sm">
          <FaLocationDot /> Lokasi
        </p>
        <p className="flex items-center gap-2 text-sm">
          <IoStar /> 5.0 | 1rb+ terjual
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
