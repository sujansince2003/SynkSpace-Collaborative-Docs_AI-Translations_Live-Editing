"use client";

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
import Link from "next/link";
import CreateDocBtn from "@/components/general/CreateDocBtn";
import Loader from "@/components/general/Loader";

interface Roomdocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
  id?: string;
}

const DocPage = () => {
  const { user, isLoaded } = useUser();

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

  return (
    <div className="p-6 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Workspace</h1>
        <CreateDocBtn />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-10">
          Error loading documents. Please try again.
        </div>
      ) : (
        <>
          {/* My Documents */}
          <div>
            <h2 className="text-lg font-semibold mb-4">My Documents</h2>
            {groupedData.owner.length === 0 ? (
              <p className="text-gray-500">
                You haven&apos;t created any documents yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {groupedData.owner.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/docs/${doc.id}`}
                    className="p-4 border rounded-lg hover:shadow-md transition"
                  >
                    <h3 className="font-medium text-lg truncate">
                      Untitled Document
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Created by you</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Shared With Me */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Shared With Me</h2>
            {groupedData.editor.length === 0 ? (
              <p className="text-gray-500">No documents shared with you yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {groupedData.editor.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/docs/${doc.id}`}
                    className="p-4 border rounded-lg hover:shadow-md transition"
                  >
                    <h3 className="font-medium text-lg truncate">
                      Untitled Document
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Shared with you
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DocPage;
