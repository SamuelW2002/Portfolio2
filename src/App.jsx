import { BrowserRouter } from "react-router-dom";

import {Experience, Feedbacks, Hero, Navbar, Works, ServiceCardGrid } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-hero-pattern bg-cover bg-center'>
        <Navbar />
        <Hero />
        <ServiceCardGrid/>
        <Experience />
        <Works />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App;
