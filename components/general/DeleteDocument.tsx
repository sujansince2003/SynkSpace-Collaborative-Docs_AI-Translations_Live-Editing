"use client";
import React, { useTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash2, ShieldAlert } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DeleteDocumentAction } from "@/actions/action";

const DeleteDocument = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const segments = pathname.split("/");

  function deleteDoc() {
    const roomId = segments[segments.length - 1];
    if (!roomId) return null;

    startTransition(async () => {
      const { success } = await DeleteDocumentAction(roomId);

      if (success) {
        router.replace("/");
        toast.success("Document deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="cursor-pointer" variant={"destructive"}>
          <Trash2 />
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-2 items-center">
            <ShieldAlert />
            Are you sure want to delete this document ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the file
            and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteDoc}>
            <Trash2 />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDocument;
