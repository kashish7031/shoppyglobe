// src/components/Layout.jsx
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="loader">Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="footer">
        <p>© 2025 ShoppyGlobe</p>
      </footer>
    </div>
  );
};

export default Layout;
