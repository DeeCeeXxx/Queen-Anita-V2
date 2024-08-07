const { smd, Config } = require('../lib')




//---------------------------------------------------------------------------
smd({
            pattern: "live",
            desc: "Show Live Time Of Pakistan",
            category: "fun",
            filename: __filename,
            use: '<group link.>',
        },
        async(message) => {
            try{
var time = `${message.time}`.replace("am",'ᴀᴍ').replace("pm",'ᴘᴍ')
var date = message.date
const [hours, minutes, seconds, ampm] = `${message.time}`.split(/:| /);
const hrs = parseInt(hours, 10);

          var wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
          if(ampm == "am"){
          if ( hrs >= 0 && hrs < 5)  wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ, ᴇᴀʀʟʏ ʙɪʀᴅ! 🌄'; 
          else if (hrs >= 5 && hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅';
          }else {
            if (hrs >= 0 && hrs < 5) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞';
            else if (hrs >= 5 && hrs < 8) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥';
            else wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
          }
const q =await message.bot.fakeMessage("order") 
let contextInfo = {...(await message.bot.contextInfo() )}
let timenow =`
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} 
│     *Date* 🎲   ${date} 
│   ${Config.caption}
╰────────────────╯
`
await message.send(timenow, {contextInfo : contextInfo },"asta",  q )
        }catch(e){ await message.error(`${e}\n\ncommand: live`,e,false)}

})