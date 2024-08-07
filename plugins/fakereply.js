const {
    smd,
    prefix,
     } = require('../lib')

     smd({
        cmdname: "fakereply",
        alias :['freply'],
        desc: "Create fake Reply by given texts!",
        type: "general",
        use:" msg| reply_text | number ",
        usage:"generates fake messages of given text and number!",
        filename: __filename,
        public : true,
      },
      async (m,text) => {
        try {
      let types = ["text","order","contact","image" , "video"]
          let args = text.split("|")
          if(!text || args.length < 3) return await m.reply(`*Use ${prefix}fakereply text |Reply_text|2348039607375|type(text,order,contact,image,video)*`)
          let reply = args[0],msg = args[1],num = `${args[2].replace(/[^0-9]/g, '')}@s.whatsapp.net` , type = args[3] && types.includes(args[3])? args[3] :"text", charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',smds = 'SMD';    
          for (let i = 0; i < 13; i++) { smds += charset[Math.floor(Math.random() * charset.length)];  }
          let  fak =await m.bot.fakeMessage(type,{id: smds,remoteJid:m.isGroup? m.chat : num,participant:num},msg) 
          try{ if(type === "contact") {fak.message.contactMessage.jpegThumbnail =  await m.getpp(num)  }}catch(e){console.log(e)}
          await m.bot.sendMessage(m.chat,{text : reply}, { quoted : fak})
      } catch (e) {
        m.error(`${e}\n\nCommand: fakereply`, e, false);
      }
      });