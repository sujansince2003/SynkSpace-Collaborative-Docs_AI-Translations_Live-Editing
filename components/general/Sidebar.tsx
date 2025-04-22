/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CreateDocBtn from "./CreateDocBtn";
import { AlignJustify } from "lucide-react";

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

interface Roomdocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

const Sidebar = () => {
  const { user } = useUser();

  const [groupedData, setGroupedData] = useState<{
    owner: Roomdocument[];
    editor: Roomdocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(firedb, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
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

  console.log("data is ", data);

  const menuOptions = (
    <>
      <CreateDocBtn />
      <div className="flex flex-col py-4 space-y-4 md:max-w-36">
        {groupedData.owner.length === 0 ? (
          <>
            <h2 className="text-gray-500 font-semibold text-sm">
              No documents
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-gray-500 font-semibold text-sm">
              My Documents
            </h2>
            {groupedData.owner.map((doc) => (
              <Sidebaroption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
            ))}
          </>
        )}
      </div>
    </>
  );

  return (
    <div className="p-2 md:p-5 relative ">
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
      <div className="hidden md:inline ">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
