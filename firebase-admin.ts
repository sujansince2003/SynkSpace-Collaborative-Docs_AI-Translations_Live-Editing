import { initializeApp, getApp, getApps, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";



// eslint-disable-next-line @typescript-eslint/no-require-imports
const serviceKey = require("@/firebase-admin.json")

let app: App;

if (getApps.length === 0) {
    app = initializeApp({
        credential: cert(serviceKey)
    })
}
else {
    app = getApp()
}

const adminDb = getFirestore(app)

export { app as adminApp, adminDb }