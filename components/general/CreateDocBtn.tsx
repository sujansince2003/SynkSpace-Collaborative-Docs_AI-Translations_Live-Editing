"use client";
import { CreateDocument } from "@/actions/action";
import { Button } from "../ui/button";
import { NotebookPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";

const CreateDocBtn = () => {
  const router = useRouter();
  const [ispending, startTransition] = useTransition();
  const [docName, setDocName] = useState("");
  function createDoc(docName: string) {
    startTransition(async () => {
      const { docId } = await CreateDocument(docName);
      router.push(`/docs/${docId}`);
    });
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button disabled={ispending}>
            <NotebookPen />
            Create Doc
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create new document.</AlertDialogTitle>
            <AlertDialogDescription>
              Enter the document name below to create a new document.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form
            className="flex flex-col items-end space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (docName) {
                createDoc(docName);
              } else {
                alert("Please enter a document name");
              }
            }}
          >
            <Input
              type="text"
              placeholder="Enter document name"
              className="w-full"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
            />
            <div className="flex space-x-2">
              <AlertDialogAction asChild>
                <Button type="submit" disabled={!docName || ispending}>
                  {ispending ? "Creating..." : "Create"}
                </Button>
              </AlertDialogAction>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CreateDocBtn;
