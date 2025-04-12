import { Navbar } from './components/Navbar';
import { Dashbord } from './components/Dashbord';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import TailwindTest from './components/TailwindTest'; // if it's default export
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-full min-h-screen bg-white">
            <Navbar />
            <Dashbord />
            <Features />
            <HowItWorks />
            <Description />
            <Footer />
          </div>
        }
      />
      <Route path="/test" element={<TailwindTest />} />
    </Routes>
  );
}
