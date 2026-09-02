//----------------------------------------------------------------------------------------------------------
// import React from 'react'
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // default import
// import { Main } from "./components/Footer"; // named import

// ----------we can import both in one import link------
import Footer, { Main } from "./components/Footer";
import "./App.css";
// import sumModule from "./modules/sum"; //default import

// import { sum } from "./modules/sum"; //named import module
import jsonData from "./data.json";
//-------------------------------------------------------------------------------------------------------------


const App = () => {
  console.log(jsonData); // json data 

  // let result = sum(4, 5); //access  module
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
