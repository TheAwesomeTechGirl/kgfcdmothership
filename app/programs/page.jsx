import React from "react";
import Homepage3 from "@/components/Homepage3";
import Whatwedo from "@/components/Whatwedo";
import Footer from "@/components/Footer";
import Join from "@/components/Join";

export default function page() {
  return (
    <div className="overflow-hidden.">
      <Homepage3 />
  <Whatwedo/>
      <Join />
      <Footer />
    </div>
  );
}
