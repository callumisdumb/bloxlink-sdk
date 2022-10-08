import { SearchDiscordToRoblox, SearchRobloxToDiscord } from './endpoints/search'

let apiKey:string;
let bloxlinkBaseUrl:string = "https://v3.blox.link/"
let robloxBaseUrl:string = "https://api.roblox.com/"

/**
 * 
 * @param key 
 * @param useRoblox
 * @description Initialise Bloxlink.js
 */
const initialise = (key:string) => {
    if(!key) { throw new Error("[Bloxlink.js] The key you entered is undefined or invalid") };

    apiKey = key
}

export {
    bloxlinkBaseUrl,
    apiKey,
    initialise,
    SearchDiscordToRoblox,
    SearchRobloxToDiscord
}