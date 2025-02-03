import React from "react";
import BaseTemplate from "./pages/BaseTemplate";
import Template1 from "./pages/Template1";
import Template2 from "./pages/Template2";
import { Routes, Route } from "react-router-dom";
import Template3 from "./pages/Template3";
import Template4 from "./pages/Template4";
import Template5 from "./pages/Template5";
import { Authprovider } from "./store/auth.jsx";
import { useParams } from 'react-router-dom';

const AppWrapper = () => {
  const { tempname } = useParams(); // ✅ Get tempname from URL
  return <Authprovider tempname={tempname}> <BaseTemplate /> </Authprovider>;
};

const App = () => {
  
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/:tempname?" element={<AppWrapper />} />
        <Route path="/base-template-1" element={<Template1 />} />
        <Route path="/base-template-2" element={<Template2 />} />
        <Route path="/base-template-3" element={<Template3 />} />
        <Route path="/base-template-4" element={<Template4 />} />
        <Route path="/base-template-5" element={<Template5 />} />

      </Routes>
      {/* <Footer /> */}
      
    </div>
    
  );
  
};

export default App;
