/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { firedb } from "@/firebase";
import Link from "next/link";
import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { usePathname } from "next/navigation";

const Sidebaroption = ({ id, href }: { id: string; href: string }) => {
  const [data, loading, error] = useDocumentData(doc(firedb, "documents", id));
  const pathname = usePathname();
  const isactive = href.includes(pathname) && pathname !== "/";

  if (!data) return null;
  return (
    <Link
      href={href}
      className={`
         border p-2 rounded-md ${
           isactive ? "bg-gray-300 font-bold border-black" : "border-gray-400"
         } 
    `}
    >
      <p className="truncate">{data?.title}</p>
    </Link>
  );
};

export default Sidebaroption;
