const fs = require("fs");
const fetch = require("node-fetch");
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");
smd(
  {
    pattern: "pussy",
    category: "nsfw",
    filename: __filename,
    desc: "Gets pussy pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/pussy";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: pussy",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "ass",
    category: "nsfw",
    filename: __filename,
    desc: "Gets ass pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/ass";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: ass",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "nai",
    desc: "Generate an AI photo.",
    category: "nsfw",
    filename: __filename,
    use: "<query>",
  },
  async (m, query) => {
    try {
      // Check if query is provided
      if (!query) {
        return await m.send("*_Please provide a query for the AI photo generator!_*");
      }

      // Construct the API URL with the provided query
      const apiUrl = `https://api.maher-zubair.tech/nsfw/x-gen?q=${encodeURIComponent(query)}`;
      
      // Fetch the response from the API
      const response = await fetch(apiUrl);

      // Check if the response is not OK
      if (!response.ok) {
        return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
      }

      // Get the content type of the response
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.startsWith('image')) {
        // If the response is an image, get the image URL
        const photoUrl = response.url;

        // Send the photo to the user
        await m.bot.sendFromUrl(
          m.from,
          photoUrl,
          "Here is your generated photo:",
          m,
          {},
          "image"
        );
      } else if (contentType && contentType.includes('application/json')) {
        // If the response is JSON, parse it
        const data = await response.json();

        // Check if the status in the response data is not 200
        if (data.status !== 200) {
          return await m.send("*_An error occurred while fetching the data._*");
        }

        // Get the photo URL from the response data
        const photoUrl = data.result;

        // Send the photo to the user
        await m.bot.sendFromUrl(
          m.from,
          photoUrl,
          "Here is your generated photo:",
          m,
          {},
          "image"
        );
      } else {
        // Handle unexpected content types
        return await m.send("*_Unexpected content type received from the API._*");
      }
    } catch (e) {
      // Log the error and send an error message to the user
      console.error(e);
      await m.error(`${e}\n\ncommand:  nai`, e);
    }
  }
);
smd(
  {
    pattern: "boobs",
    category: "nsfw",
    filename: __filename,
    desc: "Gets boob pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://meme-api.herokuapp.com/gimme/biganimetiddies";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: boobs",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "nwaifu",
    category: "nsfw",
    filename: __filename,
    desc: "Gets waifu pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://waifu.pics/api/nsfw/waifu";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: nwaifu",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "yuri",
    category: "nsfw",
    filename: __filename,
    desc: "Gets yuri pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/yuri";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: yuri",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "dick",
    category: "nsfw",
    filename: __filename,
    desc: "Gets dick pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/dick";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: dick",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "lesbian",
    category: "nsfw",
    filename: __filename,
    desc: "Gets lesbian pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/lesbian";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: lesbian",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "blowjob",
    category: "nsfw",
    filename: __filename,
    desc: "Gets blowjob pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/blowjob";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: blowjob",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "bdsm",
    category: "nsfw",
    filename: __filename,
    desc: "Gets bdsm pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/bdsm";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: bdsm",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "fuck",
    category: "nsfw",
    filename: __filename,
    desc: "Gets fuck pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/fuck";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: fuck",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "fingering",
    category: "nsfw",
    filename: __filename,
    desc: "Gets fingering pics.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/nsfw/fingering";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: fingering",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);