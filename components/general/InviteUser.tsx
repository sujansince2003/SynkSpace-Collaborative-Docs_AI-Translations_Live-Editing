"use client";
import React, { FormEvent, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { HandleInviteUserAction } from "@/actions/action";

const InviteUser = () => {
  const [email, setEmail] = React.useState("");

  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const segments = pathname.split("/");

  function inviteUser(e: FormEvent) {
    e.preventDefault();
    const roomId = segments[segments.length - 1];
    if (!roomId) return null;

    startTransition(async () => {
      const { success } = await HandleInviteUserAction(roomId, email);

      if (success) {
        setEmail("");
        toast.success("User invited successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Invite</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite User</DialogTitle>
          <DialogDescription>
            Invite user to the room for live collaboration
          </DialogDescription>
        </DialogHeader>
        <form className="flex space-x-2" onSubmit={inviteUser}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={!email || isPending}>
            {isPending ? "Inviting..." : "Invite"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteUser;
