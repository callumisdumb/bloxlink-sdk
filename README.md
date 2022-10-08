# Bloxlink API wrapper 🧬

Bloxlink-sdk is a simple, easy to use API wrapper for Bloxlinks API using Node.js. Anyone who can use code should be fairly comfortable with this.

## Working examples
In order to use this API, you will need an API token from Bloxlink. You'll need to do this [here](https://blox.link/dashboard/developers)

All code in Bloxlink-sdk works asynchronously.

> Code
```js
(async () => {
  const bloxlink = require('bloxlink-sdk')
  
  bloxlink.initialise("1d0cbd31-db14-4b7a-a78e-91c155160c3b")

  console.log(
    await bloxlink.SearchDiscordToRoblox("474169687287136256", "372036754078826496")
  );
})();
```
This example will get the Roblox information from the user ID `474169687287136256` in the guild `372036754078826496`.

> Response (application/json)
```
{
  success: true,
  user: { robloxId: '132537120', primaryAccount: '132537120' }
}
```

In the event you're being ratelimited, you should receive an error in the console
```
[Bloxlink-sdk] You're currently being ratelimited by the Bloxlink API.
```

## Versioning Guarantee

This project utilises the [Semantic Versioning](https://semver.org/) rules. Packages are published on NPM in the MAJOR.MINOR.PATCH

> **Note**: Incrementations of the MAJOR component indicates a new version of the [Bloxlink API](https://blox.link/dashboard/developers) is supported

All other incremenations of the semver components follow the [Semantic Versioning Summary](https://semver.org/#summary)

---
###### This API wrapper is unofficial and is not the work of [Bloxlink](https://blox.link) nor [BloxWorks, LLC](https://bloxworks.net) and is not endorsed by them. Please don't go to them for support.