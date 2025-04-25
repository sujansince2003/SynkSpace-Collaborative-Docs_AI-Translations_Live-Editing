"use client";
import React from "react";

import { LiveblocksProvider } from "@liveblocks/react/suspense";

const LiveBlocksContainer = ({ children }: { children: React.ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_KEY) {
    throw new Error("Pubic key missing for liveblocks");
  }

  return (
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>
      {children}
    </LiveblocksProvider>
  );
};

export default LiveBlocksContainer;
