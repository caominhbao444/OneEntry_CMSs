"use client";
import LandingPage from "@/components/LandingPage/page";
import Image from "next/image";
import { useEffect } from "react";
import { getPageData } from "./action";
import fetchData from "./hooks/fetchData";
import Loading from "@/components/Button/Loading";
export default function Home() {
  const { banner, isLoading } = fetchData({ url: "home", fetchBanner: true });
  return (
    <main className="flex min-h-screen flex-col items-center">
      {isLoading ? <Loading></Loading> : <LandingPage banner={banner} />}
    </main>
  );
}
