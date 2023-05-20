(async () => {
    const bloxlink = require('../../dist/index')
    
    bloxlink.initialise("94dbc072-8678-408f-b604-420c4fdf43fc")
  
    console.log(
      await bloxlink.SearchDiscordToRoblox("474169687287136256", "830421599160500225")
    );

    //

    // const bloxlink = require('bloxlink-sdk')
    
    // bloxlink.initialise("YOUR_API_KEY_HERE")
  
    // console.log(
    //   await bloxlink.SearchRobloxToDiscord("132537120", "372036754078826496")
    // );
})();