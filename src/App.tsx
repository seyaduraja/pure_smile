import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AppointmentPage = React.lazy(() => import("./pages/Appointment"));



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = '/Appointment' element = {<AppointmentPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
