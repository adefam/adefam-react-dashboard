import React from 'react';
import {Route, Routes, Navigate } from "react-router-dom";


// Components
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/SideBar/SideBar.js";

// View
import AddBills from "../views/admin/AddBills.js";

export default function AddBill() {
    return (
      <>
        <Sidebar />
        <div className="mt-24 relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          {/* <HeaderStats /> */}
          <div className="px-4 pt-5 md:pt-24 md:px-10 mx-auto w-full -m-24">
            {/* <AddBills /> */}
            <Routes>
              <Route path="/" element={<AddBills />} />
              {/* <Navigate from="/admin" to="/admin/addbills" /> */}
            </Routes>
          </div>
        </div>
      </>
    );
  }
 