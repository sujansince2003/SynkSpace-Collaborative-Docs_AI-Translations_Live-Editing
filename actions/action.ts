"use server"
import { adminDb } from "@/firebase-admin";
import liveblock from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import type { JwtPayload } from "@clerk/types";




type CustomClaims = JwtPayload & {
    email: string;
    image: string;
    userid: string;
    fullname: string;
    lastname: string;
    firstname: string;
};

export async function CreateDocument() {
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn();

    auth.protect()


    const { sessionClaims } = await auth();

    if (!sessionClaims) {
        throw new Error("Session claims are null. User may not be authenticated.");
    }

    const claims = sessionClaims as unknown as CustomClaims;

    const docRef = await adminDb.collection("documents").add({
        title: "new doc",
    });

    await adminDb.collection("users").doc(claims.email).collection("rooms").doc(docRef.id).set({
        userId: claims.email,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id
    })

    return { docId: docRef.id };
}


export async function DeleteDocumentAction(roomId: string) {
    auth.protect();
    try {
        //delete ref from db
        await adminDb.collection("documents").doc(roomId).delete();
        const query = await adminDb.collectionGroup("rooms").where("roomId", "==", roomId).get();

        const batch = adminDb.batch();

        //delete in the users collection for every user 
        query.docs.forEach((doc) => {
            batch.delete(doc.ref)
        });

        await batch.commit();
        await liveblock.deleteRoom(roomId)
        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false }

    }





}


export async function HandleInviteUserAction(roomId: string, email: string) {
    auth.protect();
    try {
        await adminDb.collection("users").doc(email).collection("rooms").doc(roomId).set({
            userId: email,
            role: "editor",
            createdAt: new Date(),
            roomId
        })


        return { success: true }


    } catch (error) {
        console.log(error);
        return { success: false }
    }
}