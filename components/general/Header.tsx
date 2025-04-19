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
const Header = () => {
  const { user } = useUser();

  return (
    <div className=" flex justify-between items-center px-4 py-2 border-1 rounded-3xl ">
      <Link href="/">
        <h1 className="text-xl font-extrabold">SYNCSPACE</h1>
      </Link>

      <div className="flex items-center gap-3">
        {user && (
          <>
            <p className="font-semibold text-sm">{user?.firstName}</p>
          </>
        )}
        <>
          <SignedOut>
            <SignInButton>Login</SignInButton>
            <SignUpButton>Register</SignUpButton>
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
