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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_41_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGJYVm1kWGpQZkhXaFdFMXozb1ladlVmVUpjVW5CWHNkQUFaR0VWcVFZWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MDQyMDgwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzEwNjA5RDVBMzlGRDU4QjAyNzUzNEZFOTAwMjAzMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTIzMjcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9DQVNSRUl1UURxOEFrLVVxNm0wRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGZmYWQxNmMtMTJhYS00OTQ2LWIzZDgtMzAzZjI1MzVkNGZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgNzQsXG4gICAgICA4NixcbiAgICAgIDQ2LFxuICAgICAgMjQ3LFxuICAgICAgMTU1LFxuICAgICAgMTQzLFxuICAgICAgMzcsXG4gICAgICAyMjgsXG4gICAgICAxMjgsXG4gICAgICA2NSxcbiAgICAgIDE2OCxcbiAgICAgIDk1LFxuICAgICAgMjA0LFxuICAgICAgMTU2LFxuICAgICAgMTIzLFxuICAgICAgNTIsXG4gICAgICAzMSxcbiAgICAgIDYwLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMjM3LFxuICAgICAgMzIsXG4gICAgICAyMTQsXG4gICAgICAxODAsXG4gICAgICAyMSxcbiAgICAgIDI0MyxcbiAgICAgIDM0LFxuICAgICAgMTczLFxuICAgICAgOTYsXG4gICAgICA5MixcbiAgICAgIDI0LFxuICAgICAgNDIsXG4gICAgICAyNDcsXG4gICAgICA1MSxcbiAgICAgIDE1OCxcbiAgICAgIDEyOCxcbiAgICAgIDIzNixcbiAgICAgIDE4NSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIQzdHQTdUTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDA0MjA4MDk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODIzNTkxNzYwMzA0MToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSzNpR2tRL2J5dXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlRUmNFSENhYjZEaUNPT25rL1YrOG14Y01TWFhBdXp6ZENjUVorUlJVQVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTIxMTU4MmZDeDZMRG9VTGovamVWMG5LaXZwTW1MSng1YkdiWk5MWUJXeDlYakJwcjJ6YXFRcTZmZTV2ME96ZU55N2xCc0FVMmRzazgzc2gzc0JsRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkZ3QytWeWFPMEdYT0l1a3lPeVBsbUtJaWNCWVV3dUN2RDFMSDZvNkwrOWdkaVUwbHBUY2dUUVd1NkdWVmxpTDlQTGZYKzlhQ0dVaDlLZC9iTmd4alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDA0MjA4MDk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTIzMjY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlgvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOWC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
