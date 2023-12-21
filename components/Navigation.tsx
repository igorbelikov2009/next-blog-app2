"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.label} href={link.href} className={isActive ? "active" : ""} style={{ margin: "0 24px" }}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };

// Это клиентский компонент, который точечено подключается в серверный компонент
