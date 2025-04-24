import { adminDb } from "@/firebase-admin";
import liveblock from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import type { JwtPayload } from "@clerk/types";


type CustomClaims = JwtPayload & {
    email: string;
    image: string;
    userid: string;
    fullname: string;
    lastname: string;
    firstname: string;
};

export async function POST(req: NextRequest) {
    auth.protect();
    const { sessionClaims } = await auth();
    const { room } = await req.json();

    const claims = sessionClaims as unknown as CustomClaims;



    const session = liveblock.prepareSession(claims?.email, {
        userInfo: {
            name: claims?.fullname,
            email: claims?.email,
            avatar: claims?.image
        }
    });
    const usersInRoom = await adminDb.collectionGroup("rooms").where("userId", "==", claims.email).get();

    const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

    if (userInRoom?.exists) {
        session.allow(room, session.FULL_ACCESS);
        const { body, status } = await session.authorize();


        return new Response(body, { status })

    }
    else {
        return NextResponse.json({
            message: "You are not in this room"
        }, { status: 403 })
    }
}

