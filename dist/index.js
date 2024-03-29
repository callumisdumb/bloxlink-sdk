"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRobloxToDiscord = exports.SearchDiscordToRoblox = exports.initialise = exports.apiKey = exports.bloxlinkBaseUrl = void 0;
const search_1 = require("./endpoints/search");
Object.defineProperty(exports, "SearchDiscordToRoblox", { enumerable: true, get: function () { return search_1.SearchDiscordToRoblox; } });
Object.defineProperty(exports, "SearchRobloxToDiscord", { enumerable: true, get: function () { return search_1.SearchRobloxToDiscord; } });
let apiKey;
exports.apiKey = apiKey;
const bloxlinkBaseUrl = "https://api.blox.link/v4";
exports.bloxlinkBaseUrl = bloxlinkBaseUrl;
//const robloxBaseUrl:string = "https://api.roblox.com/"
/**
 *
 * @param key
 * @param type
 * @description Initialise Bloxlink.js
 */
const initialise = (key) => {
    if (!key) {
        throw new Error("[Bloxlink-sdk] The key you entered is undefined or invalid");
    }
    ;
    exports.apiKey = apiKey = key;
};
exports.initialise = initialise;
