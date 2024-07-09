import React from "react";
import Hero from "./Hero";
import { BannerType } from "@/lib/interface";
interface LandingPageProps {
  banner: BannerType;
}
const LandingPage: React.FC<LandingPageProps> = ({ banner }) => {
  return (
    <section className="flex flex-col w-full">
      <Hero banner={banner} />
    </section>
  );
};

export default LandingPage;
