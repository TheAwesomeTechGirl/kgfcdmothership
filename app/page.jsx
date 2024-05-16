import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Partners from "@/components/Partners";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="overflow-hidden" >
      <Team/>
     <Partners/>
      <Join/>
       <Footer/>
       
    </main>
  );
}
