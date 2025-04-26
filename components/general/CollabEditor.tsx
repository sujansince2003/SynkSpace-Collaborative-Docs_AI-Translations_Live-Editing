"use client";
import { useRoom, useSelf } from "@liveblocks/react/suspense";
import React, { useEffect, useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { BlockNoteView } from "@blocknote/shadcn";
import { BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import stringToColor from "@/lib/stringTocolor";
import TranslateDoc from "./TranslateDoc";
import ChatToDoc from "./ChatToDoc";

type EditorProps = {
  doc: Y.Doc;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any;
  darkMode: boolean;
};

function BlockNote({ doc, provider, darkMode }: EditorProps) {
  const userInfo = useSelf((me) => me.info);

  const editor: BlockNoteEditor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userInfo?.name,
        color: stringToColor(userInfo?.email || "1"),
      },
    },
  });

  return (
    <div className="relative max-w-4xl mx-auto">
      <BlockNoteView
        className="min-h-screen"
        editor={editor}
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

const CollabEditor = () => {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  const [provider, setProvider] = useState<LiveblocksYjsProvider>();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const YDoc = new Y.Doc();
    const Yprovider = new LiveblocksYjsProvider(room, YDoc);
    setDoc(YDoc);
    setProvider(Yprovider);

    return () => {
      YDoc.destroy();
      Yprovider.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex items-center gap-2 justify-end mb-10">
        {/* translate */}
        <TranslateDoc doc={doc} />

        {/* chat */}
        <ChatToDoc doc={doc} />

        {/* darkmode */}
        <Button
          className={`hover:text-white ${
            darkMode
              ? "text-gray-300 bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
              : "text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-700"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
      {/* note blocks */}
      <BlockNote doc={doc} provider={provider} darkMode={darkMode} />
    </div>
  );
};

export default CollabEditor;
