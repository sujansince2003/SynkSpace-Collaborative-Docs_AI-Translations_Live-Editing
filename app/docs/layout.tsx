import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Sidebar from "@/components/general/Sidebar";
import { Toaster } from "react-hot-toast";

import LiveBlocksContainer from "@/components/general/LiveBlocksContainer";
import Header from "@/components/general/Header";
import { SidebarProvider } from "@/components/context/SidebarContext";

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  // Redirect to landing page if not authenticated
  if (!userId) {
    redirect("/");
  }

  return (
    <>
      <Toaster />
      <Header />
      <div
        className="mt-20  max-w-9xl
          mx-auto
          px-4
          py-2
          sm:px-6
          lg:px-8"
      >
        <LiveBlocksContainer>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
                {children}
              </div>
            </div>
          </SidebarProvider>
        </LiveBlocksContainer>
      </div>
    </>
  );
};

export default DocsLayout;
