const {
   updateProfilePicture,
   parsedJid
 } = require("../lib");
 const {
   sck,
   smd,
   send,
   Config,
   tlang,
   sleep,
   getAdmin,
   prefix
 } = require("../lib");
 const astro_patch = require("../lib/plugins");
 const {
   cmd
 } = astro_patch;
 const grouppattern = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g;
 smd({
   cmdname: "join",
   info: "joins group by link",
   type: "whatsapp",
   fromMe: true,
   filename: __filename,
   use: "<group link.>"
 }, async (_0x466dd8, _0x5b1338) => {
   try {
     if (_0x466dd8.reply_message && _0x466dd8.reply_message.groupInvite) {
       var _0x29e5fc = await _0x466dd8.bot.groupAcceptInviteV4(_0x466dd8.chat, _0x466dd8.reply_message.msg);
       if (_0x29e5fc && _0x29e5fc.includes("joined to:")) {
         return await send(_0x466dd8, "*_Joined_*", {}, "", _0x466dd8);
       }
     }
     let _0x208739 = _0x5b1338 ? _0x5b1338 : _0x466dd8.reply_text;
     const _0x47ed60 = _0x208739.match(grouppattern);
     if (!_0x47ed60) {
       return await _0x466dd8.reply("*_Uhh Please, provide group link_*");
     }
     let _0x4263be = _0x47ed60[0].split("https://chat.whatsapp.com/")[1].trim();
     await _0x466dd8.bot.groupAcceptInvite(_0x4263be).then(_0x7f3222 => send(_0x466dd8, "*_Joined_*", {}, "", _0x466dd8)).catch(_0x1d6aea => _0x466dd8.send("*_Can't Join, Group Id not found!!_*"));
   } catch (_0x5d3484) {
     await _0x466dd8.error(_0x5d3484 + "\n\ncommand: join", _0x5d3484, "*_Can't Join, Group Id not found, Sorry!!_*");
   }
 });
 smd({
   cmdname: "newgc",
   info: "Create New Group",
   type: "whatsapp",
   filename: __filename,
   use: "<group link.>"
 }, async (_0x1d2f1f, _0x3c558e, {
   smd: _0x2e7a79,
   cmdName: _0x49994a
 }) => {
   try {
     if (!_0x1d2f1f.isCreator) {
       return _0x1d2f1f.reply(tlang().owner);
     }
     if (!_0x3c558e) {
       return await _0x1d2f1f.reply("*_provide Name to Create new Group!!!_*\n*_Ex: " + (prefix + _0x2e7a79) + " My Name Group @user1,2,3.._*");
     }
     let _0x379d99 = _0x3c558e;
     if (_0x379d99.toLowerCase() === "info") {
       return await _0x1d2f1f.send(("\n  *Its a command to create new Gc*\n  \t```Ex: " + (prefix + cmd) + " My new Group```\n  \n*You also add peoples in newGc*\n  \t```just reply or mention Users```\n  ").trim());
     }
     let _0x5a5c26 = [_0x1d2f1f.sender];
     if (_0x1d2f1f.quoted) {
       _0x5a5c26.push(_0x1d2f1f.quoted.sender);
     }
     if (_0x1d2f1f.mentionedJid && _0x1d2f1f.mentionedJid[0]) {
       _0x5a5c26.push(..._0x1d2f1f.mentionedJid);
       try {
         mentionJids.forEach(_0x3e3852 => {
           var _0x30af68 = _0x3e3852.split("@")[0].trim();
           _0x379d99 = _0x379d99.replace(new RegExp("@" + _0x30af68, "g"), "");
         });
       } catch {}
     }
     const _0x37b490 = _0x379d99.substring(0, 60);
     const _0x417018 = await Suhail.bot.groupCreate(_0x37b490, [..._0x5a5c26]);
     if (_0x417018) {
       let _0x2c6495 = await _0x1d2f1f.bot.sendMessage(_0x417018.id, {
         text: "*_Hey Master, Welcome to new Group_*\n" + Config.caption
       });
       try {
         var _0x3a49e9 = await Suhail.bot.groupInviteCode(_0x417018.id);
       } catch {
         var _0x3a49e9 = false;
       }
       var _0x2608ab = "https://chat.whatsapp.com/";
       var _0x2fe2c7 = "" + _0x2608ab + _0x3a49e9;
       var _0x539d8f = {
         externalAdReply: {
           title: "QUEEN_ANITA-V2",
           body: "" + _0x37b490,
           renderLargerThumbnail: true,
           thumbnail: log0,
           mediaType: 1,
           mediaUrl: _0x2fe2c7,
           sourceUrl: _0x2fe2c7
         }
       };
       return await send(_0x1d2f1f, ("*_Hurray, New group created!!!_*\n" + (_0x3a49e9 ? "*_" + _0x2fe2c7 + "_*" : "")).trim(), {
         contextInfo: _0x539d8f
       }, "", _0x2c6495);
     } else {
       await _0x1d2f1f.send("*_Can't create new group, Sorry!!_*");
     }
   } catch (_0x33d6f3) {
     await _0x1d2f1f.error(_0x33d6f3 + "\n\ncommand: " + _0x49994a, _0x33d6f3, "*_Can't create new group, Sorry!!_*");
   }
 });
 smd({
   pattern: "ginfo",
   desc: "get group info by link",
   type: "group",
   filename: __filename,
   use: "<group link.>"
 }, async (_0x4f7c88, _0x1490e0) => {
   try {
     let _0x3eb855 = _0x1490e0 ? _0x1490e0 : _0x4f7c88.reply_text;
     const _0x3e5033 = _0x3eb855.match(grouppattern) || false;
     if (!_0x3e5033) {
       return await _0x4f7c88.reply("*_Uhh Please, provide group link_*");
     }
     let _0x5ced5d = _0x3e5033[0].split("https://chat.whatsapp.com/")[1].trim();
     const _0x5f4890 = await _0x4f7c88.bot.groupGetInviteInfo(_0x5ced5d);
     if (_0x5f4890) {
       const _0x40ced5 = new Date(_0x5f4890.creation * 1000);
       var _0x10288a = _0x40ced5.getFullYear();
       var _0x436585 = _0x40ced5.getMonth() + 1;
       var _0x511884 = _0x40ced5.getDate();
       var _0x236a49 = _0x10288a + "-" + _0x436585.toString().padStart(2, "0") + "-" + _0x511884.toString().padStart(2, "0");
       var _0x56eaaf = {
         externalAdReply: {
           title: "QUEEN_ANITA-V2",
           body: _0x5f4890.subject,
           renderLargerThumbnail: true,
           thumbnail: log0,
           mediaType: 1,
           mediaUrl: _0x3e5033[0],
           sourceUrl: _0x3e5033[0]
         }
       };
       return await send(_0x4f7c88, (_0x5f4890.subject + "\n  \n  Creator: wa.me/" + _0x5f4890.owner.split("@")[0] + " \n  GJid; ```" + _0x5f4890.id + "  ```\n  *Muted:* " + (_0x5f4890.announce ? " yes" : " no") + "\n  *Locked:* " + (_0x5f4890.restrict ? " yes" : " no") + "\n  *createdAt:* " + _0x236a49 + "\n  *participents:* " + (_0x5f4890.size > 3 ? _0x5f4890.size + "th" : _0x5f4890.size) + "\n  " + (_0x5f4890.desc ? "*description:* " + _0x5f4890.desc + "\n" : "") + "\n  " + Config.caption + "\n  ").trim(), {
         mentions: [_0x5f4890.owner],
         contextInfo: _0x56eaaf
       }, "", _0x4f7c88);
     } else {
       await _0x4f7c88.send("*_Group Id not found, Sorry!!_*");
     }
   } catch (_0x36c345) {
     await _0x4f7c88.error(_0x36c345 + "\n\ncommand: ginfo", _0x36c345, "*_Group Id not found, Sorry!!_*");
   }
 });
 smd({
   cmdname: "rejectall",
   alias: ["rejectjoin"],
   info: "reject all request to join!",
   type: "group",
   filename: __filename
 }, async (_0xb81e45, _0x3dda5f) => {
   try {
     if (!_0xb81e45.isGroup) {
       return _0xb81e45.reply(tlang().group);
     }
     if (!_0xb81e45.isBotAdmin || !_0xb81e45.isAdmin) {
       return await _0xb81e45.reply(!_0xb81e45.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0xb81e45.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     const _0x4ea369 = await _0xb81e45.bot.groupRequestParticipantsList(_0xb81e45.chat);
     if (!_0x4ea369 || !_0x4ea369[0]) {
       return await _0xb81e45.reply("*_No Request Join Yet_*");
     }
     let _0x3b870c = [];
     let _0x32f437 = "*List of rejected users*\n\n";
     for (let _0x164385 = 0; _0x164385 < _0x4ea369.length; _0x164385++) {
       try {
         await _0xb81e45.bot.groupRequestParticipantsUpdate(_0xb81e45.from, [_0x4ea369[_0x164385].jid], "reject");
         _0x32f437 += "@" + _0x4ea369[_0x164385].jid.split("@")[0] + "\n";
         _0x3b870c = [..._0x3b870c, _0x4ea369[_0x164385].jid];
       } catch {}
     }
     await _0xb81e45.send(_0x32f437, {
       mentions: [_0x3b870c]
     });
   } catch (_0x13cc87) {
     await _0xb81e45.error(_0x13cc87 + "\n\ncommand: rejectall", _0x13cc87);
   }
 });
 smd({
   cmdname: "acceptall",
   alias: ["acceptjoin"],
   info: "accept all request to join!",
   type: "group",
   filename: __filename
 }, async (_0x90a6de, _0x5537ca) => {
   try {
     if (!_0x90a6de.isGroup) {
       return _0x90a6de.reply(tlang().group);
     }
     if (!_0x90a6de.isBotAdmin || !_0x90a6de.isAdmin) {
       return await _0x90a6de.reply(!_0x90a6de.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x90a6de.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     const _0x3da7c6 = await _0x90a6de.bot.groupRequestParticipantsList(_0x90a6de.chat);
     if (!_0x3da7c6 || !_0x3da7c6[0]) {
       return await _0x90a6de.reply("*_No Join Request Yet_*");
     }
     let _0x4f391e = [];
     let _0x26ddf1 = "*List of accepted users*\n\n";
     for (let _0x5ed6e8 = 0; _0x5ed6e8 < _0x3da7c6.length; _0x5ed6e8++) {
       try {
         await _0x90a6de.bot.groupRequestParticipantsUpdate(_0x90a6de.from, [_0x3da7c6[_0x5ed6e8].jid], "approve");
         _0x26ddf1 += "@" + _0x3da7c6[_0x5ed6e8].jid.split("@")[0] + "\n";
         _0x4f391e = [..._0x4f391e, _0x3da7c6[_0x5ed6e8].jid];
       } catch {}
     }
     await _0x90a6de.send(_0x26ddf1, {
       mentions: [_0x4f391e]
     });
   } catch (_0x366bd4) {
     await _0x90a6de.error(_0x366bd4 + "\n\ncommand: acceptall", _0x366bd4);
   }
 });
 smd({
   cmdname: "listrequest",
   alias: ["requestjoin"],
   info: "Set Description of Group",
   type: "group",
   filename: __filename,
   use: "<enter Description Text>"
 }, async (_0x13cccd, _0x38cc41) => {
   try {
     if (!_0x13cccd.isGroup) {
       return _0x13cccd.reply(tlang().group);
     }
     if (!_0x13cccd.isBotAdmin || !_0x13cccd.isAdmin) {
       return await _0x13cccd.reply(!_0x13cccd.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x13cccd.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     const _0x3115b1 = await _0x13cccd.bot.groupRequestParticipantsList(_0x13cccd.chat);
     if (!_0x3115b1 || !_0x3115b1[0]) {
       return await _0x13cccd.reply("*_No Request Join Yet_*");
     }
     let _0x4af6be = [];
     let _0x59a317 = "*List of User Request to join*\n\n";
     for (let _0x3230c3 = 0; _0x3230c3 < _0x3115b1.length; _0x3230c3++) {
       _0x59a317 += "@" + _0x3115b1[_0x3230c3].jid.split("@")[0] + "\n";
       _0x4af6be = [..._0x4af6be, _0x3115b1[_0x3230c3].jid];
     }
     return await _0x13cccd.send(_0x59a317, {
       mentions: [_0x4af6be]
     });
   } catch (_0x5c8e97) {
     await _0x13cccd.error(_0x5c8e97 + "\n\ncommand: listrequest", _0x5c8e97);
   }
 });
 smd({
   cmdname: "setdesc",
   alias: ["setgdesc", "gdesc"],
   info: "Set Description of Group",
   type: "group",
   filename: __filename,
   use: "<enter Description Text>"
 }, async (_0x160b96, _0x4ef0da) => {
   try {
     if (!_0x160b96.isGroup) {
       return _0x160b96.reply(tlang().group);
     }
     if (!_0x4ef0da) {
       return await _0x160b96.reply("*Provide Description text, You wants to Set*");
     }
     if (!_0x160b96.isBotAdmin || !_0x160b96.isAdmin) {
       return await _0x160b96.reply(!_0x160b96.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x160b96.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     try {
       await _0x160b96.bot.groupUpdateDescription(_0x160b96.chat, _0x4ef0da + "\n\n\t" + Config.caption);
       _0x160b96.reply("*_✅Group description Updated Successfuly!_*");
     } catch (_0x986809) {
       await _0x160b96.reply("*_Can't update description, Group Id not found!!_*");
     }
   } catch (_0x526bb2) {
     await _0x160b96.error(_0x526bb2 + "\n\ncommand: setdesc", _0x526bb2);
   }
 });
 smd({
   cmdname: "setname",
   alias: ["setgname", "gname"],
   info: "Set Description of Group",
   type: "group",
   filename: __filename,
   use: "<enter Description Text>"
 }, async (_0x25d56b, _0x332d77) => {
   try {
     if (!_0x25d56b.isGroup) {
       return _0x25d56b.reply(tlang().group);
     }
     if (!_0x332d77) {
       return await _0x25d56b.reply("*Uhh Dear, Give text to Update This Group Name*");
     }
     if (!_0x25d56b.isBotAdmin || !_0x25d56b.isAdmin) {
       return await _0x25d56b.reply(!_0x25d56b.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x25d56b.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     try {
       await _0x25d56b.bot.groupUpdateSubject(_0x25d56b.chat, _0x332d77);
       _0x25d56b.reply("*_✅Group Name Updated Successfuly.!_*");
     } catch (_0x379b84) {
       await _0x25d56b.reply("*_Can't update name, Group Id not found!!_*");
     }
   } catch (_0x1eee32) {
     await _0x25d56b.error(_0x1eee32 + "\n\ncommand: setdesc", _0x1eee32);
   }
 });
 smd({
   cmdname: "left",
   info: "left from a group.",
   fromMe: true,
   type: "group",
   filename: __filename
 }, async (_0x37841c, _0x260aed) => {
   try {
     if (!_0x37841c.isGroup) {
       return await _0x37841c.send(tlang().group, {}, "", _0x37841c);
     }
     let _0x6118c5 = _0x260aed.toLowerCase().trim();
     if (_0x6118c5.startsWith("sure") || _0x6118c5.startsWith("ok") || _0x6118c5.startsWith("yes")) {
       await _0x37841c.bot.groupParticipantsUpdate(_0x37841c.chat, [_0x37841c.user], "remove");
       _0x37841c.send("*Group Left!!*", {}, "", _0x37841c, _0x37841c.user);
     } else {
       return await _0x37841c.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, "", _0x37841c);
     }
   } catch (_0x34f4a6) {
     await _0x37841c.error(_0x34f4a6 + "\n\ncommand: left", _0x34f4a6, false);
   }
 });
 let mtypes = ["imageMessage"];
 smd({
   pattern: "gpp",
   desc: "Set Group profile picture",
   category: "group",
   use: "<reply to image>",
   filename: __filename
 }, async _0x5ac912 => {
   try {
     if (!_0x5ac912.isGroup) {
       return await _0x5ac912.send(tlang().group, {}, "", _0x5ac912);
     }
     if (!_0x5ac912.isBotAdmin || !_0x5ac912.isAdmin) {
       return await _0x5ac912.reply(!_0x5ac912.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x5ac912.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     let _0xc0618e = mtypes.includes(_0x5ac912.mtype) ? _0x5ac912 : _0x5ac912.reply_message;
     if (!_0xc0618e || !mtypes.includes(_0xc0618e?.mtype || "need_Media")) {
       return await _0x5ac912.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x5ac912, _0x5ac912.chat, _0xc0618e, "gpp");
   } catch (_0x5abd07) {
     await _0x5ac912.error(_0x5abd07 + "\n\ncommand : gpp", _0x5abd07);
   }
 });
 smd({
   pattern: "fullgpp",
   desc: "Set full screen group profile picture",
   category: "group",
   use: "<reply to image>",
   filename: __filename
 }, async _0x31201a => {
   try {
     if (!_0x31201a.isGroup) {
       return await _0x31201a.send(tlang().group, {}, "", _0x31201a);
     }
     if (!_0x31201a.isBotAdmin || !_0x31201a.isAdmin) {
       return await _0x31201a.reply(!_0x31201a.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x31201a.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     let _0x3fba56 = mtypes.includes(_0x31201a.mtype) ? _0x31201a : _0x31201a.reply_message;
     if (!_0x3fba56 || !mtypes.includes(_0x3fba56?.mtype || "need_Media")) {
       return await _0x31201a.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x31201a, _0x31201a.chat, _0x3fba56, "fullgpp");
   } catch (_0x1f879e) {
     await _0x31201a.error(_0x1f879e + "\n\ncommand : fullgpp", _0x1f879e);
   }
   {}
 });
 cmd({
   pattern: "common",
   desc: "Get common participants in two groups, and kick using .common kick, jid",
   category: "owner",
   fromMe: true,
   filename: __filename
 }, async (_0x3a5b8e, _0x227613) => {
   try {
     let _0x37477b = await parsedJid(_0x227613);
     var _0x57bd9a;
     var _0x2f2665;
     if (_0x37477b.length > 1) {
       _0x57bd9a = _0x37477b[0].includes("@g.us") ? _0x37477b[0] : _0x3a5b8e.chat;
       _0x2f2665 = _0x37477b[1].includes("@g.us") ? _0x37477b[1] : _0x3a5b8e.chat;
     } else if (_0x37477b.length == 1) {
       _0x57bd9a = _0x3a5b8e.chat;
       _0x2f2665 = _0x37477b[0].includes("@g.us") ? _0x37477b[0] : _0x3a5b8e.chat;
     } else {
       return await _0x3a5b8e.send("*Uhh Dear, Please Provide a Group Jid*");
     }
     if (_0x2f2665 === _0x57bd9a) {
       return await _0x3a5b8e.send("*Please Provide Valid Group Jid*");
     }
     var _0x4f45c0 = await _0x3a5b8e.bot.groupMetadata(_0x57bd9a);
     var _0x1a80c3 = await _0x3a5b8e.bot.groupMetadata(_0x2f2665);
     var _0x1bab1d = _0x4f45c0.participants.filter(({
       id: _0x2f922b
     }) => _0x1a80c3.participants.some(({
       id: _0x39bca2
     }) => _0x39bca2 === _0x2f922b)) || [];
     if (_0x1bab1d.length == 0) {
       return await _0x3a5b8e.send("Theres no Common Users in Both Groups");
     }
     let _0x4fbd42 = _0x227613.split(" ")[0].trim() === "kick" ? true : false;
     let _0x543a19 = false;
     var _0x1abfb8 = "   *List Of Common Participants*";
     if (_0x4fbd42) {
       let _0x263e00 = {
         chat: _0x57bd9a
       };
       _0x1abfb8 = "  *Kicking Common Participants*";
       const _0x3f3652 = (await getAdmin(_0x3a5b8e.bot, _0x263e00)) || [];
       var _0x1df1fa = _0x3f3652.includes(_0x3a5b8e.user) || false;
       var _0x16096e = _0x3f3652.includes(_0x3a5b8e.sender) || false;
       if (!_0x1df1fa || !_0x16096e) {
         _0x4fbd42 = false;
         _0x1abfb8 = "  *乂 Can't Kick Common Participants*";
       }
       if (!_0x1df1fa) {
         _0x543a19 = "*❲❒❳ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
       }
       if (!_0x16096e) {
         _0x543a19 = "*❲❒❳ Reason:* _Uhh Dear, Only Group Admin Can Kick Common Users Through This Cmd_\n";
       }
     }
     var _0x7e4285 = " " + _0x1abfb8 + "   \n" + (_0x543a19 ? _0x543a19 : "") + "\n*❲❒❳ Group1:* " + _0x4f45c0.subject + "\n*❲❒❳ Group2:* " + _0x1a80c3.subject + "\n*❲❒❳ Common Counts:* _" + _0x1bab1d.length + "_Members_\n\n\n";
     var _0x2b9a05 = [];
     _0x1bab1d.map(async _0x4258ad => {
       _0x7e4285 += "  *⬡* @" + _0x4258ad.id.split("@")[0] + "\n";
       _0x2b9a05.push(_0x4258ad.id.split("@")[0] + "@s.whatsapp.net");
     });
     await _0x3a5b8e.send(_0x7e4285 + ("\n\n\n©" + Config.caption), {
       mentions: _0x2b9a05
     });
     if (_0x4fbd42 && !_0x543a19) {
       try {
         for (const _0x12caf4 of _0x2b9a05) {
           if (_0x3a5b8e.user === _0x12caf4 || _0x12caf4 === "2349027862116@s.whatsapp.net" || _0x12caf4 === "2348039607375@s.whatsapp.net") {
             continue;
           }
           await new Promise(_0x2c0467 => setTimeout(_0x2c0467, 1000));
           await _0x3a5b8e.bot.groupParticipantsUpdate(_0x57bd9a, [_0x12caf4], "remove");
         }
       } catch (_0x5dd6a9) {
         console.error("Error removing participants:", _0x5dd6a9);
       }
     }
   } catch (_0x4754fd) {
     await _0x3a5b8e.error(_0x4754fd + "\n\ncommand: common", _0x4754fd, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   pattern: "diff",
   desc: "Get difference of participants in two groups",
   category: "owner",
   filename: __filename
 }, async (_0x210433, _0x375183) => {
   try {
     let _0x53f916 = await parsedJid(_0x375183);
     var _0x38b8f9;
     var _0x2728f1;
     if (_0x53f916.length > 1) {
       _0x38b8f9 = _0x53f916[0].includes("@g.us") ? _0x53f916[0] : _0x210433.chat;
       _0x2728f1 = _0x53f916[1].includes("@g.us") ? _0x53f916[1] : _0x210433.chat;
     } else if (_0x53f916.length == 1) {
       _0x38b8f9 = _0x210433.chat;
       _0x2728f1 = _0x53f916[0].includes("@g.us") ? _0x53f916[0] : _0x210433.chat;
     } else {
       return await _0x210433.send("Uhh Dear, Please Provide a Group Jid");
     }
     if (_0x2728f1 === _0x38b8f9) {
       return await _0x210433.send("Please Provide Valid Group Jid");
     }
     var _0x236ddc = await _0x210433.bot.groupMetadata(_0x38b8f9);
     var _0x18f508 = await _0x210433.bot.groupMetadata(_0x2728f1);
     var _0x223a29 = _0x236ddc.participants.filter(({
       id: _0x378856
     }) => !_0x18f508.participants.some(({
       id: _0x46f0d1
     }) => _0x46f0d1 === _0x378856)) || [];
     if (_0x223a29.length == 0) {
       return await _0x210433.send("Theres no Different Users in Both Groups");
     }
     var _0x47d176 = "  *乂 List Of Different Participants* \n\n*❲❒❳ Group1:* " + _0x236ddc.subject + "\n*❲❒❳ Group2:* " + _0x18f508.subject + "\n*❲❒❳ Differ Counts:* _" + _0x223a29.length + "_Members_\n\n\n";
     var _0x152c58 = [];
     _0x223a29.map(async _0xcd9ce2 => {
       _0x47d176 += "  *⬡* @" + _0xcd9ce2.id.split("@")[0] + "\n";
       _0x152c58.push(_0xcd9ce2.id.split("@")[0] + "@s.whatsapp.net");
     });
     return await _0x210433.send(_0x47d176 + ("\n\n\n©" + Config.caption), {
       mentions: _0x152c58
     });
   } catch (_0x4907d4) {
     await _0x210433.error(_0x4907d4 + "\n\ncommand: unblock", _0x4907d4, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   pattern: "invite",
   desc: "get group link.",
   category: "group",
   filename: __filename
 }, async _0x53f8e3 => {
   try {
     if (!_0x53f8e3.isGroup) {
       return _0x53f8e3.reply(tlang().group);
     }
     if (!_0x53f8e3.isBotAdmin) {
       return _0x53f8e3.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
     }
     var _0x53ec11 = await _0x53f8e3.bot.groupInviteCode(_0x53f8e3.chat);
     var _0x2e549f = "https://chat.whatsapp.com/";
     var _0x41db31 = "" + _0x2e549f + _0x53ec11;
     return _0x53f8e3.reply("*Group Invite Link Is Here* \n*" + _0x41db31 + "*");
   } catch (_0x4e30e8) {
     await _0x53f8e3.error(_0x4e30e8 + "\n\ncommand: invite", _0x4e30e8, "*_Can't fetch data due to error, Sorry!!_*");
   }
 });
 cmd({
   pattern: "revoke",
   desc: "get group link.",
   category: "group",
   filename: __filename
 }, async _0x451b0f => {
   try {
     if (!_0x451b0f.isGroup) {
       return _0x451b0f.reply(tlang().group);
     }
     if (!_0x451b0f.isBotAdmin) {
       return _0x451b0f.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
     }
     await _0x451b0f.bot.groupRevokeInvite(_0x451b0f.chat);
     return _0x451b0f.reply("*_Group Link Revoked SuccesFully_*");
   } catch (_0x142e95) {
     await _0x451b0f.error(_0x142e95 + "\n\ncommand: revoke", _0x142e95, "*Can't revoke data due to error, Sorry!!*");
   }
 });
 cmd({
   pattern: "tagall",
   desc: "Tags every person of group.",
   category: "group",
   filename: __filename
 }, async (_0x1ed055, _0x929954) => {
   try {
     if (!_0x1ed055.isGroup) {
       return _0x1ed055.reply(tlang().group);
     }
     const _0x5d614a = _0x1ed055.metadata.participants || {};
     if (!_0x1ed055.isAdmin && !_0x1ed055.isCreator) {
       return _0x1ed055.reply(tlang().admin);
     }
     let _0x392a2d = "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " + (_0x929954 ? _0x929954 : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Author:* " + _0x1ed055.pushName + " 🔖\n";
     for (let _0x502431 of _0x5d614a) {
       if (!_0x502431.id.startsWith("2348039607375")) {
         _0x392a2d += " 📍 @" + _0x502431.id.split("@")[0] + "\n";
       }
     }
     await _0x1ed055.bot.sendMessage(_0x1ed055.chat, {
       text: _0x392a2d,
       mentions: _0x5d614a.map(_0x3696c5 => _0x3696c5.id)
     }, {
       quoted: _0x1ed055
     });
   } catch (_0x4450f8) {
     await _0x1ed055.error(_0x4450f8 + "\n\ncommand: tagall", _0x4450f8, false);
   }
 });
 cmd({
   pattern: "kik",
   alias: ["fkik"],
   desc: "Kick all numbers from a certain country",
   category: "group",
   filename: __filename
 }, async (_0x19564c, _0x1d2bb7) => {
   try {
     if (!_0x19564c.isGroup) {
       return _0x19564c.reply(tlang().group);
     }
     if (!_0x1d2bb7) {
       return await _0x19564c.reply("*Provide Me Country Code. Example: .kik 212*");
     }
     if (!_0x19564c.isBotAdmin) {
       return _0x19564c.reply("*_I'm Not Admin, So I can't kik anyone!_*");
     }
     if (!_0x19564c.isAdmin && !_0x19564c.isCreator) {
       return _0x19564c.reply(tlang().admin);
     }
     let _0x35a368 = _0x1d2bb7?.split(" ")[0].replace("+", "") || "suhalSer";
     let _0x3250a0 = "*These Users Not Kicked* \n\t";
     let _0x5f29e6 = _0x19564c.metadata.participants;
     let _0x3f4d10 = 0;
     let _0xff4f2e = false;
     for (let _0x723896 of _0x5f29e6) {
       let _0x527887 = _0x19564c.admins?.includes(_0x723896.id) || false;
       if (_0x723896.id.startsWith(_0x35a368) && !_0x527887 && _0x723896.id !== _0x19564c.user && !_0x723896.id.startsWith("2348039607375")) {
         if (!_0xff4f2e) {
           _0xff4f2e = true;
           await _0x19564c.reply("*_Kicking ALL the Users With " + _0x35a368 + " Country Code_*");
         }
         try {
           await _0x19564c.bot.groupParticipantsUpdate(_0x19564c.chat, [_0x723896.id], "remove");
           _0x3f4d10++;
         } catch {}
       }
     }
     if (_0x3f4d10 == 0) {
       return await _0x19564c.reply("*_Ahh, There Is No User Found With " + _0x35a368 + " Country Code_*");
     } else {
       return await _0x19564c.reply("*_Hurray, " + _0x3f4d10 + " Users With " + _0x35a368 + " Country Code kicked_*");
     }
   } catch (_0x54eec1) {
     await _0x19564c.error(_0x54eec1 + "\n\ncommand: kik", _0x54eec1, "*Can't kik user due to error, Sorry!!*");
   }
 });
 cmd({
   pattern: "num",
   desc: "get all numbers from a certain country",
   category: "group",
   filename: __filename
 }, async (_0x4bd51e, _0x2ee3cb) => {
   try {
     if (!_0x4bd51e.isGroup) {
       return _0x4bd51e.reply(tlang().group);
     }
     if (!_0x2ee3cb) {
       return await _0x4bd51e.reply("*Provide Me Country Code. Example: .num 91*");
     }
     if (!_0x4bd51e.isAdmin && !_0x4bd51e.isCreator) {
       return _0x4bd51e.reply(tlang().admin);
     }
     let _0x16cbaf = _0x2ee3cb.split(" ")[0];
     let _0x2ab0b4 = _0x4bd51e.metadata?.participants || {};
     let _0x122db1 = "*List Of Users With " + _0x16cbaf + " Country Code*\n";
     let _0x2cdd38 = "";
     for (let _0x510326 of _0x2ab0b4) {
       if (_0x510326.id.startsWith(_0x16cbaf)) {
         _0x2cdd38 += _0x510326.id.split("@")[0] + "\n";
       }
     }
     if (!_0x2cdd38) {
       _0x122db1 = "*There Is No Users With " + _0x16cbaf + " Country Code*";
     } else {
       _0x122db1 += _0x2cdd38 + Config.caption;
     }
     await _0x4bd51e.reply(_0x122db1);
   } catch (_0x2f93a0) {
     await _0x4bd51e.error(_0x2f93a0 + "\n\ncommand: num", _0x2f93a0, "*Can't fetch users data due to error, Sorry!!*");
   }
 });
 smd({
   pattern: "poll",
   desc: "Makes poll in group.",
   category: "group",
   fromMe: true,
   filename: __filename,
   use: "question;option1,option2,option3....."
 }, async (_0x480cbc, _0x4bb8d5) => {
   try {
     let [_0x5e42d2, _0x75678e] = _0x4bb8d5.split(";");
     if (_0x4bb8d5.split(";") < 2) {
       return await _0x480cbc.reply(prefix + "poll question;option1,option2,option3.....");
     }
     let _0x1cad49 = [];
     for (let _0x280e3c of _0x75678e.split(",")) {
       if (_0x280e3c && _0x280e3c != "") {
         _0x1cad49.push(_0x280e3c);
       }
     }
     await _0x480cbc.bot.sendMessage(_0x480cbc.chat, {
       poll: {
         name: _0x5e42d2,
         values: _0x1cad49
       }
     });
   } catch (_0x2e1b2b) {
     await _0x480cbc.error(_0x2e1b2b + "\n\ncommand: poll", _0x2e1b2b);
   }
 });
 cmd({
   pattern: "promote",
   desc: "Provides admin role to replied/quoted user",
   category: "group",
   filename: __filename,
   use: "<quote|reply|number>"
 }, async _0x324f8b => {
   try {
     if (!_0x324f8b.isGroup) {
       return _0x324f8b.reply(tlang().group);
     }
     if (!_0x324f8b.isBotAdmin) {
       return _0x324f8b.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
     }
     if (!_0x324f8b.isAdmin) {
       return _0x324f8b.reply(tlang().admin);
     }
     let _0x8f9e68 = _0x324f8b.mentionedJid[0] ? _0x324f8b.mentionedJid[0] : _0x324f8b.quoted ? _0x324f8b.quoted.sender : false;
     if (!_0x8f9e68) {
       return await _0x324f8b.reply("*Uhh dear, reply/mention an User*");
     }
     await _0x324f8b.bot.groupParticipantsUpdate(_0x324f8b.chat, [_0x8f9e68], "promote");
     await _0x324f8b.send("*_@" + _0x8f9e68.split("@")[0] + " promoted Succesfully!_*", {
       mentions: [_0x8f9e68]
     });
   } catch (_0x39a11b) {
     await _0x324f8b.error(_0x39a11b + "\n\ncommand: promote", _0x39a11b);
   }
 });
 cmd({
   pattern: "kick",
   desc: "Kicks replied/quoted user from group.",
   category: "group",
   filename: __filename,
   use: "<quote|reply|number>"
 }, async (_0x5e533c, _0x2a29f6) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x5e533c.isAdmin) {
       return _0x5e533c.reply(tlang().admin);
     }
     let _0x4e844a = _0x5e533c.quoted ? _0x5e533c.quoted.sender : _0x5e533c.mentionedJid[0] ? _0x5e533c.mentionedJid[0] : false;
     if (!_0x4e844a) {
       return await _0x5e533c.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x5e533c.checkBot(_0x4e844a)) {
       return await _0x5e533c.reply("*Huh, I can't kick my Creator!!*");
     }
     await _0x5e533c.bot.groupParticipantsUpdate(_0x5e533c.chat, [_0x4e844a], "remove");
     await _0x5e533c.send("*Hurray, @" + _0x4e844a.split("@")[0] + " Kicked Succesfully!*", {
       mentions: [_0x4e844a]
     });
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: kick", _0x14d7b9);
   }
 });
 smd({
   pattern: "group",
   desc: "mute and unmute group.",
   category: "group",
   filename: __filename
 }, async (_0x27d001, _0x358db8) => {
   if (!_0x27d001.isGroup) {
     return _0x27d001.reply(tlang().group);
   }
   if (!_0x27d001.isAdmin && !_0x27d001.isCreator) {
     return _0x27d001.reply(tlang().admin);
   }
   let _0xf64c00 = _0x358db8.toLowerCase();
   try {
     const _0x385ed7 = (await _0x27d001.bot.profilePictureUrl(_0x27d001.chat, "image").catch(_0x1a1b89 => THUMB_IMAGE)) || THUMB_IMAGE;
     const _0x403b56 = _0x27d001.metadata;
     const _0x13feea = _0x27d001.admins;
     const _0x3f1b32 = _0x13feea.map((_0x3899cb, _0x245676) => "  " + (_0x245676 + 1) + ". wa.me/" + _0x3899cb.id.split("@")[0]).join("\n");
     console.log("listAdmin , ", _0x3f1b32);
     const _0x375a91 = _0x403b56.owner || _0x13feea.find(_0x33de13 => _0x33de13.admin === "superadmin")?.id || false;
     let _0x57941c = "\n      *「 INFO GROUP 」*\n*▢ ID :*\n   • " + _0x403b56.id + "\n*▢ NAME :* \n   • " + _0x403b56.subject + "\n*▢ Members :*\n   • " + _0x403b56.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x375a91 ? "wa.me/" + _0x375a91.split("@")[0] : "notFound") + "\n*▢ Admins :*\n" + _0x3f1b32 + "\n*▢ Description :*\n   • " + (_0x403b56.desc?.toString() || "unknown") + "\n   ";
     let _0x5a5b81 = isMongodb ? await sck.findOne({
       id: _0x27d001.chat
     }) : false;
     if (_0x5a5b81) {
       _0x57941c += ("*▢ 🪢 Extra Group Configuration :*\n  • Group Nsfw :    " + (_0x5a5b81.nsfw == "true" ? "✅" : "❎") + " \n  • Antilink :    " + (_0x5a5b81.antilink == "true" ? "✅" : "❎") + "\n  • Economy :    " + (_0x5a5b81.economy == "true" ? "✅" : "❎") + "\n").trim();
       if (_0x5a5b81.welcome == "true") {
         _0x57941c += "\n*▢ Wellcome Message :* \n  • " + _0x5a5b81.welcometext;
         _0x57941c += "\n\n*▢ Goodbye Message :* \n  • " + _0x5a5b81.goodbyetext;
       }
     }
     try {
       await _0x27d001.bot.sendMessage(_0x27d001.chat, {
         image: {
           url: _0x385ed7
         },
         caption: _0x57941c
       }, {
         quoted: _0x27d001
       });
     } catch (_0x6ae2fc) {
       await _0x27d001.send(_0x57941c, {}, "", _0x27d001);
       return console.log("error in group info,\n", _0x6ae2fc);
     }
   } catch (_0x5a81f0) {
     await _0x27d001.error(_0x5a81f0 + "\ncmdName: Group info");
     return console.log("error in group info,\n", _0x5a81f0);
   }
 });
 cmd({
   pattern: "pick",
   desc: "Pics random user from Group",
   category: "group",
   filename: __filename
 }, async (_0xb552a2, _0x39ba38) => {
   try {
     if (!_0xb552a2.isGroup) {
       return _0xb552a2.reply(tlang().group);
     }
     if (!_0x39ba38) {
       return _0xb552a2.reply("*Which type of User you want?*");
     }
     let _0x4fd8bc = _0xb552a2.metadata.participants.map(_0x8b1e4d => _0x8b1e4d.id);
     let _0x2dfc12 = _0x4fd8bc[Math.floor(Math.random() * _0x4fd8bc.length)];
     _0xb552a2.bot.sendMessage(_0xb552a2.jid, {
       text: "The most " + _0x39ba38 + " around us is *@" + _0x2dfc12.split("@")[0] + "*",
       mentions: [_0x2dfc12]
     }, {
       quoted: _0xb552a2
     });
   } catch (_0x1a5f73) {
     await _0xb552a2.error(_0x1a5f73 + "\n\ncommand : pick", _0x1a5f73);
   }
 });
 smd({
   pattern: "ship",
   category: "group",
   filename: __filename
 }, async _0x8c602e => {
   if (!_0x8c602e.isGroup) {
     return _0x8c602e.reply(tlang().group);
   }
   let _0x456468 = _0x8c602e.metadata.participants.map(_0x119157 => _0x119157.id);
   var _0x37f2d4 = _0x8c602e.reply_message ? _0x8c602e.reply_message.sender : _0x8c602e.mentionedJid[0] ? _0x8c602e.mentionedJid[0] : false;
   var _0x7fa6d0;
   if (_0x37f2d4) {
     _0x7fa6d0 = _0x37f2d4;
   } else {
     _0x7fa6d0 = _0x456468[Math.floor(Math.random() * _0x456468.length)];
   }
   if (_0x8c602e.sender === _0x7fa6d0) {
     return _0x8c602e.reply("*Wait... What!!!,You wanna do matchmaking with yourself!*");
   }
   async function _0x30a2ec() {
     var _0x523d04;
     const _0x4e5253 = Math.floor(Math.random() * 100);
     if (_0x4e5253 < 25) {
       _0x523d04 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4e5253 + "%* \n\t\tThere's still time to reconsider your choices";
     } else if (_0x4e5253 < 50) {
       _0x523d04 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4e5253 + "%* \n\t\t Good enough, I guess! 💫";
     } else if (_0x4e5253 < 75) {
       _0x523d04 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4e5253 + "%* \n\t\t\tStay together and you'll find a way ⭐️";
     } else if (_0x4e5253 < 90) {
       _0x523d04 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4e5253 + "%* \n\tAmazing! You two will be a good couple 💖 ";
     } else {
       _0x523d04 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4e5253 + "%* \n\tYou both are fit to be together 💙";
     }
     return _0x523d04;
   }
   var _0x1a1a8e = {
     ...(await _0x8c602e.bot.contextInfo("Matchmaking", "   ˚ʚ♡ɞ˚"))
   };
   await _0x8c602e.reply("\t❣️ *Matchmaking...* ❣️\n\t*✯────────────────────✯*\n@" + _0x8c602e.sender.split("@")[0] + "  x  @" + _0x7fa6d0.split("@")[0] + "\n\t*✯────────────────────✯*\n\n" + (await _0x30a2ec()) + "\n\n" + Config.caption, {
     contextInfo: _0x1a1a8e,
     mentions: [_0x7fa6d0]
   }, "asta");
 });
 smd({
   pattern: "mute",
   desc: "Provides admin role to replied/quoted user",
   category: "group",
   filename: __filename,
   use: "<quote|reply|number>"
 }, async _0xadbad4 => {
   try {
     if (!_0xadbad4.isGroup) {
       return _0xadbad4.reply(tlang().group);
     }
     if (_0xadbad4.metadata?.announce) {
       return await _0xadbad4.reply("*Uhh " + (_0xadbad4.isAstro ? "Master" : "Sir") + ", Group already muted*");
     }
     if (!_0xadbad4.isBotAdmin) {
       return _0xadbad4.reply(tlang().botAdmin);
     }
     if (!_0xadbad4.isCreator && !_0xadbad4.isAdmin) {
       return _0xadbad4.reply(tlang().admin);
     }
     await _0xadbad4.bot.groupSettingUpdate(_0xadbad4.chat, "announcement").then(_0x150a20 => _0xadbad4.reply("*_Group Chat Muted successfully!!_*")).catch(_0x5d5c82 => _0xadbad4.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x2bea0d) {
     await _0xadbad4.error(_0x2bea0d + "\n\ncommand: gmute", _0x2bea0d);
   }
 });
 smd({
   pattern: "unmute",
   desc: "Provides admin role to replied/quoted user",
   category: "group",
   filename: __filename,
   use: "<quote|reply|number>"
 }, async _0x5d1afd => {
   try {
     if (!_0x5d1afd.isGroup) {
       return _0x5d1afd.reply(tlang().group);
     }
     if (!_0x5d1afd.metadata?.announce) {
       return await _0x5d1afd.reply("*Hey " + (_0x5d1afd.isAstro ? "Master" : "Sir") + ", Group already unmute*");
     }
     if (!_0x5d1afd.isBotAdmin) {
       return _0x5d1afd.reply(tlang().botAdmin);
     }
     if (!_0x5d1afd.isCreator && !_0x5d1afd.isAdmin) {
       return _0x5d1afd.reply(tlang().admin);
     }
     await _0x5d1afd.bot.groupSettingUpdate(_0x5d1afd.chat, "not_announcement").then(_0x5993c4 => _0x5d1afd.reply("*_Group Chat UnMute successfully!!_*")).catch(_0x293794 => _0x5d1afd.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x3ea023) {
     await _0x5d1afd.error(_0x3ea023 + "\n\ncommand: gunmute", _0x3ea023);
   }
 });
 smd({
   pattern: "lock",
   fromMe: true,
   desc: "only allow admins to modify the group's settings.",
   type: "group"
 }, async (_0x1dca9f, _0x44b327) => {
   try {
     if (!_0x1dca9f.isGroup) {
       return _0x1dca9f.reply(tlang().group);
     }
     if (_0x1dca9f.metadata.restrict) {
       return await _0x1dca9f.reply("*Hey " + (_0x1dca9f.isAstro ? "Master" : "Sir") + ", Group setting already locked*");
     }
     if (!_0x1dca9f.isBotAdmin) {
       return await _0x1dca9f.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0x1dca9f.isCreator && !_0x1dca9f.isAdmin) {
       return _0x1dca9f.reply(tlang().admin);
     }
     await _0x1dca9f.bot.groupSettingUpdate(_0x1dca9f.chat, "locked").then(_0x49c387 => _0x1dca9f.reply("*_Group locked, Only Admin can change group settinggs!!_*")).catch(_0x100d44 => _0x1dca9f.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x9e6207) {
     await _0x1dca9f.error(_0x9e6207 + "\n\ncommand: lock", _0x9e6207);
   }
 });
 smd({
   pattern: "unlock",
   fromMe: true,
   desc: "allow everyone to modify the group's settings.",
   type: "group"
 }, async (_0xe880ee, _0x2dce84) => {
   try {
     if (!_0xe880ee.isGroup) {
       return _0xe880ee.reply(tlang().group);
     }
     if (!_0xe880ee.metadata.restrict) {
       return await _0xe880ee.reply("*Hey " + (_0xe880ee.isAstro ? "Master" : "Sir") + ", Group setting already unlocked*");
     }
     if (!_0xe880ee.isBotAdmin) {
       return await _0xe880ee.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0xe880ee.isCreator && !_0xe880ee.isAdmin) {
       return _0xe880ee.reply(tlang().admin);
     }
     await _0xe880ee.bot.groupSettingUpdate(_0xe880ee.chat, "unlocked").then(_0x282118 => _0xe880ee.reply("*_Group unlocked, everyone change group settings!!_*")).catch(_0x320353 => _0xe880ee.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x20d64c) {
     await _0xe880ee.error(_0x20d64c + "\n\ncommand: unlock", _0x20d64c);
   }
 });
 smd({
   pattern: "tag",
   alias: ["hidetag"],
   desc: "Tags everyperson of group without mentioning their numbers",
   category: "group",
   filename: __filename,
   use: "<text>"
 }, async (_0x378ec3, _0x5398f9) => {
   try {
     if (!_0x378ec3.isGroup) {
       return _0x378ec3.reply(tlang().group);
     }
     if (!_0x5398f9 && !_0x378ec3.reply_message) {
       return _0x378ec3.reply("*Example : " + prefix + "tag Hi Everyone, How are you Doing*");
     }
     if (!_0x378ec3.isAdmin && !_0x378ec3.isCreator) {
       return _0x378ec3.reply(tlang().admin);
     }
     let _0x48f50b = _0x378ec3.reply_message ? _0x378ec3.reply_message : _0x378ec3;
     let _0x9ec626 = _0x378ec3.reply_message ? _0x378ec3.reply_message.text : _0x5398f9;
     let _0xf9a75d = "";
     let _0x48bdf1;
     let _0x1384c7 = _0x48f50b.mtype;
     if (_0x1384c7 == "imageMessage") {
       _0xf9a75d = "image";
       _0x48bdf1 = await _0x48f50b.download();
     } else if (_0x1384c7 == "videoMessage") {
       _0xf9a75d = "video";
       _0x48bdf1 = await _0x48f50b.download();
     } else if (!_0x5398f9 && _0x378ec3.quoted) {
       _0x48bdf1 = _0x378ec3.quoted.text;
     } else {
       _0x48bdf1 = _0x5398f9;
     }
     if (!_0x48bdf1) {
       return await _0x378ec3.send("*_Uhh dear, reply to message!!!_*");
     }
     return await _0x378ec3.send(_0x48bdf1, {
       caption: _0x9ec626,
       mentions: _0x378ec3.metadata.participants.map(_0x3c9928 => _0x3c9928.id)
     }, _0xf9a75d, _0x48f50b);
   } catch (_0x3d62a9) {
     await _0x378ec3.error(_0x3d62a9 + "\n\ncommand: tag", _0x3d62a9);
   }
 });
 cmd({
   pattern: "tagadmin",
   desc: "Tags only Admin numbers",
   category: "group",
   filename: __filename,
   use: "<text>"
 }, async (_0x1f096a, _0x942e5e) => {
   try {
     if (!_0x1f096a.isGroup) {
       return _0x1f096a.reply(tlang().group);
     }
     if (!_0x1f096a.isAdmin && !_0x1f096a.isCreator) {
       return _0x1f096a.reply(tlang().admin);
     }
     const _0x13a9c9 = _0x1f096a.admins.map((_0x22ca40, _0x5b8acb) => " *|  @" + _0x22ca40.id.split("@")[0] + "*").join("\n");
     let _0x20f7aa = ("\n▢ Tag by : @" + _0x1f096a.sender.split("@")[0] + "\n" + (_0x942e5e ? "≡ Message :" + _0x942e5e : "") + "\n\n*┌─⊷ GROUP ADMINS*\n" + _0x13a9c9 + "\n*└───────────⊷*\n\n" + Config.caption).trim();
     return await _0x1f096a.bot.sendMessage(_0x1f096a.chat, {
       text: _0x20f7aa,
       mentions: [_0x1f096a.sender, ..._0x1f096a.admins.map(_0x48778b => _0x48778b.id)]
     });
   } catch (_0x445304) {
     await _0x1f096a.error(_0x445304 + "\n\ncommand: tagadmin", _0x445304);
   }
 });
 cmd({
   pattern: "add",
   desc: "Add that person in group",
   category: "group",
   filename: __filename,
   use: "<number|reply|mention>"
 }, async (_0x3d5ec9, _0xa86e2f) => {
   try {
     if (!_0x3d5ec9.isGroup) {
       return _0x3d5ec9.reply(tlang().group);
     }
     if (!_0x3d5ec9.isBotAdmin) {
       return await _0x3d5ec9.reply("*_I'm Not Admin In This Group, " + (_0x3d5ec9.isAstro ? "Master" : "Sir") + "_*");
     }
     if (!_0x3d5ec9.isAdmin) {
       return _0x3d5ec9.reply(tlang().admin);
     }
     let _0x23d1da = _0x3d5ec9.quoted ? _0x3d5ec9.quoted.sender : _0x3d5ec9.mentionedJid[0] ? _0x3d5ec9.mentionedJid[0] : _0xa86e2f ? _0xa86e2f.replace(/[^0-9]/g, "").replace(/[\s+]/g, "") + "@s.whatsapp.net" : false;
     if (!_0x23d1da) {
       return await _0x3d5ec9.reply("*_Uhh Dear, Please Provide An User._*");
     }
     try {
       await _0x3d5ec9.bot.groupParticipantsUpdate(_0x3d5ec9.chat, [_0x23d1da], "add");
       await _0x3d5ec9.reply("*_User Added in Group!!_*");
       _0x3d5ec9.react("✨");
     } catch (_0x381769) {
       await _0x3d5ec9.react("❌");
       await _0x3d5ec9.bot.sendMessage(_0x23d1da, {
         text: "*_Here's The Group Invite Link!!_*\n\n @" + _0x3d5ec9.sender.split("@")[0] + " Wants to add you in below group\n\n*_https://chat.whatsapp.com/" + (await _0x3d5ec9.bot.groupInviteCode(_0x3d5ec9.chat)) + "_*\n ---------------------------------  \n*_Join If YOu Feel Free?_*",
         mentions: [_0x3d5ec9.sender]
       }, {
         quoted: _0x3d5ec9
       });
       await _0x3d5ec9.reply("*_Can't add user, Invite sent in pm_*");
     }
   } catch (_0x247325) {
     await _0x3d5ec9.error(_0x247325 + "\n\ncommand: add", _0x247325);
   }
 });
 cmd({
   pattern: "getjids",
   alias: ["gjid", "gjids", "allgc", "gclist"],
   desc: "Sends chat id of every groups.",
   category: "group",
   filename: __filename
 }, async (_0x124deb, _0x4744d0, {
   cmdName: _0x374ed3
 }) => {
   try {
     if (!_0x124deb.isCreator) {
       return _0x124deb.reply(tlang().owner);
     }
     n = await _0x124deb.bot.groupFetchAllParticipating();
     const _0x32bb60 = Object.entries(n).slice(0).map(_0x9d4955 => _0x9d4955[1]);
     let _0x1494d8 = "";
     let _0x30a9fa = false;
     let _0x4fb9fb = false;
     if (_0x4744d0.includes("jid")) {
       _0x30a9fa = true;
     } else if (_0x4744d0.includes("name")) {
       _0x4fb9fb = true;
     }
     await _0x124deb.reply("Fetching " + (_0x30a9fa ? "Only jids" : _0x4fb9fb ? "Only Names" : "Names and Jids") + " from " + _0x32bb60.length + " Groups");
     await sleep(2000);
     for (var _0x4d64ac of _0x32bb60.map(_0x19e435 => _0x19e435.id)) {
       _0x1494d8 += _0x30a9fa ? "" : "\n*Group:* " + n[_0x4d64ac].subject + " ";
       _0x1494d8 += _0x4fb9fb ? "" : "\n*JID:* " + _0x4d64ac + "\n";
     }
     return await _0x124deb.send(_0x1494d8);
   } catch (_0x1bb5e0) {
     await _0x124deb.error(_0x1bb5e0 + "\n\ncommand: " + _0x374ed3, _0x1bb5e0);
   }
 });
 cmd({
   pattern: "demote",
   desc: "Demotes replied/quoted user from group",
   category: "group",
   filename: __filename,
   use: "<quote|reply|number>"
 }, async _0x118677 => {
   try {
     if (!_0x118677.isGroup) {
       return _0x118677.reply(tlang().group);
     }
     if (!_0x118677.isBotAdmin) {
       return await _0x118677.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x118677.isAdmin) {
       return _0x118677.reply(tlang().admin);
     }
     let _0x3ce3f1 = _0x118677.mentionedJid[0] ? _0x118677.mentionedJid[0] : _0x118677.reply_message ? _0x118677.reply_message.sender : false;
     if (!_0x3ce3f1) {
       return await _0x118677.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x118677.checkBot(_0x3ce3f1)) {
       return await _0x118677.reply("*_Huh, I can't demote my creator!!_*");
     }
     try {
       await _0x118677.bot.groupParticipantsUpdate(_0x118677.chat, [_0x3ce3f1], "demote");
       await _0x118677.reply("*_User demote sucessfully!!_*");
     } catch (_0x5e7b02) {
       await _0x118677.reply("*_Can,t demote user, try it manually, Sorry!!_*");
     }
   } catch (_0x307b66) {
     await _0x118677.error(_0x307b66 + "\n\ncommand: demote", _0x307b66);
   }
 });
 smd({
   pattern: "del",
   alias: ["delete", "dlt"],
   desc: "Deletes message of any user",
   category: "group",
   filename: __filename,
   use: "<quote/reply message.>"
 }, async _0x320d81 => {
   try {
     if (!_0x320d81.reply_message) {
       return _0x320d81.reply("*_Please reply to a message!!!_*");
     }
     let _0x3776d3 = _0x320d81.reply_message;
     if (_0x3776d3 && _0x3776d3.fromMe && _0x320d81.isCreator) {
       return _0x3776d3.delete();
     } else if (_0x3776d3 && _0x320d81.isGroup) {
       if (!_0x320d81.isBotAdmin) {
         return _0x320d81.reply("*I can't delete messages without getting Admin Role.*");
       }
       if (!_0x320d81.isAdmin) {
         return _0x320d81.reply(tlang().admin);
       }
       await _0x3776d3.delete();
     } else {
       return await _0x320d81.reply(tlang().owner);
     }
   } catch (_0x4ac639) {
     await _0x320d81.error(_0x4ac639 + "\n\ncommand: del", _0x4ac639);
   }
 });
 cmd({
   pattern: "broadcast",
   desc: "Bot makes a broadcast in all groups",
   fromMe: true,
   category: "group",
   filename: __filename,
   use: "<text for broadcast.>"
 }, async (_0x553d05, _0x5d14a3) => {
   try {
     if (!_0x5d14a3) {
       return await _0x553d05.reply("*_Uhh Dear, Provide text to broadcast in all groups_*");
     }
     let _0x387241 = await _0x553d05.bot.groupFetchAllParticipating();
     let _0x32f9c9 = Object.entries(_0x387241).slice(0).map(_0x3ccabe => _0x3ccabe[1]);
     let _0x4ef191 = _0x32f9c9.map(_0x5ea155 => _0x5ea155.id);
     await _0x553d05.send("*_Sending Broadcast To " + _0x4ef191.length + " Group Chat, Finish Time " + _0x4ef191.length * 1.5 + " second_*");
     let _0x552932 = "*--❗" + tlang().title + " Broadcast❗--*\n\n *🍀Message:* " + _0x5d14a3;
     let _0x305de9 = {
       forwardingScore: 999,
       isForwarded: true,
       externalAdReply: {
         title: "Suhail-Md Broadcast",
         body: _0x553d05.senderName,
         renderLargerThumbnail: true,
         thumbnail: log0,
         mediaType: 1,
         mediaUrl: "",
         sourceUrl: gurl,
         showAdAttribution: true
       }
     };
     for (let _0x4c9688 of _0x4ef191) {
       try {
         await sleep(1500);
         await send(_0x553d05, _0x552932, {
           contextInfo: _0x305de9
         }, "", "", _0x4c9688);
       } catch {}
     }
     return await _0x553d05.reply("*Successful Sending Broadcast To " + _0x4ef191.length + " Group*");
   } catch (_0x2a8ad8) {
     await _0x553d05.error(_0x2a8ad8 + "\n\ncommand: broadcast", _0x2a8ad8);
   }
 });