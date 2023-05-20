import axios from 'axios'
import { apiKey, bloxlinkBaseUrl } from '../index'

/**
 * @description Get users verified Roblox ID from Discord ID
 * @param userid 
 * @param guildId 
 * @returns Bloxlink API data
 */
const SearchDiscordToRoblox = async(userid:string, guildId?:string) => {
    if(!userid) { throw new Error("[Bloxlink-sdk] Invalid Discord ID") }

    const url = guildId ? `${bloxlinkBaseUrl}/public/guilds/${guildId}/${userid}` : `${bloxlinkBaseUrl}/public/discord/${userid}`

    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            "Authorization": apiKey,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        }
    })

    if(res.status == 429) { return console.warn("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.") }

    return res.data
}

/**
 * @description Get Roblox information from Discord ID.
 * @param userid 
 * @param guildId
 * @returns Bloxlink API data
 */
const SearchRobloxToDiscord = async(userid:string) => {
    if(!userid) { throw new Error("[Bloxlink.js] Invalid userid") }

    const url = `${bloxlinkBaseUrl}/public/roblox/${userid}`

    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            "Authorization": apiKey,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        }
    })

    if(res.status == 429) { return console.warn("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.") }

    return res.data
}

export {
    SearchDiscordToRoblox,
    SearchRobloxToDiscord
}