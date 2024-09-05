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
global.owner = process.env.OWNER_NUMBER || "2349031485481";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pLYTZWV3JzODl4MVE3Z1JuQjkvdzNDR1dhYzUwMzFUM2dLclJDbE5FWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXVSeTBSdjdmZ1BOaHVYME5oT3Ayem13R2xMNHl2cUNNaHJhUVFuRW9TUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRk5xQjdXb0ZuUlYyR2htT2RDOGg4d3hJNzlmSVRrN3NiWC9aZXdpTzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyQkpOVDVKOUY1eVlJaU41RWsycWVFRitYL0xWelNUc2NsOVo0bDZXbFNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFORUFETkY0NHo4Y1ZaRElsakJNeFZyZUR4RFAxaHVuNWd1MkNQNk1GWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BZ05XdURzaW5DaVd4VE5PTCtNeEEyUlRjN1pXSThOamdKQm5BazduMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpRc003TlBDMzZCRG44RXRlbGczQXREeWJRTVlmQlZsYS9QNDFkNXNtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUNFeGM4TkRKU1cwN2htL0V2NDkyN1JmVDNQTkJWYXlRT01lOFAzNzduOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlTVZZV21BMXlQUFl0bVdLTlpGa0RLZkdKNWhyNndQUnZBR1A3elUzVU1SWlRUT3RyeVdEaXFlZWdybjkrM2JHNXVaSTN2ZW9Bd0Q3NGJQZkdDTENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6Im8yMklqbEtpZFV0eUVybVdycDlTYSs2UnFPODI2SFc4ZmNiS05BNVVoQnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAzMTQ4NTQ4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUVERTMyOUFCQTAzNkU0M0QwOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTM3NzE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0Zmwwczd4T1RnS1Jaa1UwWm1rSkx3IiwicGhvbmVJZCI6IjI1MGNjZjE5LWQxYjItNDk0My05YjczLTU4ZmZmMTFjYWJhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjMDZEbWV6N096NktST0VtUTBvK0ltRzA3K289In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx1WVIwZWR5R1J0elV2a2s4SkVnODlRMkxoND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AzSWgvWUNFS1c3NXJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVFNXVoeHR1bkRWU2Vqa3RtV0FqTWpVYTFobTF5cmtSVnpLMlhKY09uRUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBXSVYwS29jVVpCYzBDNjBsaHJBdSs5K2ZicEZmejdWUVBTSldjTFVtYzlzSWVpZzVEcVUxcFFFK01DVk94WUtrYWF6cFhvaEc4TGNKbDQ2dnF4SWl3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRGZFM3RBU284ZG50ZGVRNDdMT3h5NXl5NVFLWFZSUEdzcEo2TVNsaGphQ2FybUsvMUNtaDNOU09tUHFIVVVsaThiSTlRRnd6N0d6cy8wWUdweHZBQT09In0sIm1lIjp7ImlkIjoiMjM0OTAzMTQ4NTQ4MToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJGYWxsZW7wk4O1In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzE0ODU0ODE6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmhPYm9jYmJwdzFVbm81TFpsZ0l6STFHdFladGNxNUVWY3l0bHlYRHB4QiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTM3NzEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU96byJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "fallen",
  ownername: process.env.OWNER_NAME || "isaiah",
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
