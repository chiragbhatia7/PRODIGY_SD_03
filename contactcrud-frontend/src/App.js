import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AddContact from "./contacts/AddContact";
import Navbar from "./layout/Navbar";
import EditContact from "./contacts/EditContact";
import ViewContact from "./contacts/ViewContact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/editContact/:id" element={<EditContact />} />
          <Route path="/viewContact/:id" element={<ViewContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
