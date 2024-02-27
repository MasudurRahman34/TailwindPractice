
// import './App.css';

import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <div className="container mx-auto px-12 py-4">
        <Navbar/>
        <HeroSection/>
      </div>
     
    </main>
  );
}

export default App;
