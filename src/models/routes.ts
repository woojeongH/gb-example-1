import { routerPaths } from "@/constants"


export type RouterPaths = typeof routerPaths[keyof typeof routerPaths];

export type routerTo = RouterPaths | string;