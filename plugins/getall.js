const {
    smd,
    tlang,
    prefix,
     } = require('../lib')
smd({
    cmdname: "getall",
    desc: "get jid of all members of groups/pm chats/all groups.",
    type: "owner",
    fromMe:true,
    use:"[ members / user / groups ]",
    usage:"get jids of groups,personal chats, also members of group, so that used them for forward cmd!",
    filename: __filename,
    public : false,
},
async (citel, text, { store }) => {
  try{
let str = "";
    let cd = text.split(" ")[0]
    if(cd === "members" || cd === "member") {
      if (!citel.isGroup) return citel.reply(tlang("group"));
      const participants = citel.metadata.participants || {};
      for (let i of participants) {    str += `📍 ${i.id}\n`;   }
      str ? citel.reply(`*「 LIST OF GROUP MEMBER'S JID 」*\n\n` +str) : citel.reply("*Request Denied!*")
    }else if(cd == "user" || cd == "pm" || cd == "pc"){
        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
        for (let i of anu) { str += `📍 ${i.id}\n` }
        str ? citel.reply(`*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal ${anu.length} users are text in personal chat.\n\n` + str) : citel.reply("*Request Denied!*")
    }else if(cd == "group" || cd == "groups" || cd == "gc"){
      n = await citel.bot.groupFetchAllParticipating();
      const c=Object.entries(n).slice(0).map(t=>t[1]);
      for(var i of c.map(t=>t.id)){  str += `📍 ${i}\n`;  } 
      str ? citel.reply(`*「 LIST OF GROUP CHAT JIDS」*\n\n` + str) : citel.reply("*Request Denied!*")
  }else return await citel.reply(`*Use ${prefix}getall pc| gc| member!*`)
}catch(e){ citel.error(`${e}\n\nCommand getall`,e)}
});