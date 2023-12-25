"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Хуки можно использовать
import { useSession, signOut } from "next-auth/react"; //  только в клиентском компоненте

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();
  // console.log(session);

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
      {session?.data && (
        <Link href="/profile" style={{ margin: "0 24px" }}>
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })} style={{ margin: "0 24px" }}>
          Sign Out
        </Link>
      ) : (
        // <Link href="/api/auth/signin" style={{ margin: "0 24px" }}>
        <Link href="/signin" style={{ margin: "0 24px" }}>
          SignIn
        </Link>
      )}
    </>
  );
};

export { Navigation };

// Это клиентский компонент, который точечно подключается в серверный компонент
