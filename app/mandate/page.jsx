import React from "react";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Aboutus from "@/components/Aboutus";
import Homepage from "@/components/Homepage";

export default function pagetwo() {
  return (
    <div className="overflow-hidden">
      <Homepage />
      <Aboutus />
      <Team />
      <Partners />
      <Join />
      <Footer />
    </div>
  );
}
