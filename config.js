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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUIwSzRVaXpSYk1mYUVLOStDTEdxY3dQT3VtNW4rcjJsdWdBVUZ0dHptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVpaTmFCV01RRHMxWlIvMFpaR3kyZzlHaDN1aWVSei9Zdkt6SG4xVHYyOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRlQyYUZKWTlyTEhCczl3a3N2aXAyc0tBQ2FTelA5MU9LZ3NISW9sa25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WmZmQllWNFgwcFVieU5RSjlaRElYZ0daUU5hVzlURkU2OFYzNXhzNzBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCWXdrTGg1aG5iVTRwWUNjaVR0czhzY0RhMU4xYmVmVmVZOEVGYnRIRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhyNHJpbmJDWFlZNVBKQStTT25zZkMvMk1sMHFMSXRnSzg1TFZyUlQyUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVA0Uk1LTFg4MVRmQ1JKczBPZlAyQ1VaTnIwaHNBSVlKTGc0c3d0cmNWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXNRb2U0aEp2Nk4zN0xXQ29IQ2tsQURMdGRhZlU5WiswRU1adlVGWUtrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh5Q3Nhdk5sZFkrVi9wT2JONVZJejIzRW9MUTBYeGc4OUt3MjNtY24rOFNMMmFncGpaYXNLdFo5R2ppY0ppcDBVM3pncmVIK3Rib1RFWEV6a0JXemd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6ImJnNGUyUlV6cEh4QlBXaDlhWVdxWGdXbTY2NGdJZnNWNlJSa3RRZ0lTcFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkREWmdjTmQzUkwtRGtlYlpZb1RxcWciLCJwaG9uZUlkIjoiYjlhYTY5YmYtMTdiMy00NGE4LWFmZWYtNTI4ODI4MWYyMjlkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk0QjNLSjBWaU1sWVRTN3VZRlJGNWNTL1hiaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1S2RrTzR4VWt3bEROYU5pT3ljczFoMk5FbDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0NLMlZTQU0iLCJtZSI6eyJpZCI6IjkyMzA5MTYxOTY5NzoyM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1dYbVBBRUVPV2R4N2dHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicW5TMEE5WVdqZnZTWkdvbndvM3RyMEMzak12TWdpRVQ2YXRQU3k5SFR3OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidnFITmFPNU1YaGdUbU9wNUhMTFZvWWg5M3ZPbFFNNkZNRTlZczJVblFxVFEzb3pzb1M3Vnk2bE5sdDlrOVVHc2JpTFhwSytQaVBTZjBUaVJ4NE9nQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5kcWk5aTNkUkx3Q2ExZ25CRXk5RmZ0K05KUTVXaUJMeUhuUm1CNGFXWlB2N1ZVZ3Z6OEJTdE9DZVJ5VzdLMlpKR0Y5Uk44ZWFHeWlGY085MitUZWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDkxNjE5Njk3OjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFwMHRBUFdGbzM3MG1ScUo4S043YTlBdDR6THpJSWhFK21yVDBzdlIwOFAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkyMjAzNDN9"
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
