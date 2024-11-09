import { BrowserRouter } from "react-router-dom";

import {Experience, Feedbacks, Hero, Projects, ServiceCardGrid } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-hero-pattern bg-cover bg-center overflow-x-hidden'>
        <Hero />
        <ServiceCardGrid/>
        <Experience />
        <Projects />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App;
