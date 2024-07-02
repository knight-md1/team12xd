//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxrckpRUG1neUhQUWoyOXlaZGpjRlVuc1g5S2R6Z1pTQ3lRMmlueWttaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGtXN3JGTVVGQTZVemtTcFdpSlZpQ0VXLzRhME9sRDZhTXJTOTlTdVV4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQVRyaHdKaUZYUCtzMy9TeWpuYnBzckc4NUNZcHNwaVE3ZHk4MXVZZjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBNjZKYllVVFpDdGp4K3Z1bFZaUHlva0YvR09PWjQvSDZqSldsdWs3V0FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPeE85UlRJWXZRZTRKY1hCSHh0eVkrTnRxa0FONk1uVXo4Y2Y4NG5PV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVac0VqMlV4SUgxMDVnRCtmUnhZSkFQcDBNTDVuaUQrVU1CQUlla3E5RjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZQbzdGWFhCdE9xaFRDOEQxdForSFA1UXAxYi8wYnhRcndmRVJGdjZWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmxMTTh3MG9aMlJsdmJ3RUdxOFhpZEtnR3MrNVFTZnZaV3VScHUrRUp5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5BaE9UT014eDVjRUF2dUdvMTEvdTdLVDgvRUw3WDN6NnZoKzIvTDBXZDNBQnp4N0tUaWdtWithNVdEcnRJbkhZRXZDMjJNcDdWRmlLcFFQMkxoN2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6InVsdk1nZ1BCK0p3dVNCdTZLNnBsakREKzNXRVVkVUpKQkN5ZllxUzNsK3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJtWFVuVlhaVDlXSF9RbXE2VnhsWlEiLCJwaG9uZUlkIjoiZmE3ZTA3ODMtMmI1MS00NTAwLWExZDctMTdmNDE3YWU2MWM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitYTnJSTHkzUUVGSEdwSThmTDRiN3Q1Mk9WND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLY1doUlZvSkVLUGdFMXpqSlJSRVhONkU2OXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVBKSENKS00iLCJtZSI6eyJpZCI6IjI2Mzc4OTYyMjc0Nzo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWGUrYklCRUlEbmpyUUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQRVVQTlhCSTlucUJXejNwOG5KWDRNUEZhWUErNVBnZXVYdFpNVzZiSEJjPSIsImFjY291bnRTaWduYXR1cmUiOiJUN28xTElDUExzVkwzeTJMNFJ2bVZVeGRoaWlEWlhYMkR3ZDV3Snk1YzdGRnlMblk2cFRqQ2pJUmJBM3lpQTUvaFpJZjJkVE1ObFRlV2gxWVBLWW5EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib2VFbnRFQmNxTWpyNVZvczd2bGtOTlZtVk5EQWFDV0lDNnRVaVBqcXpSazFuL0FBZ2NxRzNYMUp2NGlWSmtQdHRkbnNmUHUwd0diK1R4WXJMVkhqamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODk2MjI3NDc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUeEZEelZ3U1BaNmdWczk2Zkp5VitERHhXbUFQdVQ0SHJsN1dURnVteHdYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTA3MjEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsybCJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263789622747";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/af6157d4eaf3d5f4928f9.jpg",https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WATSON-MD`",
  author: process.env.PACK_AUTHER || "WATSON-MD",
  packname: process.env.PACK_NAME || "WATSON-MD",
  botname: process.env.BOT_NAME || "WATSON-MD",
  ownername: process.env.OWNER_NAME || "watsonfourpence",
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
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "fourpencewatson9@gmail.com";
global.location = "Harare/Zimbabwe";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/knight-md1";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/EYeXkV4BKob7ftWDjyFmqK";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaiCFHnIt5s06Zghcs2h_";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
