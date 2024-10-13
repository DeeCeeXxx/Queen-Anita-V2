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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://rush:20041025sa@cluster0.ysi6dsf.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "94743037153";
global.owner = process.env.OWNER_NUMBER || "94743037153";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1RclRTTENhYTNMaFBIT0NjYkRwQUlZaFMrQ0xKdXVxMjhmc1g4eFNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzNsS0VVNHRoQkRzenRZUmc0SDI1MXRVaVVSTTRxenU1R0IrakEvQXYwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ09CeVI2OERJL2JicE9qaVJXRlBHemlHNXBCeTg4WlpjVEw4ZUlFcGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VmxWUXNkdXRqa3d2T2FIbkJBRnZzbFNvRElzVWRSc21FWDdDRTBabTB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOTzREcVRGemp1RG9aR01PZTdzWkxuS25EYS9nRXp3bkhyMXlzaVJ6WHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI4ZWg2RUZiakdrekhXM3FUeHlSTFFISHpld2tCd1hsZFB2L3RWM0dtRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkN6Ym4veTcwT2djYkNKd2ZMaWpQNHRxWG1YN2s0SUtoeFF1RjJac0NIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWUySnpHbk83dzYvT3FTemMxZWYrMmI3ak9hckNpS0h5T3ZEWVV4WjVXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkoxVytudlkrN3JLNmJoVjNDYmxjcE5kYVc4QzI4aVN3dXBZZnMvL25iejMxZnUvR2tDeHZiSXFhSzZIcTQ1RlYxRHdMMk8zMVFaNXFNWFhJaGprYWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJTTWlBbTZxUTRVMG9BRlQ0c01hY1dJSlM0T1h0QXQ3cU9YZXpWOTF1dmtVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzSy1kMTdNUFN2cU1RRlBFWmJZalpnIiwicGhvbmVJZCI6IjliNTM1MWFhLTA1MGItNDA0OC05NWU1LTcxZTA1ZDlkNmM0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibDVpRGtHeVdYNmJQRTM0QUZvT2dnRGlSVGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXF3NGxqeFA5d3duSEZBN0dHeEVjSWk3S05ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY5SlY1UUNWIiwibWUiOnsiaWQiOiI5NDc0MzAzNzE1MzoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYWhhbXNhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKN3JsYm9ERUlhVnJiZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDTHlLZC8wWVFFODZUa1RmVFdNU1NQYWVmb3kwNmR6M2VUVkdJNmhZaUFJPSIsImFjY291bnRTaWduYXR1cmUiOiJIOTM5b1hKazFrdmFzdHJOcjE5c1lsS1M1K2hENWxUTTZPSGd1cWZxTUN5R3R0WXg4d2NLQWhCNlBVS0kyMnkwV1UrNVU4RXBqOHFHQTE0aDY3SVNBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzk5YW85eFdWdXNNaHRWb3RyVC9wQlNJbkEwbE8yb0VIRllmMkxSNzc2Q2s2WXVScENBYjNaL3k2TVRPbFBrZnd4VzAyQWpzOUxlYk5TOFpSM1JnalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MzAzNzE1MzoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRaThpbmY5R0VCUE9rNUUzMDFqRWtqMm5uNk10T25jOTNrMVJpT29XSWdDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NzkzMjM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1tQiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "ISHARA-MD",
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
