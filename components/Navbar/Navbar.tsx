import { MenuItemType } from "@/lib/interface";
import React from "react";
import { DesktopMenu } from "../Menu/Menu";

const Navbar = () => {
  const navLink: MenuItemType[] = [
    { id: "link1", title: "Man", url: "/mens-clothing" },
    { id: "link2", title: "Woman", url: "/womens-clothing" },
    { id: "link3", title: "Featured", url: "/featured" },
  ];
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:grid grid-cols-3 gap-4 items-center">
        <DesktopMenu links={navLink} />
      </nav>
    </>
  );
};

export default Navbar;
