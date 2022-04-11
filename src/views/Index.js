import React from "react";

import HeaderNavbar from "../components/Navbar/HeaderNavbar.js";

function Index() {
  return (
    <>
      <HeaderNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-center text-4xl text-purple-600">
                HOSTBEAK 
              </h2>
             
            </div>
          </div>
        </div>
      </section>
     
    </>
    
  );
}

export default Index;


