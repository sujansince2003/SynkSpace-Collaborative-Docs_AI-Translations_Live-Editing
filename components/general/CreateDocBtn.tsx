"use client";
import { CreateDocument } from "@/actions/action";
import { Button } from "../ui/button";
import { NotebookPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const CreateDocBtn = () => {
  const router = useRouter();
  const [ispending, startTransition] = useTransition();
  function createDoc() {
    startTransition(async () => {
      const { docId } = await CreateDocument();
      router.push(`/docs/${docId}`);
    });
  }

  return (
    <Button disabled={ispending} onClick={createDoc}>
      <NotebookPen />
      Create Doc
    </Button>
  );
};

export default CreateDocBtn;
