import React, { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
