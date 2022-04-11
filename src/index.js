import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// Layouts
import Admin from "./layouts/Admin.js";
import ViewBills from "./layouts/ViewBills.js";
import Auth from "./layouts/Auth.js";

// Landing Page
import Index from "./views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
        <Route path="admin/addbills" element={<Admin />} />
        <Route path="admin/viewbills" element={<ViewBills />} />
        <Route path="auth/create" element={<Auth />} />

    </Routes>
    {/* <Navigate from="*" to="/" /> */}
    {/* <Index /> */}
  </BrowserRouter>,
  document.getElementById('root')
);


