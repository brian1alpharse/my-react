import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Slider } from "../../Components/Atoms";
import { ProductSection, PromoSection } from "../../Components/Molecules";
import useCustomHook from "../../Hooks/customHook";

export default function Home() {
  let navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const { value, handleChange } = useCustomHook(10);

  const clickMoreTerlaris = () => {
    navigate("/");
  };

  const clickMoreFavorit = () => {
    navigate("/");
  };

  return (
    <div className="px-[10%] pb-20 w-full min-h-screen">
      <div className="pt-20"></div>
      <Slider />

      <ProductSection
        titleSection="Produk Terbaru"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreTerlaris()}
      />
      <PromoSection
        titleSection="Promo Terbatas"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreFavorit()}
      />
    </div>
  );
}
