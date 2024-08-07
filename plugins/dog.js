const {
   smd
} = require('../lib')
smd({
   cmdname: "dog",
   desc: "Send videos of randome dogs!",
   type: "misc",
   filename: __filename,
},
   async (m) => {
      try {
         const fetch = require("node-fetch");
         let res = await fetch('https://random.dog/woof.json')
         let json = await res.json()
         if (json.status) return await m.reply("*Request Denied!*")
         m.bot.sendFileUrl(m.jid, json.url, "", m, { author: "Asta-Md" }, "video");

      } catch (e) { m.error(`${e}\n\nCommand: dog`, e, false) }
   })