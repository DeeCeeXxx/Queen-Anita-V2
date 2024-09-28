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
global.sudo = process.env.SUDO || "2349124114857";
global.owner = process.env.OWNER_NUMBER || "2349124114857";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhtUmZkU1czUldaVXNKS290cGxnYWNyU0k2Nzg0Q2xyVUN6OVNUZklHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBaUHlzQnRKa2FpNjVVZy9PdFZQVGVzNHBHYzYveWpQSmZTZmVLZnV3VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQWVPRDRuTmNaVnpNVVg0M1hEajMxZy9uaW15d29KbXFiZVd2VlJIMVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBM3RSbEJGMVRtT0RiWmhoTCs0cUdIcWdpU2MzQmE2RTk5YzdJdFY3MWpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIazlNSVh3MURuU292dnJjNTFYZzRrWnAyaGl2TmVJaHVsbnVON3M5MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR1ZU9naExFY1NpN2UrTUVzUmlGbklpNHNRQ294R0hSMDl2MGIycTVaanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05Zdnp0RkhuOE1RYmdPN2ZMTXllWG5QamFTaGI3MjI5VUhadVFkVlhGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHRDQURUYU42ci96U25QeVVrUVhIU1hzelU1L2xET3V1ZTRPdW5ZSXZXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBWk52MHFNeWNoWWpTQXpBa1BiaUN5QnNHbWNUWmhVUEpVT0VYQURJSkJyZzdRcHFSR3R2cmhqZEVFQjdTaFYwV0xjWUZvY2ppYVBTVDJscmxFRWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6InBHRVBSWUZqYS9DT2F6UWFKdUhQVXY4cUlQSXhUU0R4NitiTmNTNTJVQk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlE1MWJJVFE4UVdtM1BDd1lKRWdEWUEiLCJwaG9uZUlkIjoiNDA0ZTIxOTAtNjRlYi00ZjVkLTkzODctYjFiYzliMzU4NmE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRWVGQvL0VHZmh4RC8wOVZPZmx0TWlIRWhkOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUL3dlSDNvWjdTaExOc2dsQ0pHZm5yZVZqeFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1Y0TTcyWFIiLCJtZSI6eyJpZCI6IjIzNDkxMjQxMTQ4NTc6NjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HMnM2TUJFS0tYNHJjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVGOUdIMFp3dTQyd3padkNjUmxYSUVVQWo2U00yNnRmUEg3WVlZWk1kbFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitZWW9GY3VodmF1RjJjVlc1a1FPY2ZvMnB3OWpTR3FjenNJb0drZElSaFBaN0ZaY3JSTGxTQVpjTDRiaTg2NThQa1hpZVhvOERuWkhhWHVrSjU5SUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKdytHLzE5SnU3TUlmclZ4Q0xocnIzWGhOK2ZpZWxJRGdkY3dxT3I0cTEzdzZxeGErWnVQY0xwS0RNUUR6N2cwUlBlWW1Lb2ROSmlmV0U2d1VvbU1oZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQxMTQ4NTc6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVJmUmg5R2NMdU5zTTJid25FWlZ5QkZBSStrak51clh6eCsyR0dHVEhaVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzU2NDcxOX0="
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
