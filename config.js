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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pEQnhUWDArWHhnWXphUVU0cUxycWtMbHIrdG9VeU9iSmFEYzN4RjVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0plWUV2bnd0dWRoKzVlWUlYY0pUbmhKczczVHJBek82R2VsQkFOMkNqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T3dpeXYxa1ZDMm9ZREJFNHdPUU41ZkdrNlZSUzZLL3hXZUpOWXh2blZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJOG0yYmFkamJEU0NWTGIySlB2MFdZZERRV0RPSVJIcHh3SW55Wm00eGlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJUUluZ2xpVy83R3hJU2ZxZy9FZ25HSmM4WTJIZnVUQk83RE1oRjFDVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFKV3BmK0E3djFwV0NzUmpxY2kySHNFSitSL0lsQktNY2dmRHB6UmdZU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VzK3lSa1FucXJmSUFTRTlwYURlS3ZFRHlVSnByb3NyN2QzdzdVdGNuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibG90M3BoVlNRSmsrdVg3STdMUlZNbUpheUowc3NvQWdLZ29mVHhkUURIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZQVXgyQ0dEbS9aVGZWUk5IaDBmQVlzdnZoZzREUWRwaUZwRkJ3MDBTMWZjZko3cG4xd1lVVndxVGJOdDBiZU1ULzR6YmpCK29vSjhmYlZzdFpDUWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Ik1OVmJNajZQS3NtUUk1WHk3RzFnZ2J3RzN4bi9PeTRYK1BjODlJWkJDRnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTU4ODc2NjkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE3ODQ2QkVBNzdBNjNDNTYwN0FGMTlGMDQ1QzRFOEIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzMzYzMTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJnaFItZnpuUzJlSmNaMFdHa3ctSEEiLCJwaG9uZUlkIjoiNjY2NTMzZTItZjc5Ny00MGNiLWJjZTEtOGZhMzFlNDBlODg5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw1aWVIR3drc1JQT0hmY1doQWc4L0E2amJOWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUjE5REM2MTRHL2RzZlB1WHF1MlppWmoxUDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEdIV0pFSzUiLCJtZSI6eyJpZCI6IjIzMzU1ODg3NjY5MjoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZef8J2XvPCdl7/wnZexIPCdl6fwnZey8J2XsPCdl7UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtN21Rb1E1cFhhdGdZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFsdVdKL2pUdldPS2UxZEJYSjNWUmFacisyZGpLTCtHQlNGMURiV2hoakE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZmWHllYlBwV0hka3RUdG1IZlJXMVpWc0FwVzZYRFh5WnlqUkd5NThNRFJKS25lVG1qaTM5M2w1Z3hNR1JzSGNQOEF0dmlnTklWVytNNmtPNWZiVkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzcFRyeVBGcm52RjIrdzR5cTBMVmNDQkE0bGNqZUhuR081anc2VWVUakZFcjBmdWxyYWVONTdvNzNDeHJSdmQ2L0JnOER3b3hnRENNR0JrNExWREFqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU1ODg3NjY5MjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcGJsaWY0MDcxamludFhRVnlkMVVXbWEvdG5ZeWkvaGdVaGRRMjFvWVl3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzM2MzA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUExUCJ9
  process.env.SESSION_ID ||
  ""
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
