"use client";
import { useState } from "react";
import CarouselFlowBite from "./component/CarouselFlowBite";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import SideFilter from "./component/SideFilter";
import data from "./data.json";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
  const category = [
    "All",
    "Elektronik",
    "Fotografi",
    "Aksesoris",
    "Perabot",
    "Buku",
    "Pakaian",
    "Sepatu",
    "Makanan & Minuman",
    "Aksesoris",
  ];
  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.kategori_produk === filter);

  return (
    <>
      <div className="px-8 ">
        <Navbar category={category} />
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
            <div className="flex flex-col w-2/3">
              <h2 className="text-2xl mb-4">Rekomendasi Buat Kamu</h2>
              <div className=" rounded-md grid grid-cols-5 gap-2 gap-y-8">
                {filteredData.map((item, index) => (
                  <ProductCard
                    key={index}
                    name={item.nama_produk}
                    category={item.kategori_produk}
                    loc={item.lokasi}
                    total={item.total_terjual}
                  />
                ))}
              </div>
            </div>
            <SideFilter
              filter={filter}
              category={category}
              onClick={changeFilter}
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
