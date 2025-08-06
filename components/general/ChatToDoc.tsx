"use client";
import * as Y from "yjs";
import React, { useState, FormEvent, useTransition } from "react";
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
import { BotIcon } from "lucide-react";
import { Input } from "../ui/input";

const ChatToDoc = ({ doc }: { doc: Y.Doc }) => {
  const [isPending, startTransition] = useTransition();

  const [summary, setSummary] = useState("");
  const [question, setQuestion] = useState("");

  function handleChat(e: FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      const documentData = doc.get("document-store").toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/chatwithdoc`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ documentData, question }),
        }
      );

      if (res.ok) {
        const { message } = await res.json();

        setSummary(message);
        toast.success("Document translated successfully");
      }
    });
  }

  function stripXMLTags(input: string) {
    return input.replace(/<[^>]+>/g, "");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Chat with Document</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter your question about Document</DialogTitle>
          <DialogDescription>Chat with the document</DialogDescription>
        </DialogHeader>
        <hr className="mt-5" />
        {question && <p className="mt-5 text-gray-500 ">Query: {question}</p>}
        {summary && (
          <div className="flex flex-col flex-10 items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100">
            <div className="flex">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold">GPT {isPending ? "....." : "Says"}</p>
            </div>
            <p>{isPending ? "....." : <p>{stripXMLTags(summary)}</p>}</p>
          </div>
        )}
        <form className="flex space-x-2" onSubmit={handleChat}>
          <Input
            type="text"
            placeholder="Enter your question"
            className="w-full"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button type="submit" disabled={!question || isPending}>
            {isPending ? "Asking..." : "Ask"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChatToDoc;
