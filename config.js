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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8vTEhlMS95b3lpdGM2bGhNV2lHM091a1ZZSm9OK0YvN05mV2d6TTVtdkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDA0MjA4MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlBRTNCRTEzRTRCMTQ1RDk4NTE0MjNFRUYwREQ3MjExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU4ODg4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpOXdWVkNBVlQwcVRFSVJ0QlR0R093XCIsXG4gIFwicGhvbmVJZFwiOiBcImZkOTczOWYzLTNhZDAtNDRkNS04MDI2LWFmNmMxNGIwOTQxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDY2LFxuICAgICAgMTUsXG4gICAgICAxNDUsXG4gICAgICAyNDksXG4gICAgICAxMzgsXG4gICAgICAxMTEsXG4gICAgICA1MixcbiAgICAgIDIzMSxcbiAgICAgIDIwNyxcbiAgICAgIDIyLFxuICAgICAgMTYsXG4gICAgICAyMzUsXG4gICAgICAxOTMsXG4gICAgICAxODIsXG4gICAgICAzMyxcbiAgICAgIDcwLFxuICAgICAgNzEsXG4gICAgICAzLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMjAwLFxuICAgICAgOTksXG4gICAgICA2NSxcbiAgICAgIDIzLFxuICAgICAgMjIxLFxuICAgICAgMjM5LFxuICAgICAgNDMsXG4gICAgICAxNCxcbiAgICAgIDYwLFxuICAgICAgMTM4LFxuICAgICAgMTM5LFxuICAgICAgOTIsXG4gICAgICA1MixcbiAgICAgIDEyMSxcbiAgICAgIDIzMSxcbiAgICAgIDE0NSxcbiAgICAgIDEzLFxuICAgICAgMjUsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDJGRE5BMVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQwNDIwODA5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODgyMzU5MTc2MDMwNDE6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1MzaUdrUTBMMnl0UVlZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5UVJjRUhDYWI2RGlDT09uay9WKzhteGNNU1hYQXV6emRDY1FaK1JSVUFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJqcFpBZEJRZitHMzE5cnJZQzUvc2R5RHBDdW1uRjRDa1ExNjhlckJnRkQwd05yTUxkNGhIYThISVRJLzV5MUxrNkpEb2JXWHY0TURTUkoyTmFKaENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInp4R0l3QjZwTDd6b2Q4TjNna3lQdWhnUEQvc2dxQ1hISzhIODhESTJZVU1CQjRObjBRWi94Y0htM05NZDZyRnRCQjcyQlM0eHlGVFVOM1Vua3hYUWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwNDIwODA5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU4ODg4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5YL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlgvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
