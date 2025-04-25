import { Liveblocks } from "@liveblocks/node";

const key = process.env.NEXT_PUBLIC_LIVEBLOCKS_PRIVATE_KEY


if (!key) {
    throw new Error("liveblocks privete key not set")
}

const liveblock = new Liveblocks({
    secret: key
})


export default liveblock