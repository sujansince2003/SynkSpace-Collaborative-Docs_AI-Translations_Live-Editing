import RoomProvider from "@/components/general/RoomProvider";
import { auth } from "@clerk/nextjs/server";

type Params = Promise<{ id: string }>;
const Doclayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) => {
  auth.protect();

  const { id } = await params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default Doclayout;
