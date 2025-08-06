"use client";
import * as React from "react";
import CreateDocBtn from "./CreateDocBtn";
import { AlignJustify, ChevronsLeft, ChevronsRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { firedb } from "@/firebase";
import { useEffect, useState } from "react";
import Sidebaroption from "./Sidebaroption";
import { useSidebar } from "../context/SidebarContext";
import Loader from "./Loader";

interface Roomdocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

const Sidebar = () => {
  const { user, isLoaded } = useUser();
  const { isOpen, toggle } = useSidebar();

  const [groupedData, setGroupedData] = useState<{
    owner: Roomdocument[];
    editor: Roomdocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data, loading, error] = useCollection(
    isLoaded && user
      ? query(
          collectionGroup(firedb, "rooms"),
          where("userId", "==", user.emailAddresses[0]?.toString())
        )
      : null
  );

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: Roomdocument[];
      editor: Roomdocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as Roomdocument;
        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);

  const menuOptions = (
    <>
      <CreateDocBtn />
      <div className="flex flex-col py-4 space-y-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-red-500 text-sm">Error loading documents</div>
        ) : (
          <>
            {groupedData.owner.length === 0 ? (
              <h2 className="text-gray-500 font-semibold text-sm">
                No documents
              </h2>
            ) : (
              <>
                <h2 className="text-gray-500 font-semibold text-sm">
                  My Documents
                </h2>
                {groupedData.owner.map((doc) => (
                  <Sidebaroption
                    key={doc.id}
                    id={doc.id}
                    href={`/docs/${doc.id}`}
                  />
                ))}
              </>
            )}

            <div className="flex flex-col py-4 space-y-4">
              {groupedData.editor.length > 0 && (
                <>
                  <h2 className="text-gray-500 font-semibold text-sm">
                    Shared with me
                  </h2>
                  {groupedData.editor.map((doc) => (
                    <Sidebaroption
                      key={doc.id}
                      id={doc.id}
                      href={`/docs/${doc.id}`}
                    />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <aside
      className={`
        relative hidden md:flex flex-col bg-white border-r transition-all duration-300
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="absolute -right-3 top-4 w-6 h-6 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center"
      >
        {isOpen ? <ChevronsLeft size={16} /> : <ChevronsRight size={16} />}
      </button>

      <div className="p-2">{isOpen && menuOptions}</div>

      {/* Mobile fallback sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify size={20} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </aside>
  );
};

export default Sidebar;
