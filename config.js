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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_12_11_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJic0FoeDVySEVXUEdDNWFFTlRFcW13Q1BGVGN0WWQ0d25sQTdxYitIV3VvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhRU5DMnpvNVFTbVlCVmw5azRKZm5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0ZDlhOTk2LTM4MGYtNDljNi04OTI5LWQwYWY2NWZmMzQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxMDUsXG4gICAgICAxNTYsXG4gICAgICAxMzMsXG4gICAgICA4OCxcbiAgICAgIDEzMCxcbiAgICAgIDIxMSxcbiAgICAgIDczLFxuICAgICAgNTQsXG4gICAgICAyMTYsXG4gICAgICAyMDQsXG4gICAgICAzOSxcbiAgICAgIDIyMixcbiAgICAgIDIyNSxcbiAgICAgIDE3NCxcbiAgICAgIDEwNyxcbiAgICAgIDEwNyxcbiAgICAgIDI2LFxuICAgICAgMTQ0LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgOTQsXG4gICAgICA4MCxcbiAgICAgIDE1LFxuICAgICAgMTE1LFxuICAgICAgMzYsXG4gICAgICAxMTEsXG4gICAgICA2MyxcbiAgICAgIDk1LFxuICAgICAgMjM0LFxuICAgICAgMjM4LFxuICAgICAgNTEsXG4gICAgICA5MCxcbiAgICAgIDEzOSxcbiAgICAgIDEzMyxcbiAgICAgIDYyLFxuICAgICAgMjAwLFxuICAgICAgNjgsXG4gICAgICA1OSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhZTEdMRkdUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzcyOTcxMjg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNaXJhZ2UgVGVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTIzNTI4NDYwNzgxMTE6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm50Z3M4REVOVEZuN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2WjVNUTNFV0k1Wm1pTHhpZzY4Ni94N0FYUjRvVUFVT2NWRnhPM0J2cldFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhWd1dmaDJyV2VKblZvenhIWGtyT2syN0dJTHpET0NuVzBuK2VyYXhqcTZxU2dFS21RdlVzUTZlTGNPK2lraXg4N0p6eHhXeGdrTVk4ZkNJOHIxWUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZnaERuSU5ONzJyb2NTMkE3Sk1nOWFOcHBUTlVxNkR6S3d3b1JucDc4aVdOdVgzTjd3WWFqczc3djgvOWR0bVQ1dmd5dlZvdXczeUNveXNJVytGMURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NzI5NzEyODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxODE0NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQL1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAvVi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
