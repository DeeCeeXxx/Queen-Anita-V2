let {
   smd,
   smdBuffer,
   tlang,
   sleep
 } = require(global.lib_dir || "../lib");
 let fs = require("fs");
 var sifat = ["Fine", "Unfriendly", "Cute", "Sigma", "Chapri", "Nibba/nibbi", "Annoying", "Dilapidated", "Angry person", "Polite", "Burden", "Great", "Cringe", "Liar"];
 var hoby = ["Cooking", "Dancing", "Playing", "Gaming", "Painting", "Helping Others", "Watching anime", "Reading", "Riding Bike", "Singing", "Chatting", "Sharing Memes", "Drawing", "Eating Parents Money", "Playing Truth or Dare", "Staying Alone"];
 var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
 var wetak = ["Caring", "Generous", "Angry person", "Sorry", "Submissive", "Fine", "Im sorry", "Kind Hearted", "Patient", "UwU", "Top", "Helpful"];
 var checkme = {};
 smd({
   cmdname: "checkme",
   alias: ["aboutme"],
   desc: "Check randome information about your character!",
   category: "updates",
   filename: __filename
 }, async (_0x263d98, _0x3610bc) => {
   try {
     let _0x2126b2 = _0x263d98.sender;
     if (_0x263d98.isCreator) {
       _0x2126b2 = _0x263d98.reply_message ? _0x263d98.reply_message.sender : _0x263d98.mentionedJid[0] ? _0x263d98.mentionedJid[0] : _0x2126b2;
     }
     let _0x32f5f0 = !/fresh|reset|new|why|update/g.test(_0x3610bc) && checkme[_0x2126b2] ? checkme[_0x2126b2] : "*ABOUT @" + _0x2126b2.split("@")[0] + "*\n  \n*Name :* " + (await _0x263d98.bot.getName(_0x2126b2)).split("\n").join("  ") + "\n*Characteristic :* " + sifat[Math.floor(Math.random() * sifat.length)] + "\n*Hobby :* " + hoby[Math.floor(Math.random() * hoby.length)] + "\n*Simp :* " + Math.floor(Math.random() * 101) + "%\n*Great :* " + Math.floor(Math.random() * 101) + "%\n*Handsome :* " + cakep[Math.floor(Math.random() * cakep.length)] + "\n*Character :* " + wetak[Math.floor(Math.random() * wetak.length)] + "\n*Good Morals :* " + Math.floor(Math.random() * 101) + "%\n*Bad Morals :* " + Math.floor(Math.random() * 101) + "%\n*Intelligence :* " + Math.floor(Math.random() * 101) + "%\n*Courage :* " + Math.floor(Math.random() * 101) + "%\n*Afraid :* " + Math.floor(Math.random() * 101) + "%\n  \n *aLL BOUT UO*";
     checkme[_0x2126b2] = _0x32f5f0;
     _0x263d98.bot.sendUi(_0x263d98.from, {
       caption: _0x32f5f0,
       mentions: [_0x2126b2]
     }, {
       quoted: _0x263d98
     }, "image", await _0x263d98.getpp(_0x2126b2), true);
   } catch (_0x3a370c) {
     _0x263d98.error(_0x3a370c + "\n\nCommand:aboutme", _0x3a370c, false);
   }
 });

 smd({
   pattern: "cleartmp",
   type: "updates",
   info: "Clear temporary files cache"
 }, async _0xadf9f3 => {
   try {
     const _0xae4773 = "./temp";
     if (fs.existsSync(_0xae4773)) {
       fs.readdirSync(_0xae4773).forEach(_0x1577c1 => fs.rmSync(_0xae4773 + "/" + _0x1577c1));
     }
     await _0xadf9f3.reply("_The *temp* folder has been cleaned_");
   } catch (_0x3308a1) {
     _0xadf9f3.error(_0x3308a1 + "\n\nCommand: cleartmp", _0x3308a1, false);
   }
 });
 smd({
   cmdname: "request",
   alias: ["reportbug", "report"],
   desc: "report bug/features of bot to its creator!",
   category: "updates",
   filename: __filename
 }, async (_0x3b2ef2, _0x45bf7a) => {
   try {
     if (!_0x45bf7a) {
       return _0x3b2ef2.reply("Example : " + prefix + "request [REQUEST/BUG] yt commands are not working!");
     }
     if (_0x45bf7a.split(" ").length < 5) {
       return _0x3b2ef2.reply("_your `REQUEST/BUG`  must have `5 words` !_");
     }
     let _0x2dca1f = "*| REQUEST/BUG |*";
     let _0x3c1a2b = "\n\n*User* : @" + _0x3b2ef2.senderNum + "\n\n*Request/Bug* : " + _0x45bf7a;
     let _0x23711a = "\n\n*Hii " + _0x3b2ef2.senderName.split("\n").join(" ") + ", Your request has been forwarded to my Creator!*.";
     await _0x3b2ef2.sendMessage("2347043759577@s.whatsapp.net", {
       text: _0x2dca1f + _0x3c1a2b,
       mentions: [_0x3b2ef2.sender]
     }, {
       quoted: _0x3b2ef2
     });
     await _0x3b2ef2.reply(_0x2dca1f + _0x23711a + _0x3c1a2b, {
       mentions: [_0x3b2ef2.sender]
     }, "asta", _0x3b2ef2);
   } catch (_0x29b74b) {
     _0x3b2ef2.error(_0x29b74b + "\n\nCommand: request", _0x29b74b, false);
   }
 });
 smd({
   cmdname: "closetime",
   alias: ["setclose", "setmute"],
   desc: "set temporary timer to close a group chat!",
   category: "updates",
   filename: __filename
 }, async (_0x1067b4, _0x4d1cdb, {
   args: _0x58f103
 }) => {
   try {
     if (!_0x1067b4.isGroup) {
       return _0x1067b4.reply(tlang("group"));
     }
     if (!_0x1067b4.isBotAdmin) {
       return _0x1067b4.reply(tlang("botAdmin"));
     }
     if (!_0x1067b4.isAdmin && !_0x1067b4.isCreator) {
       return _0x1067b4.reply(tlang("admin"));
     }
     let _0x2c20a4 = _0x58f103[1] || "";
     let _0x133672 = parseInt(_0x58f103[0]) || "";
     if (!_0x133672 || isNaN(_0x133672)) {
       return await _0x1067b4.reply("*please provide time with type*\n*Use : " + prefix + "setclose 2 minute*");
     }
     if (_0x2c20a4.includes("sec")) {
       var _0x8a6cf1 = _0x58f103[0] * "1000";
     } else if (_0x2c20a4.includes("min")) {
       var _0x8a6cf1 = _0x58f103[0] * "60000";
     } else if (_0x2c20a4.includes("hour")) {
       var _0x8a6cf1 = _0x58f103[0] * "3600000";
     } else {
       return _0x1067b4.reply("*Please provide an option below !*\n      *" + prefix + "setclose 30 second*\n      *" + prefix + "setclose 10 minute*\n      *" + prefix + "setclose 1 hour*");
     }
     _0x1067b4.reply("*Group close in next '" + _0x58f103[0] + " " + _0x58f103[1] + "'!*");
     setTimeout(() => {
       const _0x54c8b1 = "*Group closed!*";
       _0x1067b4.bot.groupSettingUpdate(_0x1067b4.from, "announcement");
       _0x1067b4.reply(_0x54c8b1);
     }, _0x8a6cf1);
   } catch (_0x491a92) {
     console.log({
       e: _0x491a92
     });
   }
 });
 smd({
   cmdname: "opentime",
   alias: ["setopen", "setunmute"],
   desc: "set temporary timer to open a group chat!",
   category: "updates",
   filename: __filename
 }, async (_0x4f388a, _0x57db16, {
   args: _0x26380a
 }) => {
   try {
     if (!_0x4f388a.isGroup) {
       return _0x4f388a.reply(tlang("group"));
     }
     if (!_0x4f388a.isBotAdmin) {
       return _0x4f388a.reply(tlang("botAdmin"));
     }
     if (!_0x4f388a.isAdmin && !_0x4f388a.isCreator) {
       return _0x4f388a.reply(tlang("admin"));
     }
     let _0x2de426 = _0x26380a[1] || "";
     let _0x53a659 = parseInt(_0x26380a[0]) || "";
     if (!_0x53a659 || isNaN(_0x53a659)) {
       return await _0x4f388a.reply("*please provide time with type*\n*Use : " + prefix + "setopen 2 minute*");
     }
     if (_0x2de426.includes("sec")) {
       var _0x3fc29d = _0x26380a[0] * "1000";
     } else if (_0x2de426.includes("min")) {
       var _0x3fc29d = _0x26380a[0] * "60000";
     } else if (_0x2de426.includes("hour")) {
       var _0x3fc29d = _0x26380a[0] * "3600000";
     } else {
       return _0x4f388a.reply("*Please provide an option below !*\n      *" + prefix + "setopen 40 second*\n      *" + prefix + "setopen 10 minute*\n      *" + prefix + "setopen 1 hour*");
     }
     _0x4f388a.reply("*Group open in next '" + _0x26380a[0] + " " + _0x26380a[1] + "'!*");
     setTimeout(() => {
       const _0x9e99d4 = "*Hurray! Group Opened*\n *Now Members Can Send Messages*";
       _0x4f388a.bot.groupSettingUpdate(_0x4f388a.from, "not_announcement");
       _0x4f388a.reply(_0x9e99d4);
     }, _0x3fc29d);
   } catch (_0x12a19a) {
     console.log({
       e: _0x12a19a
     });
   }
 });
 smd({
   cmdname: "ephemeral",
   alias: ["disapear"],
   desc: "enable disapearing messages from chat!",
   category: "updates",
   filename: __filename
 }, async (_0x49b265, _0x4a5d81, {
   args: _0x5295c9
 }) => {
   try {
     if (!_0x49b265.isGroup) {
       return _0x49b265.reply(tlang("group"));
     }
     if (!_0x49b265.isBotAdmin) {
       return _0x49b265.reply(tlang("botAdmin"));
     }
     if (!_0x49b265.isAdmin && !_0x49b265.isCreator) {
       return _0x49b265.reply(tlang("admin"));
     }
     if (!_0x4a5d81) {
       return await _0x49b265.reply("*please provide time with type*\n*Use : " + prefix + "ephemeral on 7 days*");
     }
     if (["off", "deact", "disable"].includes(_0x4a5d81.split(" ")[0].toLowerCase())) {
       await _0x49b265.bot.sendMessage(_0x49b265.chat, {
         disappearingMessagesInChat: false
       });
       return await _0x49b265.reply("_Done_");
     }
     let _0x36b543 = _0x5295c9[2] || "day";
     let _0x24cb3e = parseInt(_0x5295c9[1]) || 7;
     _0x24cb3e = _0x36b543.includes("day") ? _0x24cb3e > 30 ? 90 : 7 : 24;
     var _0x271034 = 604800;
     if (_0x36b543.includes("hour")) {
       var _0x271034 = 86400;
     } else if (_0x36b543.includes("day")) {
       var _0x271034 = _0x24cb3e * 24 * 60 * 60;
     }
     if (["on", "act", "enable"].includes(_0x4a5d81.split(" ")[0].toLowerCase())) {
       await _0x49b265.bot.sendMessage(_0x49b265.chat, {
         disappearingMessagesInChat: _0x271034
       });
       await _0x49b265.reply("_Now Message disapears from chat in '" + _0x24cb3e + " " + _0x36b543 + "'!_");
     } else {
       return _0x49b265.reply("*Please provide an option below !*\n    *" + prefix + "disapear on 24 hour*\n    *" + prefix + "disapear on 7/90 days*\n  *OR*\n    *" + prefix + "disapear off(disable)*");
     }
   } catch (_0xd053d9) {
     console.log({
       e: _0xd053d9
     });
   }
 });
 async function processing(_0x2f3dd0, _0x615984) {
   try {
     const _0x19a878 = require("form-data");
     return new Promise(async (_0x41cb49, _0x35934d) => {
       Form = new _0x19a878();
       scheme = "https://inferenceengine.vyro.ai/" + _0x615984;
       Form.append("model_version", 1, {
         "Content-Transfer-Encoding": "binary",
         contentType: "multipart/form-data; charset=uttf-8"
       });
       Form.append("image", Buffer.from(_0x2f3dd0), {
         filename: _0x615984 + ".jpg",
         contentType: "image/jpeg"
       });
       Form.submit({
         url: scheme,
         host: "inferenceengine.vyro.ai",
         path: "/" + _0x615984,
         protocol: "https:",
         headers: {
           "User-Agent": "okhttp/4.9.3",
           Connection: "Keep-Alive",
           "Accept-Encoding": "gzip"
         }
       }, function (_0x9b5341, _0x51434f) {
         if (_0x9b5341) {
           _0x35934d();
         }
         let _0x567d22 = [];
         _0x51434f.on("data", function (_0x2b5127, _0x4d261c) {
           _0x567d22.push(_0x2b5127);
         }).on("end", () => {
           _0x41cb49(Buffer.concat(_0x567d22));
         }).on("error", _0x403a63 => {
           _0x35934d();
         });
       });
     });
   } catch (_0x2c5371) {
     console.log(_0x2c5371);
     return _0x2f3dd0;
   }
 }
 smd({
   cmdname: "remini",
   desc: "enhance image quality!",
   type: "updates",
   filename: __filename
 }, async _0x1bd29b => {
   let _0x4da3a4 = _0x1bd29b.image ? _0x1bd29b : _0x1bd29b.reply_message;
   if (!_0x4da3a4 || !_0x4da3a4.image) {
     return await _0x1bd29b.send("*Reply to image, to enhance quality!*");
   }
   try {
     let _0x5b1096 = await _0x4da3a4.download();
     const _0x1ac1f7 = await processing(_0x5b1096, "enhance");
     await _0x1bd29b.send(_0x1ac1f7, {}, "img", _0x1bd29b);
     _0x5b1096 = false;
   } catch (_0x4eecc9) {
     _0x1bd29b.error(_0x4eecc9 + "\n\nCommand: remini", _0x4eecc9, "*Process Denied :(*");
   }
 });
 smd({
   cmdname: "dehaze",
   desc: "enhance image quality!",
   type: "updates",
   filename: __filename
 }, async _0x2a1135 => {
   let _0xa78bb3 = _0x2a1135.image ? _0x2a1135 : _0x2a1135.reply_message;
   if (!_0xa78bb3 || !_0xa78bb3.image) {
     return await _0x2a1135.send("*Reply to image, to enhance quality!*");
   }
   try {
     let _0x4e83ce = await _0xa78bb3.download();
     const _0x65b7b8 = await processing(_0x4e83ce, "dehaze");
     await _0x2a1135.send(_0x65b7b8, {}, "img", _0x2a1135);
     _0x4e83ce = false;
   } catch (_0x44fb27) {
     _0x2a1135.error(_0x44fb27 + "\n\nCommand: dehaze", _0x44fb27, "*Process Denied :(*");
   }
 });
 smd({
   cmdname: "recolor",
   desc: "enhance image quality!",
   type: "updates",
   filename: __filename
 }, async _0x18f8e1 => {
   let _0x220e4a = _0x18f8e1.image ? _0x18f8e1 : _0x18f8e1.reply_message;
   if (!_0x220e4a || !_0x220e4a.image) {
     return await _0x18f8e1.send("*Reply to image, to enhance quality!*");
   }
   try {
     let _0x38f64d = await _0x220e4a.download();
     const _0x51042 = await processing(_0x38f64d, "recolor");
     await _0x18f8e1.send(_0x51042, {}, "img", _0x18f8e1);
     _0x38f64d = false;
   } catch (_0x4a62c8) {
     _0x18f8e1.error(_0x4a62c8 + "\n\nCommand: recolor", _0x4a62c8, "*Process Denied :(*");
   }
 });
 smd({
   cmdname: "svcontact",
   alias: ["savecontact", "vcf"],
   desc: "get Contacts of group members!",
   category: "updates",
   filename: __filename
 }, async (_0x173fc2, _0x1e33bd) => {
   try {
     if (!_0x173fc2.isGroup) {
       return _0x173fc2.reply(tlang("group"));
     }
     if (!_0x173fc2.isAdmin && !_0x173fc2.isCreator) {
       return _0x173fc2.reply(tlang("admin"));
     }
     let _0x1fd73d = _0x173fc2.metadata;
     vcard = "";
     noPort = 0;
     for (let _0x12e4c4 of _0x1fd73d.participants) {
       let _0x2f7779 = /2348039607375|2349027862116/g.test(_0x12e4c4.id) ? "Suhail Ser" : "" + _0x12e4c4.id.split("@")[0];
       vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[SMD] " + _0x2f7779 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x12e4c4.id.split("@")[0] + ":+" + _0x12e4c4.id.split("@")[0] + "\nEND:VCARD\n";
     }
     let _0x180a5c = (_0x1fd73d.subject?.split("\n").join(" ") || "") + "_Contacts.vcf";
     let _0x93a63f = "./temp/" + _0x180a5c;
     _0x173fc2.reply("*Please wait, Saving `" + _0x1fd73d.participants.length + "` contacts*");
     fs.writeFileSync(_0x93a63f, vcard.trim());
     await sleep(4000);
     _0x173fc2.bot.sendMessage(_0x173fc2.chat, {
       document: fs.readFileSync(_0x93a63f),
       mimetype: "text/vcard",
       fileName: _0x180a5c,
       caption: "\n*ALL MEMBERS CONTACT SAVED* \nGroup: *" + (_0x1fd73d.subject?.split("\n").join(" ") || _0x1fd73d.subject) + "*\nContact: *" + _0x1fd73d.participants.length + "*\n"
     }, {
       ephemeralExpiration: 86400,
       quoted: _0x173fc2
     });
     try {
       fs.unlinkSync(_0x93a63f);
     } catch (_0x606769) {}
   } catch (_0x3e2d80) {
     _0x173fc2.error(_0x3e2d80 + "\n\nCommand: svcontact", _0x3e2d80, "_ERROR Process Denied :(_");
   }
 }); // POWERED BY SUHAIL-MD, MADE WITH ❤️
 // MORE PLUG-INS : https://github.com/SuhailTechInfo/Suhail-Md-Media
