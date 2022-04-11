import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";

// components

import HeaderNavbar from "../components/Navbar/HeaderNavbar.js";

// views
import CreateAccount from "../views/auth/CreateAccount.js";

export default function Auth() {
  return (
    <>
      <HeaderNavbar transparent />
      <main>
        <section className="relative w-full h-full min-h-screen">
          {/* <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/register_bg_2.png").default + ")",
            // }}
          ></div> */}
            {/* <Routes>
                <Route path="auth/create" element={<CreateAccount />} />
                <Navigate from="/auth" to="/auth/create" />
            </Routes> */}
          <CreateAccount />
        </section>
      </main>
    </>
  );
}
