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
global.owner = process.env.OWNER_NUMBER || "+94 71 774 7027";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkloT09aNytiSzVUdlZDUU1nMTRsc0ZXTXo5b3FrSnRtMDhKSEQ4MG5FQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTVrdEF2b29QcGpiME1GTXhLYVZpbFdESDY1RVhHQm5jbk1TZmpvTGhBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQzdLRlkrZFhwSUhHRTdOMFozNktsUTFZT0J3Ym1oMTdYN0k5MTNEMDJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxT0RvZ1dJcjkxNUV0TUhsVzQ2VmpDUkdRREZ1OGtWdFAwUEdaMDZSQmcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJc3dNWTJrVFI2VGhHUnF6SFh6WlB5Zk9KdXYyc1NzK1pnQjI5VFZIRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY0UXI1V2E1SHNURENNTzRlRHp5MlBvYXY2b0p1WVlFUHNxbmRQRXhLMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9oekphRjluR0gra2xtME9rZ3FKdWJDTUdmRWI5T29xN3dkT3BlNFpuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1pKVTBjbUwxMm9oVW1qQnZmdXZHbGdoY0JHenpmTllIdDFjVkhxUmxTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHTlpKeTcvVW80RlBrcXppb0dLZnlvRmlWRm9OWU5CUTlVU2ZzZnppWkFuNmpkeEVNdnRDamU5VmRNcEkvN0tvamRpRW5meDR0VE8xcG5NUzYrYkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJjQUdRYklJeGM3MHNvZ2VwOUhSKzMwTDlBaFhaRVRNbDRpdXVQczFlaHRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMVXEwcE5UUVJaR3BpS0I4VE5GTEh3IiwicGhvbmVJZCI6IjMxYWUzMGRjLWNhMTUtNGYzMi1iYjdjLWRjZjgxMzAxMTE5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1a1N3WXNNcEoyVEJ5RFQ4a2RER01QaVhPM289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lwZjE5M0VOejh1SytGcHRRNkl0RkMwQ09jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1WRUZTNU5SIiwibWUiOnsiaWQiOiI5NDcxNzc0NzAyNzozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hvCdmofwnZqH4LyS8J2Tl/Cdkr7wnZOH8J2TivCdk4zwnZK24L+QIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN0FndWdCRUk2c3M3Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHeCt2dlBSOGp1TXJ1em13clExTFE0aU5aTlMvc2VNelVYM2ZxTExram5FPSIsImFjY291bnRTaWduYXR1cmUiOiJLUGcwNTgxOVBHdmNOVjIvR1JMMG1xR1FRUHNSWlNYdk8xODVESTVHSFBtT0dyVllwZGlZZm1qYmZpQzFZQ2pMeUN3M01LcmhJUnh5UTJGZXJJbmpBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidGRWQ29xaEx1M3o1WTJoOC91K0RJaTJhV1RNUG1TNWZYcndocVpQaWN4VmQyUFpzWDRJOVdDcy9oMFVWdno2ZWVRYi9ZanowWmExMTFha2R2UlpWQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNzc0NzAyNzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzZnI3ejBmSTdqSzdzNXNLME5TME9JaldUVXY3SGpNMUY5MzZpeTVJNXgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg4OTQ0OTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXZmIn0="
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
