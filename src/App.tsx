import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Moments } from './components/Moments';
import { Footer } from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Moments />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
