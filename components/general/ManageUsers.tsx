"use client";
import React, { useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

import { useUser } from "@clerk/nextjs";
import useOwner from "@/lib/useOwner";
import { useRoom } from "@liveblocks/react/suspense";
import { useCollection } from "react-firebase-hooks/firestore";
import { collectionGroup, where, query } from "firebase/firestore";
import { firedb } from "@/firebase";
import { Trash2 } from "lucide-react";
import { RemoveUserFromDoc } from "@/actions/action";

const ManageUsers = () => {
  const { user } = useUser();
  const room = useRoom();
  const owner = useOwner();
  const [isPending, startTransition] = useTransition();

  const [usersInRoom] = useCollection(
    user &&
      query(collectionGroup(firedb, "rooms"), where("roomId", "==", room.id))
  );

  function handleDeleteUser(userId: string) {
    startTransition(async () => {
      if (!user) return;

      const { success } = await RemoveUserFromDoc(room.id, userId);

      if (success) {
        toast.success("User invited successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Users ({usersInRoom?.docs.length})</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite User</DialogTitle>
          <DialogDescription>
            Invite user to the room for live collaboration
          </DialogDescription>
        </DialogHeader>
        <hr className="my-2" />

        <div className="flex flex-col gap-3">
          {usersInRoom?.docs.map((doc) => (
            <div
              key={doc.data().userId}
              className="flex items-center justify-between gap-2"
            >
              <p>
                {doc.data().userId === user?.emailAddresses[0].toString()
                  ? `You (${user?.firstName})`
                  : doc.data().userId}
              </p>

              <div className="flex items-center space-x-2">
                <Button variant={"outline"}>{doc.data().role}</Button>
                {owner &&
                  doc.data().userId !== user?.emailAddresses[0].toString() && (
                    <Button
                      variant={"destructive"}
                      onClick={() => handleDeleteUser(doc.data().userId)}
                      disabled={isPending}
                    >
                      <Trash2 />
                    </Button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageUsers;
