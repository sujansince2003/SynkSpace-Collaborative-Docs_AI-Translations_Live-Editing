"use client";
import React, { useTransition, useState } from "react";
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
  const pathname = usePathname();
  const segments = pathname.split("/");
  const roomId = segments[segments.length - 1];

  const [isPending, startTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false); // manual dialog state

  function deleteDoc() {
    if (!roomId) return;

    setIsDeleting(true);

    startTransition(async () => {
      const { success } = await DeleteDocumentAction(roomId);
      setIsDeleting(false);

      if (success) {
        toast.success("Document deleted successfully");
        setOpen(false); // Close dialog only on success
        router.replace("/docs");
      } else {
        toast.error("Something went wrong");
        // Keep dialog open so user can try again or cancel
      }
    });
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={(val) => !isDeleting && setOpen(val)}
    >
      <AlertDialogTrigger asChild>
        <Button
          className="cursor-pointer"
          disabled={isPending}
          onClick={() => setOpen(true)}
        >
          <Trash2 />
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-2 items-center">
            <ShieldAlert />
            Are you sure want to delete this document?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the file
            and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteDoc} disabled={isDeleting}>
            <Trash2 />
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDocument;
