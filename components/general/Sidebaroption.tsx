"use client";
import { firedb } from "@/firebase";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import { EllipsisVertical, Trash } from "lucide-react";
import { Trash2, ShieldAlert, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { DeleteDocumentAction } from "@/actions/action";

const Sidebaroption = ({ id, href }: { id: string; href: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, loading, error] = useDocumentData(doc(firedb, "documents", id));

  const [isDeleting, setIsDeleting] = useState(false);
  const pathname = usePathname();

  const isactive = pathname === href;
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const segments = pathname.split("/");

  async function deleteDoc() {
    const roomId = segments[segments.length - 1];
    if (!roomId) return null;

    setIsDeleting(true);
    startTransition(async () => {
      const { success } = await DeleteDocumentAction(roomId);

      if (success) {
        router.replace("/docs");
        toast.success("Document deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
      setIsDeleting(false);
    });
  }

  if (!data) return null;
  return (
    <>
      <Link
        href={href}
        className={`
         border border-gray-50 p-2 rounded-md flex justify-between ${
           isactive
             ? "bg-gray-200 font-bold border-gray-200"
             : "border-gray-200"
         } 
    `}
      >
        <p className="truncate">{data?.title}</p>
        {isactive && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <EllipsisVertical size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuLabel>Document Options</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600"
                    onSelect={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex gap-2 items-center">
                      <ShieldAlert />
                      Are you sure want to delete this document ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the file and cannot be recovered.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel disabled={isDeleting}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={deleteDoc}
                      className="bg-red-600 hover:bg-red-700 gap-2"
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </>
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </Link>
    </>
  );
};

export default Sidebaroption;
