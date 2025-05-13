import { initializeApp, getApp, getApps, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";





// const serviceKey = require("@/firebase-admin.json")

const serviceKey = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_SERVICE_KEY as string)

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey)
    })
}
else {
    app = getApp()
}

const adminDb = getFirestore(app)

export { app as adminApp, adminDb }