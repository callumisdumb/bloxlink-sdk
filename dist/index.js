"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRobloxToDiscord = exports.SearchDiscordToRoblox = exports.initialise = exports.apiKey = exports.baseUrl = void 0;
const search_1 = require("./endpoints/search");
Object.defineProperty(exports, "SearchDiscordToRoblox", { enumerable: true, get: function () { return search_1.SearchDiscordToRoblox; } });
Object.defineProperty(exports, "SearchRobloxToDiscord", { enumerable: true, get: function () { return search_1.SearchRobloxToDiscord; } });
let apiKey;
exports.apiKey = apiKey;
let baseUrl = "https://v3.blox.link/";
exports.baseUrl = baseUrl;
/**
 *
 * @param key
 * @description Initialise Bloxlink.js
 */
const initialise = (key) => {
    if (!key) {
        throw new Error("[Bloxlink.js] The key you entered is undefined or invalid");
    }
    ;
    exports.apiKey = apiKey = key;
};
exports.initialise = initialise;
