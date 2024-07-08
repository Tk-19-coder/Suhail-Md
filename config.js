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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263777297128";




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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_11_22_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4clRoUVBrQ1g1dmYwWUhjT09HSTc2V1htaUNWRjBGdXREdkFTSXc4dTZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDMnNuZUY5dlI5S1FmSkltTWVBdzBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5NDc2OGE3LTNjMjMtNDczZS05OTVhLTdiODgzZGNjMmQyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE4NCxcbiAgICAgIDAsXG4gICAgICAxMjMsXG4gICAgICAxMDMsXG4gICAgICAzNCxcbiAgICAgIDE1OSxcbiAgICAgIDE2MyxcbiAgICAgIDkxLFxuICAgICAgMTA5LFxuICAgICAgMjcsXG4gICAgICAxMixcbiAgICAgIDE0MCxcbiAgICAgIDcxLFxuICAgICAgMTA4LFxuICAgICAgMjIxLFxuICAgICAgMTY1LFxuICAgICAgMTc3LFxuICAgICAgMjU1LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMTg4LFxuICAgICAgMjgsXG4gICAgICA2NixcbiAgICAgIDgyLFxuICAgICAgMTI5LFxuICAgICAgMTMzLFxuICAgICAgMTM1LFxuICAgICAgMyxcbiAgICAgIDE1OCxcbiAgICAgIDkyLFxuICAgICAgMjEyLFxuICAgICAgMjE5LFxuICAgICAgMjIsXG4gICAgICAyOSxcbiAgICAgIDk4LFxuICAgICAgMTEzLFxuICAgICAgNjQsXG4gICAgICA0NixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzNUpLNjQxRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc3Mjk3MTI4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWlyYWdlIFRlY2hcIixcbiAgICBcImxpZFwiOiBcIjEyMzUyODQ2MDc4MTExOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pudGdzOERFT3VYcjdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNlo1TVEzRVdJNVptaUx4aWc2ODYveDdBWFI0b1VBVU9jVkZ4TzNCdnJXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEcHREb09DMkgyNE9RVWFQcUhLL1B1clFlWEx3OHd4Z3puVlBBZjZPTFp0Z2hCOVR2K2tWUmN1UlFYVGxzNVIwcVJlM2daWHEwODQ5cmg1dkltbXRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxb0tqNFN1Vlpyb2ErYzU1OVA0T3pUVndqZ0JiUWxlVFdRQjdnZk94NFI2QnB4ZERHYzNnQThVdEw0c24xWmdoTTU5T1VtcW5EQkErbFVZazYxQlFDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzcyOTcxMjg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDM3NzQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUC9XXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQL1cuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
