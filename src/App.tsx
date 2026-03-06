import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { GalleryPage } from './pages/GalleryPage';
import { MomentsPage } from './pages/MomentsPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/moments" element={<MomentsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
