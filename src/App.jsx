import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <div className="w-full flex">
          <div className="w-1/5">
            <div className="h-screen fixed  hover:overflow-y-auto">
              <Sidebar />
            </div>
          </div>
          <div className="w-4/5 h-screen ml bg-gray-50 overflow-y-auto">
            main
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
