import React from "react";
import Header from "@/components/Header";
import Mandates from "./Mandates";
import Aboutus from "@/components/Aboutus";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[113px] fixed top-0 z-50 flex items-center justify-center">
        <Header />
      </div>
      <Mandates />
      <Aboutus />
      <Team />
      <Partners />
      <Join />
      <Footer />
    </section>
  );
}
