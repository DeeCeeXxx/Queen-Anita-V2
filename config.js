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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5oNFdKNXRJQlp6Uzh4N2s3N2F3Q2FWRmxUOXhpUlhpYm0yQ1BObFpXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2pRUjZnUXdSaFUwbWR5c01DT2poOUp0eVpYR0xNbXRBK083YzNpQ1ZBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSDY0cXVXbjVLRDBnR29tbGZUQ1FTVnJEbXBiTDdQNTVIbXQrK3lOSTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvU3NaQWd1SzN1Ni9haE1ZN0xRNmxZcUlZeG0waXdPd2hqQkV2dk5QMWwwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQVkNRcmRnN3VJMXFSN2hyNElGcGFZSmNUSGxkSXMyOUpkUEdVZUs5a1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNpSXFsMW1VRWMrL09MTitFNEZhc0t5SmpLU2RweXNqVEF4ZU1rTGlNRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Y0WlBwbHVCRU9BWFpoZ1VzYUZsLzA3ZmUxMlBtV0tqZWtaTzJWMjVWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1h0RkFXTHZmT0YvUDRwSXpCRXNFQXNzV2d0dkZoWHlwa2h1UVhtTWlTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjYVozbWlSUmh1Nkd5WDdNWWZKb0lTVVBYeEN6VERkK0FlMWVVUkpVSk9WajdISkRPbmNUQ1JaRlNDWEhycWhZd2loVEdTMi9NZHVsdkltb3grWkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IlBmMWNyYkJmNS9hekV2TGNNQ2p0TjlGWU00Zkp6d0tDbithbkh4eTNFMmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpMUXBJODFrVDNXa09KSFdkUkFJcVEiLCJwaG9uZUlkIjoiODZjYzRmNDAtMDdjMy00MWQ2LTgwOTUtMDhhYmNhZmQ3MWQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFWVzdWRWx0d2Z6YkcrcjFpUEFjdGtQWjMzUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIMVZNelBtdUFWWUlGemhoQkFnZE1kK01hTlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlM4U1NDS0UiLCJtZSI6eyJpZCI6IjkyMzEyNjUwNzM0MToyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqlrTqlrTqlrTqlrQg6pSq6pOf6pa06pOg6pOi6pOU6pOw6pOjIOqWtOqWtOqWtOqWtCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXpTODNFUXpZaWp1QVlZQ0NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSkJGQWtZUm5uYklQcmtNQjhLNEUzQUt3Y0wzWEJhMHVmUFIzSHFuOEhqMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS3IxdTYxRnVkcC9ETHlsVjAyRTZSUmlYS0dRelpBMCtBVlZ3eWgrWnJqbTdhZldSbmlWeWVXSWt4dm1Oek5jaFdQUkUvMnA5bzd5SEdFNCtxNDFiRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRSMkxnd2d1VUM0eXZEV3lKc040a3pMZVlDVGM2dHFtdUpuUC9KUmhqU0hOems1RVgweW1vVmVDRUZsby83MFBPbG85RHhGZUZZRHVTYmJqRUtzdkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTI2NTA3MzQxOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNRUlFKR0VaNTJ5RDY1REFmQ3VCTndDc0hDOTF3V3RMbnowZHg2cC9CNDkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg2Mjc4MTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1lpIn0="
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
