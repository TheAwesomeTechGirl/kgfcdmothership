import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Homepage from "@/components/Homepage";


export default function Home() {
  return (
    <div className="overflow-hidden" >
     <Homepage/>
      <Team/>
     <Partners/>
      <Join/>
       <Footer/>
       
    </div>
  );
}
