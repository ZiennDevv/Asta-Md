const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "MailSupportAI1@gmail.com";
global.location = "Pangandaran,Indonesia.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Jakarta";
global.github = process.env.GITHUB || "https://github.com";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Jq9FtBnpRih8JzLxzvyL1d";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaUaZqLFCCoV0DuD1717";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/119a7af18d5a3b7c19e35.jpg";
global.devs = "6288971614978";
global.sudo = process.env.SUDO || "6288971614978";
global.owner = process.env.OWNER_NUMBER || "6288971614978";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SESSION_05_53_04_12_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1kelZpSEZUck9heWdoRmVxbkEzelpxMEllcjdkbmpYbEhHM0VhbmNVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEc5QVN4NlNXaHZqdGE1dk5UWi9pckhMZ0UvV0t1M0M3U1dvRkgxYm9sZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QXRlSnZTY000VzJnWFdsSVZ2L3g0Z3RJYkcva0ZoMU1NSVp5ZTZ1RjIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSYUxVVmFiZzVLbW1ta3g5VjZ4NHVOZTFsMWR2cmt1Z0NybFRjTFlsaUhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCRVlYejdpaXJuSjZQM1lhQjlQT0N5dGFhZ1YvSlNlbDJLSUxwMExsbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJjOEFXd0pmMWoyM0VESTBtejQwVVBDa2FTR1lzampLSnFVU0xkTlpEQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU00UW91aklzb2FtUjVYMDNNMWszeDNsUGU4TXZDb3I5dUNTT1ZabUlXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW1nMXdva3FJa0dxQUoxdWxFd1ROTGxpUnlWZDhRZWl0WXczWmtKK2RUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN2ZGRYeHorRzg4b1dxUnNWVjdSSmE2cUNESUo4Y2FvaTdNaE8vZ1BzUzNpTG9OT3habWJoRnlwaW5UQmwzNWJGeVdDQXdDMmFhN0VCc2xkc1FsVkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJLeE5nOU5ONnlrNmREMjF2TUFUN3h6SGxQWU9udGZJZENLUXM2K0xwbHZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODUxNzY3MjkwNDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjQyNkI2QzY5NEEyRTRGOTBGRkY2NkJFRTQwNzQ1QjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMjkwMTE3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLXhHdkd6XzNUQ1dGcUNnMkU3SnYzZyIsInBob25lSWQiOiI1ZTExMmYzMy02NzhjLTQwNWItOTE2ZS1mNWMwMjA2MjY4ODAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXAyZlFON214RWRlcEx2WlQwWDJ0bllkd1RBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzcHNvbXdLcHpDa0QwZWx2N0RVeG5vaTRKND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5RFJNR1RDMyIsIm1lIjp7ImlkIjoiNjI4NTE3NjcyOTA0OToxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJYW5uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSDVoZWtCRUxDWTQ3QUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvNEdDWEM0Q0R3VndxN0cycVlOZGlsMktGOERaN1p5WHlTaUx2ekNnTm4wPSIsImFjY291bnRTaWduYXR1cmUiOiIyY1A3dG9VZ2J5MDdhVTJYR25qd3Z1czZocDA3ZFRIVFNYbEpDZm4zaUdsSlJGYlh1NTJiRm9DTjRkNTNFdDhLcnZuUS9SVytXeUcrd29veU0ycFRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMG1wekVBN3FaY0c2WHZZSEVMNmE2N0MwNkd0QWlJOTErL0dtM1cvd0pxQnptS29xeDdDQU85R0xhYlQrcHZGdm5LSlNpWXBIaGRIYTYzRHlvVzNKRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mjg1MTc2NzI5MDQ5OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYrQmdsd3VBZzhGY0t1eHRxbURYWXBkaWhmQTJlMmNsOGtvaTc4d29EWjkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTI5MDExNzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSld0In0=";

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©VE-AI",
  author: process.env.PACK_AUTHER || "VE-AI",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VE-AI",
  ownername: process.env.OWNER_NAME || "MAS IANN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "c46yYNZRezRZaamC4x5mNMyj",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-531f089b-6221-4c24-b9de-5a1493f672e6",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "Rian  Septiana",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
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
  
