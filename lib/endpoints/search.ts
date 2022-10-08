import axios from 'axios';
import { BasicType } from '../typings/base';
import { apiKey, bloxlinkBaseUrl } from '../index';

/**
 * @description Get users verified Roblox information from Discord ID
 * @param userid 
 * @param guildId 
 * @returns Bloxlink API data
 */
const SearchDiscordToRoblox = async(userid:string, guildId?:string) => {
    if(!userid) { throw new Error("[Bloxlink-sdk] Invalid userid") };
    let url = guildId ? `${bloxlinkBaseUrl}developer/discord/${userid}?guildId=${guildId}` : `${bloxlinkBaseUrl}developer/discord/${userid}`

    console.log(url)

    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            "api-key": apiKey
        }
    })

    if(res.status == 429) { throw new Error("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.") }

    return res.data
}

/**
 * @description Get Roblox information from Discord ID. This endpoint has priviledged access.
 * @param userid 
 * @returns Bloxlink API data
 */
const SearchRobloxToDiscord = async(userid:string, guildId?:string) => {
    if(!userid) { throw new Error("[Bloxlink.js] Invalid userid") };
    let url = guildId ? `${bloxlinkBaseUrl}developer/roblox/${userid}?guildId=${guildId}` : `${bloxlinkBaseUrl}developer/roblox/${userid}`

    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            "api-key": apiKey
        }
    });

    if(res.status == 429) { throw new Error("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.") }

    return res.data
}

export {
    SearchDiscordToRoblox,
    SearchRobloxToDiscord
};