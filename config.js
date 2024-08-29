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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09FWHM5enp6VXBmL0N4S3Q0blFHdTVXRDk4V2poL2p1YTVKU1FzZk5WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW0wQmlKczEwd2U2YnFXbkNDTGtYWitjTUZ5UjlMVUlOY3oxRXIvRnBTYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTUZlcVRBOVZzNTdhejlFWXJNSnpKcW81MUdUYXQzczVnWFcybXFGMjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySTMxblFEbjlCcVJsSXp6S2IyTW90KzkvRmo4V1pDWWJtUmNXazRkeUQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEcXBBY2JLVVZad1pFUUZYZVFuNnEzWnNVQXkyR0J4ejdFbHZEVDdISEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZMS24yQVBTQmlNZmEyaHJ3UUtja1RZYXl0MnNyY1Jtc1Fvd0RzZjJsR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVvODdnaFcxRWVycTRWOVZXVUtvcndIREg4TVVIQitSQVZhR3RYYjhHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2xnOGZVaEl2NlV4dnM1WnI2eEZ5VHRVc0dUeXdNRXNzYVdPOUZxL09Ycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk2b1lzeFFpUlBLOWFHU0dXc0V4SDE1eWpXaTBINDJ5eFpTZDZ3U0hYU05yNFdJVFhBVTFDZ3NObE1iZ2ppbzVPSUZKN2pjb2JlRXlHSHZUZUxmTUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJTSUF3VmZtTjdzVmM2NldTZzRuUHFOZnExMXdIeC8vMXdrZ29zL29xZlFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjE0MDA2MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTg0MDVDODVEOTZEMTYwQjdBQUE5MTg3MDc2Q0RCOTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDk1MDY1NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiam1Gc0YtRmZUSi15NXBwdC1TYUlzQSIsInBob25lSWQiOiIxNTc1OWZmNy1kYTlmLTQ5MWItYWUxMy1mZjI2ODZjMDkzNTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREZ0b3pXNHhoK2Q2ZEg2YU5ZN3BLejllRDA4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhLTlFDMjExMVB3eWhRQllrRk8wSmdGOWdLTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUVzNWMUFKSCIsIm1lIjp7ImlkIjoiMjM0OTA2MTQwMDYwNjo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im5paW1hbWFyenVxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOM1dyS3NCRU96UXdyWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxOEU2cUhWSmZHcHpVQ00xMFdHRXJ6U1l0SzFyVFBFZ2lxc1Z6VkVacmpZPSIsImFjY291bnRTaWduYXR1cmUiOiJ0bDlhRVl5SVF2YnUxSktRdEFwSmRDeENFSytIOWpvRHowNmNJZTM3cWpOT2dWTDc4WGNETEF3bW00bkpOT1NacmVPblIxT1BlWDQxRkgvRE42UG9Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiczkwWGNwcWZ1YlNDMk5xWDBXbXVNSTVieXA4eHcvNUgxQ0NReWY3akgrSkZ2OHJlaUI1Q3FVZWVWQTJRTS9LOUFWS3ZOdkdtdDF5M3lJVVZxQmppQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYxNDAwNjA2OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXZCT3FoMVNYeHFjMUFqTmRGaGhLODBtTFN0YTB6eElJcXJGYzFSR2E0MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDk1MDY1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLazcifQ=="
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
