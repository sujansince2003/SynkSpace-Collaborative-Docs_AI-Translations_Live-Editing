import React from "react";
import Document from "@/components/general/Document";
type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  return (
    <div className=" flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
};

export default page;
