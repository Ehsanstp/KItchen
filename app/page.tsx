import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/AllUi";
import { FaHouseDamage, FaLightbulb } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import Appetizers from "@/components/Appetizers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-12 overflow-clip">
      <div className="max-w-7xl">
        <FloatingNav navItems={[
          {
            name: 'Home',
            link: '/',
            icon: <FaHouseDamage />
          },
          {
            name: 'Menu',
            link: '#about',
            icon: <IoFastFood />
          },
          {
            name: 'Projects',
            link: '#projects',
            icon: <FaLightbulb />
          }
        ]} />
        <Hero />
        <Grid />
        <Appetizers />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}