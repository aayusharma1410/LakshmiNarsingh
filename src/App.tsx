import { useState } from 'react'; // Removed default 'React' import
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import LiveAarti from './components/LiveAarti';
import Timings from './components/Timings';
import Footer from './components/Footer';
import Aarti from './components/Aarti';
import BhogAarti from './components/BhogAarti';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />;
      case 'liveAarti':
        return <LiveAarti />;
      case 'timings':
        return <Timings />;
      case 'aarti':
        return <Aarti />;
      case 'bhogAarti':
        return <BhogAarti />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
