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
global.owner = process.env.OWNER_NUMBER || "233531725160";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BibUVtZ3psZkNVTWlmUFhMZmprNU1mR2VPVGN3enpWS0lLNDhmZWdrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlFpZjVyT2hrN3dCT2RmNytLMnUrd0RtRjFlekdaTWNhc1hTNzVVMy9qMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQWpzaEJKYUs2RkNkYjRWNDRQQzd1V3dqdUZVcldNY0tPZUVJMGR6eW5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVzFaZDZ2anNNZU1mQWx5WGlkZnF5NWdscXNNSU4zVE9vc2xiejZkZm53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHRGN0a3I4SjNTenpRcTUrVmJGM3NmckZ3TGhMV2xtd3Q0VVBPV0NjM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJCVVk0aWNzYjJrYVhnU0JhV1FrWVVRbVhQS2Q5bE81eHhLNnJrdnlYVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEU5WG1kK3lnSTRZbzNjUmJpY0NNNUZ0YzZ2L1l1R0hBMDJoVERSS0lrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUt4VStBV3haMmNsOTdJdVZXd1JNcGJhOVFxQmNxN281a2FYb1pCcWlCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRKZEFmL1pveWx0RTJPY3djZXE5MjIwYm83eUtvMkhELytFTWFrMWxyUWZaUDdXYWdSdlRwWWExbTJSNEQ2T24rSjA3NGM5MUsrNU5WNGFEa0ZWU0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJMRHdNaDRJWm5DQ296ZFBCUTRFeTBobjVvS1BhT0FEdTRWYjJ0cEdlMFIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxaFc3RmFycVRIaXlpWWxYX1YxVXFBIiwicGhvbmVJZCI6IjFiNTA4ZDJjLTkwMDMtNDFjNS04Y2NmLTJlYmIxZjU2ZWI1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeVBVVnBMbzJ2Tml2UDNxOExCRnBjK0ZocHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2dQZmpnTkJBbEU5R29vaFhjNGpnWFZHeWlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQzSjgzQko2IiwibWUiOnsiaWQiOiIyMzM1MzE3MjUxNjA6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1S242QUZFT2pxeHJnR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVaWGZVWHVDQTV6NVJYNFZESHgwUENjbWJ5Y2toTmc2d1FVYXh4S1ZYQkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFuZmE0RUNDVnVKTFE4WE9zYUVCSGNXUWU3c25RR0IyZGVwQ3BpbkRhTVVpVlJ6a2hkSGIwRmlacG1lMWdCLzJEbUEyYnhXRjFXMzJ3eWN3VCs2ZUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtcWNaZE9mUWRpdExkcjZtZWlTcTNBQm9sbzVISzU5a0VMeDdOQWFHS0RWOGhTRlBBSGY5ZHo5V2VpWDVRQWlCSG9Wa01qaUVGekl3MHBHT3BZaVVCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzMTcyNTE2MDoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYbVYzMUY3Z2dPYytVVitGUXg4ZER3bkptOG5KSVRZT3NFRkdzY1NsVndRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MjEzODEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFJNiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
