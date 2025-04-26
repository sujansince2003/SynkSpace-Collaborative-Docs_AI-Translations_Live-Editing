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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { BotIcon } from "lucide-react";

type Language =
  | "english"
  | "spanish"
  | "german"
  | "french"
  | "italian"
  | "portuguese"
  | "russian"
  | "japanese"
  | "chinese"
  | "korean"
  | "vietnamese"
  | "hindi"
  | "nepali"
  | "arabic";

const languages: Language[] = [
  "english",
  "spanish",
  "german",
  "french",
  "italian",
  "portuguese",
  "russian",
  "japanese",
  "chinese",
  "korean",
  "vietnamese",
  "hindi",
  "nepali",
  "arabic",
];

const TranslateDoc = ({ doc }: { doc: Y.Doc }) => {
  const [isPending, startTransition] = useTransition();
  const [lang, setLang] = useState("");
  const [summary, setSummary] = useState("");

  function handleTranslate(e: FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      const documentData = doc.get("document-store").toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/translatedoc`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ documentData, targetLang: lang }),
        }
      );

      if (res.ok) {
        const { translated_text } = await res.json();

        setSummary(translated_text);
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
        <Button variant="outline">Translate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Translate Document</DialogTitle>
          <DialogDescription>
            Translate the document to your prefered language
          </DialogDescription>
        </DialogHeader>
        {summary && (
          <div className="flex flex-col flex-10 items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100">
            <div className="flex">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold">GPT {isPending ? "....." : "Says"}</p>
            </div>
            <p>{isPending ? "....." : <p>{stripXMLTags(summary)}</p>}</p>
          </div>
        )}
        <form className="flex space-x-2" onSubmit={handleTranslate}>
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={!lang || isPending}>
            {isPending ? "Translating..." : "Translate"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TranslateDoc;
