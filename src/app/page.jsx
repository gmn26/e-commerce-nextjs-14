import CarouselFlowBite from "./component/CarouselFlowBite";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import SideFilter from "./component/SideFilter";

export default function Home() {
  return (
    <div className="px-8 ">
      <Navbar />
      <main>
        <section className="my-8">
          <CarouselFlowBite />
        </section>
        <section className="my-8">
          <h2 className="text-2xl mb-4">Lagi Diskon!!!</h2>
          <div className="grid grid-cols-6 gap-6 justify-items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="flex gap-4 my-8">
          <div className="flex flex-col grow">
            <h2 className="text-2xl mb-4">Rekomendasi Buat Kamu</h2>
            <div className=" rounded-md grid grid-cols-5 gap-2 gap-y-8">
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
              <ProductCard disc={false} />
            </div>
          </div>
          <SideFilter />
        </section>
      </main>
    </div>
  );
}
