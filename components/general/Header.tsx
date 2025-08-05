"use client";

import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import ThemeToggle from "./Toggle";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const { user } = useUser();

  return (
    <div className=" flex justify-between items-center px-4 py-2 border-1 rounded-t-xl ">
      <ThemeToggle />
      <Link href="/">
        <h1 className="text-xl font-extrabold">SYNCSPACE</h1>
      </Link>
      <Breadcrumbs />
      <div className="flex items-center gap-3">
        {user && (
          <>
            <p className="font-semibold text-sm">{user?.firstName}</p>
          </>
        )}

        <>
          <SignedOut>
            <Button className="bg-transparent border-2 text-blue-500 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              <SignInButton>Login</SignInButton>
            </Button>

            <Button className="bg-blue-500 font-bold">
              <SignUpButton>Register</SignUpButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      </div>
    </div>
  );
};

export default Header;
