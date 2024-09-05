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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxCeVV1c2p6a0RmcGovc3M2VEQ1azNPbEN3NTJmeWFmNXNWbW1RTHlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUkxenlpaks2ZFA3RnFOVXh3cUFCaXNubVJ4alYxeTZGOVcvUkszOWt6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTjNpL3l5YnFwdklRcm5IN1dDVmcxWFl0ZVV0ZnZYRTVXZ3BXdWFYOEdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJON0FtN1R1ckVyU01rcmZqbTdZUHRhYjJ2c3N1UjhuUFU3VnU3NTlFVGxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEbFRSSXl2NGUwMjVEaW4rS2JrbXorMnpFUmo4ZVRzaEVDUVVpMm9PazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpuTmE3Z1ladmdDcHhMT2pKN1lRVW9NazJkNzBvZTlqdmN3NWk0dTJSQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFzaVV5VHQvK3dKNTVuUHhoT1NqSlJCRkJUOENSakVOTXdMSjRTejEwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEMxTitoWXZ6NTNPa3Y3MEd4OEkwQVF3bnk0YSt1VERiUDdudFEwM3owST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpqVDhlU3hBQlEzNzVleitGOFVpdEVyVGl2S1RHbG5HU1IvQng5anRFaEdzMzFheUlXVy9LZDNHS0pzQTJTellRMDdFU0RUUHExT0t2R1ArWUVTV0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IkFSa2lmbEU3cXFtTG9NRFZuK3JqUGpYK2NsNFBFcXhwdXc5WE1CZ0M0YzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2MjU3MTAwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNzMzNzk3NkI3NDFDMTg1MTcwOTMwQTZCRDNFN0ZBQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTQwOTcwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRb2VhWkN3TlJSaThvbDhTRnVEWmhRIiwicGhvbmVJZCI6IjU0ZWI1ZTg4LWUwNDQtNDI2OC1iOGVkLTgxNWFmNGFhMGQxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkcEJWZm9KbDBXTXlXMzZlbFNYczZzV2hyVFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJYUEZZV2w4MHNYZ1NoNEpTQXpIMHZ3NUg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxORjZMU0UxIiwibWUiOnsiaWQiOiIyMzQ4MDYyNTcxMDAyOjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TV256d1EyZFRtdGdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9MNUI0dUdnbkhhM3ArM0Y0QjJlV2M5ckpyaWVUREgrekhVTXEza01oRWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlR3ZG9vbWNwZGJvejYrdkNBR1B5MWVNWXptVnYwaHNRc3FFMmp1eThaOHdVT0VZZWVJSzN6R3F3MzZHZ3VYWHpHMzE5RGhoSFI0T2dBU2FuYUJuUkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPcGpCMjB6Nm1hYUpTOEJIelF5MUE4ODk1WUdpVWdUZ1JqZVZlNkRXeTZJOWxnUnhzV01OTkVEM3BxNTA3N3RyU3ZsNkl5V2ZIdHcxdmZ3OE5VQW9EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjI1NzEwMDI6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaStRZUxob0p4MnQ2ZnR4ZUFkbmxuUGF5YTRua3d4L3N4MURLdDVESVJJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTQwOTY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0wQyJ9"
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
