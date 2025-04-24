"use client";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";

import React, { PointerEvent } from "react";
import Followpointer from "./Followpointer";
const LiveCursorProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mypresence, updateMyPresence] = useMyPresence();
  const others = useOthers();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const cursor = {
      x: Math.floor(event.pageX),
      y: Math.floor(event.pageY),
    };
    updateMyPresence({ cursor });
  }

  function handlePointerLeave() {
    updateMyPresence({ cursor: null });
  }

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {others
        .filter((other) => other.presence.cursor !== null)
        .map(({ connectionId, presence, info }) => (
          <Followpointer
            key={connectionId}
            info={info}
            x={presence.cursor!.x}
            y={presence.cursor!.y}
          />
        ))}
      {children}
    </div>
  );
};

export default LiveCursorProvider;
