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
global.sudo = process.env.SUDO || "+2349061400606";
global.owner = process.env.OWNER_NUMBER || "+2349061400606";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU43OU5FbElNNDVVeVZnUjA0UitGYktPZk9UdGN4R3Jzc2p2ZnlvNVZIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEM0NWVUcGNqV2RpTm1qZUJFeEYwWENpREI4Mk9vc2NzQUlhenhRaXpXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSk9GNEd2bFI1azJ1dHdaNTVzL0NyZzRPcllSeDNHK0hXcnREalRwMEhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTXRDUDlKQ1JOUWM0aDI0bDRvMGEwQ1VtUXRuems5L1ZoUmtDSncvUWs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNMYzRTa3VWcm9WVkhUd2NlRXA5djUxcXFDQXRoMHk5SE5XdURxMnlpMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzMkUvMzlMekxJMzlQUm1Hem94eDlOMVBIZmtmb1ZpZlNlVWVoL2g5d1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Y1bWtlYzhQcEc2YnNkQ29sMzdRaGJzOWdUZG1EY0tYM2gxVHNURmpHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGVvNm1pZkZlaEJiSS9ZRjNteXQ4bm4wS1Vna0VzV2s0SWVHYlJCZUkzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg2TzJpaktJYWtTTldOa1BOV1U1UFRJRHE5NGFFMEl4K1oza1FpQmZDSVBJOTJMQ1R6bXpHMlBiQ2J2UjNORHJMQU95NHdRVk84TGxqaDMwYjdnTWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJpdTVzSWYxK29FWHQ5K29pbjVuWmRyTGIrendWeFhySUpNM3I3NmowNnFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjE0MDA2MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzBEQjk1RUQyNTc3NTZGNUZEQUU4NzBFNjc4MDA5NjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM4Mjg5MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidmhhSFRWelJTMXVBUVBhendaQUZrZyIsInBob25lSWQiOiIyM2IyMDgyZC1iOGUzLTQwM2YtOWMxYi1kNTEyY2FiOWZiOTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1p2dE9uVnBZcDVsekFvMFpsTXg5c1JNT1N3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdocVhHR1pVR1YwWU9ySlVBTFNSczBBTUwxcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0UTRESDQ4NSIsIm1lIjp7ImlkIjoiMjM0OTA2MTQwMDYwNjo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im5paW1hbWFyenVxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON1dyS3NCRU5lQjNiWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxOEU2cUhWSmZHcHpVQ00xMFdHRXJ6U1l0SzFyVFBFZ2lxc1Z6VkVacmpZPSIsImFjY291bnRTaWduYXR1cmUiOiJQTEhKMElvRzlxWHZoQ05KcXVHZVU4Z00rQjhSS0w3T3BLMkljcE5JNUdqRy8vT29QeG55emZpSnJEQkx1NG5VNFBrWXhkNWlPU2dCalhYWFhPSVJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSmtCalNiamc5bXBjb244U1pQVWtjdXV2NnlHUTh0cVVxZVFGckVLdFJKckRQTEs0eXFQbkhNbVNmdGhiOGRFWmN0MUhtOFlZYW05WFJmVnYxcno3aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYxNDAwNjA2OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXZCT3FoMVNYeHFjMUFqTmRGaGhLODBtTFN0YTB6eElJcXJGYzFSR2E0MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM4Mjg4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLbEEifQ=="
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
