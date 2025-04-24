import LiveBlocksContainer from "@/components/general/LiveBlocksContainer";
import React from "react";
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return <LiveBlocksContainer>{children}</LiveBlocksContainer>;
};

export default DocsLayout;
