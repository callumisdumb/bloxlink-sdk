(async () => {
    const bloxlink = require('bloxlink-sdk')
    
    bloxlink.initialise("YOUR_API_KEY_HERE")
  
    console.log(
      await bloxlink.SearchDiscordToRoblox("474169687287136256", "372036754078826496")
    );

    //

    const bloxlink = require('bloxlink-sdk')
    
    bloxlink.initialise("YOUR_API_KEY_HERE")
  
    console.log(
      await bloxlink.SearchRobloxToDiscord("132537120", "372036754078826496")
    );
})();