import Navbar from "@/components/Navbar";
import { SiteHeader } from "@/components/site-header";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-8 py-8">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <SiteHeader />
      {children}
    </div>
  );
}
