// import axios from "axios";
// import { useState } from "react";

// export default function App() {
//   const [message, setMessage] = useState("");

//   async function getData() {
//     const response = await axios("http://localhost:3001/getMessage");
//     setMessage(response.data.message);
//     console.log(response.data);
//   }
//   getData();
//   return <div>{message}</div>;
// }

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GetData from "./components/GetData";
// import Weather from "./components/Weather";
// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<h1>Welcome to home page</h1>} />
//         <Route path="/getData" element={<GetData />} />
//         {/* getData is funcion name and GetData is file name  */}
//         <Route path="/Weather" element={<Weather />} />
//         <Route path="*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Weather from "./components/Weather";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<h2>not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
