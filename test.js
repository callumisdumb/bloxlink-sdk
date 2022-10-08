const bloxlink = require("./dist/index")

bloxlink.initialise('1d0cbd31-db14-4b7a-a78e-91c155160c3b');

async function a() {
    console.log(await bloxlink.SearchDiscordToRoblox("199858283476025346"));
}

a()