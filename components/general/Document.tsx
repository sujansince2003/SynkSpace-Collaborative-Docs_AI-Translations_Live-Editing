/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { firedb } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import CollabEditor from "./CollabEditor";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import UserAvatars from "./UserAvatars";

const Document = ({ id }: { id: string }) => {
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const [data, loading, error] = useDocumentData(doc(firedb, "documents", id));
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  async function updateTitle(e: FormEvent) {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(firedb, "documents", id), {
          title: input,
        });
      });
    }
  }

  return (
    <div className="bg-white flex-1 h-full p-5">
      <div className="max-w-4xl mx-auto space-x-2 flex justify-between pb-6">
        <form className="flex flex-1 space-x-2 " onSubmit={updateTitle}>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating" : "Update"}
          </Button>
        </form>
        {isOwner && (
          <>
            {/* <InviteUser /> */}
            <DeleteDocument />
          </>
        )}
      </div>

      <div className="flex max-w-4xl mx-auto justify-between items-center mb-5">
        <ManageUsers />
        <div className="flex items-center space-x-2">
          <UserAvatars />
          {isOwner && (
            <>
              <InviteUser />
            </>
          )}
        </div>
      </div>
      <hr className="pb-10" />
      <CollabEditor />
    </div>
  );
};

export default Document;
