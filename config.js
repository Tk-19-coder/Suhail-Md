const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_20_26_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBOOWRycS9XbDV6MmkzTDBsYUluSmdBcUhjVzFScmNrWXNCbmtZZ0VkQkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc3Mjk3MTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QzI4MjExMjg5OTU1Nzg2MEJEQkVCNTg5MkJBRTRBMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMjQ3NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzcyOTcxMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE0MDM1NDUwNDgyQjVEMUU0QUM3QzFFNThBMzM0MUJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEyNDc3MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfejhKcTVscVNFT2czd05FbC1OTmt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhMmZmODAzLTNjZjItNDM3Mi05NWE5LTQ2MzgzZjkxYjE1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDIyMSxcbiAgICAgIDE4MixcbiAgICAgIDkyLFxuICAgICAgMjQ1LFxuICAgICAgMTY4LFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICA2LFxuICAgICAgMTMsXG4gICAgICAxNzksXG4gICAgICAxNzgsXG4gICAgICAyNDAsXG4gICAgICAxOTQsXG4gICAgICAxODEsXG4gICAgICAxOTksXG4gICAgICAxNixcbiAgICAgIDIxNSxcbiAgICAgIDEzNCxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDIsXG4gICAgICA3OSxcbiAgICAgIDE0NCxcbiAgICAgIDIwMSxcbiAgICAgIDIxMCxcbiAgICAgIDI1MSxcbiAgICAgIDIwNyxcbiAgICAgIDkzLFxuICAgICAgMTkzLFxuICAgICAgMjUwLFxuICAgICAgMjI0LFxuICAgICAgNzEsXG4gICAgICAxNjEsXG4gICAgICAxMTIsXG4gICAgICAxOTQsXG4gICAgICAxMjgsXG4gICAgICAxMzUsXG4gICAgICA5MixcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRU1ZRQVJKM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc3Mjk3MTI4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNaXJhZ2UgVGVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTIzNTI4NDYwNzgxMTE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVHRnczhERU5tS25MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZaNU1RM0VXSTVabWlMeGlnNjg2L3g3QVhSNG9VQVVPY1ZGeE8zQnZyV0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGZ4c0xpQmQvbWY1eDVMYnNQMVJLaVFXblZuRnlKdEFMRENiNi85OUZuV3VDQ3VTQ3pJMCtyL0RNS2k1dWcxaEt3OWVKV3kzc3FrNUs5ZVJxeExaQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVJBRFUxOU1PUW1Nbi9leCtXYTk1bnJrN0ZGSnJtalQ0VUJnbXBPVW5teFczN0NWZWFIdGxQbkpGR1M1dkNhT2FWYjNIbG11NkVOai9MRVF5Y3lpRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc3Mjk3MTI4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTI0NzY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjVkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5bXhSdnFMdS9zWFdvSTlSMjREajZYUXgxR0pvRlAwc2x1Z1RSRWpoTXBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MTAyODExNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTI0NzY5NDA4XCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
