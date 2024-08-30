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
global.owner = process.env.OWNER_NUMBER || "916260273863";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNVWnpkbG9OUGZMVFhnZXArUG5JVlVTZGtsTnJ2Z1psZlEzb05ZVk9Yaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm5PYW5WdmNtU0FZODYzdVZFTGpVRVM1YUtvc29oWWJzQW4rMlEzVlBBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSDhVUXhWRGgyYWxkejU2bnNuMnluRUtwbnVFL1Evd2Z5USs0U256dDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRbURvalZPOHJjRjB3TU0zUkhycnB6aEZtUVMwclh4NDFnOXM1RUN2ekFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNdTM5SWNOUDRieUZiUzh3YnJZQXFhdDNCSlRpMXE4WURjVWlTcmpmR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM5Qzd3ejMrQlhmS0w3T0szaVJHeFl6MmQ0TUc0MFBQTjl0SmRPOWlFbVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlUMlczMGZBZWNKTjJEL3JKbjcwK2JXdGYrV3NZMzNhVXRNQk55d0lsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWZydHN6MmdjNkpIdGpHNEFIS2k2Z2NpZmpZOEZlaGo5elVkWDhOUjdCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPa2x1NWNDQUtXbXplMzZQSVVhSk16dUlJRVpIb1hsdnd4cEwxanV2WGNoczFJZ3RveFkranRTNnJEYVZybTAzYkRESHhDTUhaeDBhTFViRFJzQkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IkdVcGpaV1RmaGJKWGhOQ3VvQmVFOTl4MVpweUlnSTN1ZXNyMFp6OE5JTUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRpMjFBSGhuUUplQUVrSkxHQjh5NXciLCJwaG9uZUlkIjoiMzcwNzAzMmEtNTZkNy00MTcxLTk1ZmUtNzljMDY1ZWU0ZjhkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpGUDJOWEN5N1NHR1BtRmY5WGpXaUVJZTlwYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRDJvQ1dCd2szYUZkYWw2b1pXMXJGS0FLSlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0NZSzdQMjgiLCJtZSI6eyJpZCI6IjkxNjI2MDI3Mzg2Mzo3N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqz8J2aqiDwnZCS8J2arvCdkJTwnZqp8J2arvCdmqvwnZqzIPCdkIrwnZCU8J2as/CdmqvwnZqqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcUI0UFFERU9yS3hyWUdHQXdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVzNBYks5WGM1NXZQVjIvdWR2RGgyTDBaSUlXc0VCS253QThMSjhKbjBRPSIsImFjY291bnRTaWduYXR1cmUiOiJDalFpN0dCeklYYXpIMWhjU0hEWFVWQStOU015MW1hVWN2UUVkMXFoeGR3WWFGaERCOWt5czZ1Yjk0eUpPWWlKVFdrNXhMY0JlczBKMCtObm9QVkpDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSDJpTEFwWndod0NIVGd3YktMZUM3QlBpSUVTYnZvbkJXWVNUQkR3bkVjajQyVE1HM1dUMmh3V0VtREozNFFwOEwyOUtVeitUdXdwL2hTOHkzaUtTRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUZ0d0d5dlYzT2ViejFkdjduYnc0ZGk5R1NDRnJCQVNwOEFQQ3lmQ1o5RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTAxNTQxNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLTXoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Mister Shubham",
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
