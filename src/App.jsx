import { BrowserRouter } from "react-router-dom";

import {Experience, Feedbacks, Hero, Navbar, Works, ServiceCardGrid } from "./components";
import OtherAchievements from "./components/OtherAchievements";

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
        <OtherAchievements/>
      </div>
    </BrowserRouter>
  );
}

export default App;
