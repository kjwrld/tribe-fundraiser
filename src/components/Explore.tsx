import Hero from "../imports/Hero";
import Families from "../imports/Families";
import Educators from "../imports/Educators";
import Certifications from "../imports/Certifications";
import ResponsiveRoadmap from "./ResponsiveRoadmap";
import Footer from "../imports/Footer-38-272";

export function Explore() {
  return (
    <div className="w-full overflow-x-hidden relative" style={{ backgroundColor: '#1E002B' }}>
      {/* Hero Section */}
      <main className="w-full relative z-20">
        <Hero />
      </main>
        
      {/* Families Section */}
      <section className="w-full relative z-10 mt-28 sm:mt-32 lg:mt-28 max-w-6xl mx-auto px-4 lg:px-8">
        <Families />
      </section>

      {/* Educators Section */}
      <section className="w-full relative z-10 mt-20 sm:mt-24 lg:mt-20 max-w-6xl mx-auto px-4 lg:px-8">
        <Educators />
      </section>

      {/* Certifications Section */}
      <section className="w-full relative z-10 mt-8 sm:mt-12 lg:mt-8 max-w-6xl mx-auto px-4 lg:px-8">
        <Certifications />
      </section>

      {/* Roadmap Section */}
      <section className="w-full relative z-10 mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto px-4 lg:px-8">
        <ResponsiveRoadmap />
      </section>

      {/* Footer Section */}
      <footer className="w-full relative z-10 mt-16 sm:mt-20 lg:mt-24">
        <Footer />
      </footer>
    </div>
  );
}