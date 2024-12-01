//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/1f0ool.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572, 2347048805308";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/nnptat.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RkWGdkVloyekxqNVZFbmxEZDAraUpNNUVnNSthRWtMQlJnWUJSU08zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWc0ZWJKcXpiQXJNOStXdVNpVEtPL1ltdzRSdk9XRWRwVzJOdFFVQitXUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTG5RQWlNWE1vdVA5WDdlZ2g3cE9QVklvUUxyeDAvSHM5emM2by9ISUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRE5oZ3BGSkM2bVRIS1pMaXpHUXdpQ0JvU0pVTnN3bkJGVnduTUtuMEY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCR1FjQ0lnRkVRanZtRDV5aGllUUFQMDVuU0oxTjNncVpYSk95dmJKM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhWZ0hoRUtEVDJteXB5SVhnZ3crb09mL2NrY1orL3NObGtMZW9qeFpKaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lMaCs5OEdPZlBKdHk0S2l5MUFvRm9BbnpQc0VGM0JNdTE2OEhDRkpsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGtXR1Foa2RTK2xvNkdsc0ZZbkY5elpOK2RLRTdyS0ltbzZVWDM3VmVYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZxNGFySmNUbEZMMVBhSnAraWhEaEpvbXFPV3VtL1BXUWQ4WEZ6MSt2d09CT2FRNmh3SG5taVUwUHU1ei9paUVXS2p4WVAvMmpiTzd6d1VDWHlhR0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6Ik9XT0ZsV2UvVmk3cS8wUXpiK3RMZWFMcmdLSWxMQTdlSFlRa3A2bUk3UGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0OTA4NTgwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQTJCNTEwMDM0QkE2RUNCQjQ0RTcxNkJFNjRFMTVERCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMTA1NjQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ5MDg1ODA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5RjdGRDQyNzlFQTY1MDEwMUNDNkM4NDhFMzE3RjY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzIxMDU2NjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDkwODU4MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDdFRkI5MTlBNTI5OUIzRUM5MDkxMjM5MzY3NzQxMDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjEwNTY4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0OTA4NTgwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNzU0MEMzQzU5MDIzNEE2MDAyNzIwQjFBMUU1NDBDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMTA1Njk1fV0sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzNDBfM0o0aFJYaWZLdm83Y01tZGJnIiwicGhvbmVJZCI6IjM4YmIyMDU0LTI5N2MtNGQ5Zi1hM2VhLTY4YjBmYzc5ODI3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvS08rYUQwYzR5L1B5Wk9hczBKbG1iUWFPNmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUs3Rkh6dGprOUU5bE5XWUZuNXRCUTZVYWVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRKUjZQRTNOIiwibWUiOnsiaWQiOiIyMzQ3MDQ5MDg1ODA5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhpc0d1eSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTENxNm9NQ0VKcXI5N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDFzejJlQnpHTUc2MmZxSWNHTXY1bXNOZkU0ZDJGVTVYRDdZQk01dU9YRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOTNFb252S050Q3hJMzBEdnF2ekt6S2NueXdvQndvcWdWWGV3d0V4d0hVY0NvVlA3UHI0TDVEc2tFWGFqVjBaaWIzclp2UFpTSVlTNTlCNS85TUJGQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Im4rRnE1RVYyZjFBaEtMaUZVd0hKTjNJSTBEY0pnR2w4MWgrUlVXcnBueGo3YlVYN1FQaCs0aHYvYXlmR05uOFd6L2VscnQ0c2VMN0V5UXRwTVFqdkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0OTA4NTgwOToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5Yk05bmdjeGpCdXRuNmlIQmpMK1pyRFh4T0hkaFZPVncrMkFUT2JqbHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIxMDU4MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTU9YIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
