
// import './App.css';

import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout";
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

    </Route>
  )
);

function App() {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <div className="container mx-auto px-12 py-4"> 
      <Header/>
        <HeroSection/>
      <Footer/>
      </div>
     
    </main>
  );
}

export default App;
