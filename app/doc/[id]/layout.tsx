import RoomProvider from "@/components/general/RoomProvider";
import { auth } from "@clerk/nextjs/server";

const Doclayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  auth.protect();

  const { id } = params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default Doclayout;
