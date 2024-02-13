"use client";
import { useUtil } from "@/contexts/util.context";
import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { modal } = useUtil();
  return (
    <>
      <Header />
      {children}
      {modal}
    </>
  );
}

export default RootLayout;
