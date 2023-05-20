"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRobloxToDiscord = exports.SearchDiscordToRoblox = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../index");
/**
 * @description Get users verified Roblox ID from Discord ID
 * @param userid
 * @param guildId
 * @returns Bloxlink API data
 */
const SearchDiscordToRoblox = (userid, guildId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userid) {
        throw new Error("[Bloxlink-sdk] Invalid Discord ID");
    }
    const url = guildId ? `${index_1.bloxlinkBaseUrl}/public/guilds/${guildId}/${userid}` : `${index_1.bloxlinkBaseUrl}/public/discord/${userid}`;
    const res = yield (0, axios_1.default)({
        method: 'get',
        url: url,
        headers: {
            "Authorization": index_1.apiKey,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        }
    });
    if (res.status == 429) {
        return console.warn("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.");
    }
    return res.data;
});
exports.SearchDiscordToRoblox = SearchDiscordToRoblox;
/**
 * @description Get Roblox information from Discord ID.
 * @param userid
 * @param guildId
 * @returns Bloxlink API data
 */
const SearchRobloxToDiscord = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userid) {
        throw new Error("[Bloxlink.js] Invalid userid");
    }
    const url = `${index_1.bloxlinkBaseUrl}/public/roblox/${userid}`;
    const res = yield (0, axios_1.default)({
        method: 'get',
        url: url,
        headers: {
            "Authorization": index_1.apiKey,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        }
    });
    if (res.status == 429) {
        return console.warn("[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.");
    }
    return res.data;
});
exports.SearchRobloxToDiscord = SearchRobloxToDiscord;
