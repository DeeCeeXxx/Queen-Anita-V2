//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlzSFFqc0h4QUJ1TEVPeE5neC9WMndLa2Q5WVNpdFdJQjZsd2ZOOGZsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkk0ZVZERGdRRStNWXExME9nRVhXTU5VUWthRDdjd0JaNDhwYlBrK0luUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQnFRTWQ3MXdKSklKSkpvQk53UE8zVG01WTg5U0RSL1U3eUJrTW83UFVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFU2JZS2pUUzhkTlBGaGtYdEF1VDVBemZXY21Vc2VBYTBQZW9XLzg4b0JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKVTRpeTFOL2ZHbENtU0ttNTBKRHAvaE4vejNCMVVnNzZvRXEvQXBaMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdYalRWN29LL1p2S1BEYkRjVWFSRUhRRitOMk1pdXhEMGl3anhXbkxtVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0U1NHNPakorR0EvSDRuOTlIbFVBcFoydm83TDZEY0xPWkpVTjJoMkgzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW5hWWdheUF6eS9WZ1p1OG5tbFcxYmkrQlB4aVQ2cCtlMkREckVPaW9XWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWaGhDTGJ2YkRMMHNYenJyY29qeCs4dEtuUzZQRDFyN0dVVWI4Ly94RnNVRUlBMTgrbm44dFNqcHRJcVNRMUFFZWFhQjlUZ1l1TEVOMTBTVjNTK2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6Iit1RUhQdnFVcmxJTDdTbVUyNGlReTdSRTN3SkhJTXkwU3hnNVNESDJ1M009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNJaGNUdU1CUk1POUxwNFRqM19nVFEiLCJwaG9uZUlkIjoiMDk2NGE2M2UtYjVkYy00ZTg5LWI0YjgtMzc1ZWIyYWIyMWFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFmbkk1K2hVVFM1elBJM1RBUlFHeHRaTkNiWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZVZWQ29lSFQzVmhxb3BkVWYxNC8rR3B5Qjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1FQWFpDU04iLCJtZSI6eyJpZCI6IjIzNDkwMjM0OTU4NzU6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdjOTg4Q0VPM0Y0TFlHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3NQZ21qZXhpdExIYjhDd3F2cmxTZVZFZFkxMmdWWmFRc3pWQndyaGtRWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid24xUzZtNElaV0RITFY0YzV1QStTUjMybjZLTzdCMGpGVDdFanJ1cThwNWhJcmRHVHpRa3Uxcjh0N1ByM0NyUEVGcldSTVgzOEpmS1NTeVVNdW5aREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlozcHFUQUtlL3MrTTJPdUFWdDFWVFRuNmlZQnlTTWNINlIvNDZHeXVITk5abUtmWDBycHhpTWpxY3hjRjA1Z2VMK2hyRE4wL0QxWjdLOExpTWNuOWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMzQ5NTg3NTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFMRDRKbzNzWXJTeDIvQXNLcjY1VW5sUkhXTmRvRldXa0xNMVFjSzRaRUcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0NDA3NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVpTIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
