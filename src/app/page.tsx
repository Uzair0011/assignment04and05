import Image from "next/image";
import Blog from "./Components/Blog/page";
import Footer from "./Components/footer";
import Hero from "./Components/hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Blog />
      <Footer />
    </div>
  );
}
