import { MenuItemType } from "@/lib/interface";
import Link from "next/link";
import React from "react";
import Logo from "../../lib/img/logo.png";
import Image from "next/image";
import Cart from "../ShoppingCart/Cart";
interface MenuProps {
  links: MenuItemType[];
}
export const DesktopMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <>
      <ul className="col-start-1 flex items-center gap-6 md:text-[1.25rem]">
        {links.map((link: MenuItemType) => {
          return (
            <Link key={link.id} href={link.url} className="text-white">
              {link.title}
            </Link>
          );
        })}
      </ul>
      <Link
        href="/"
        className="object-fill justify-self-center col-start-2 md:w-20"
      >
        <Image src={Logo} className="" alt="logo" />
      </Link>
      <Cart />
    </>
  );
};
export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  return <div>MenuMobile</div>;
};
