import "@clerk/types"

declare module "@clerk/types" {
    interface JwtPayload {
        email: string;
        image: string;
        userid: string;
        fullname: string;
        lastname: string;
        firstname: string;
    }
}