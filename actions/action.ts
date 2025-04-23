"use server"
import { adminDb } from "@/firebase-admin";
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
