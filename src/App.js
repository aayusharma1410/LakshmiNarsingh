import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
                return _jsx(Home, { setCurrentPage: setCurrentPage });
            case 'about':
                return _jsx(About, {});
            case 'contact':
                return _jsx(Contact, {});
            case 'gallery':
                return _jsx(Gallery, {});
            case 'liveAarti':
                return _jsx(LiveAarti, {});
            case 'timings':
                return _jsx(Timings, {});
            case 'aarti':
                return _jsx(Aarti, {});
            case 'bhogAarti':
                return _jsx(BhogAarti, {});
            default:
                return _jsx(Home, { setCurrentPage: setCurrentPage });
        }
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-orange-50", children: [_jsx(Header, { setCurrentPage: setCurrentPage }), _jsx("main", { className: "flex-grow", children: renderPage() }), _jsx(Footer, {})] }));
}
export default App;
