import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

function ProductCard({ name, category, loc, total }) {
  return (
    <div className="border rounded-md w-full overflow-hidden">
      {/* gambar */}
      <div className="relative h-24">
        <Image
          src={"https://placehold.co/600x400/png"}
          alt="Foto Produk"
          fill={true}
        />
      </div>
      {/* description */}
      <div className="mx-2">
        <h3 className="text-lg font-semibold my-2">{name}</h3>
        <hr />
        <p>{category}</p>
        <p className="flex items-center gap-2 text-sm">
          <FaLocationDot /> {loc}
        </p>
        <p className="flex items-center gap-2 text-sm">
          <IoStar /> 5.0 | {total} terjual
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
