import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-grain min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProject />
      </main>
      <Footer />
    </div>
  );
}
