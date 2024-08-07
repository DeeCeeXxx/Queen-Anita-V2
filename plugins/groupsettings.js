global.warncount = process.env.WARN_COUNT || global.warncount || "3";
global.MsgsInLog = process.env.MSGS_IN_LOG || global.MsgsInLog || "false";
const {
  groupdb,
  userdb,
  bot_,
  smd,
  sendWelcome,
  Config,
  tlang,
  sleep,
  prefix,
} = require("../lib");
const axios = require("axios");
const astro_patch = require("../lib/plugins");
smd(
  {
    pattern: "lydea",
    alias: ["chatbot"],
    desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
    fromMe: true,
    category: "ai",
    filename: __filename,
  },
  async (_0x1a5020, _0x1f22c3, { cmdName: _0x431455 }) => {
    try {
      let _0x974aae = _0x1f22c3.split(" ")[0].toLowerCase().trim();
      let _0x44755b =
        (await groupdb.findOne({
          id: _0x1a5020.chat,
        })) ||
        (await groupdb.new({
          id: _0x1a5020.chat,
        }));
      let _0x4924e5 = (await bot_.findOne({
        id: "bot_" + _0x1a5020.user,
      })) ||
        (await groupdb.new({
          id: "bot_" + _0x1a5020.user,
        })) || {
          chatbot: "false",
        };
      if (_0x974aae == "all" || _0x974aae === "global") {
        if (_0x4924e5.chatbot == "true") {
          return await _0x1a5020.send(
            "*" + _0x431455 + " was already enabled to all chat!.*"
          );
        }
        await bot_.updateOne(
          {
            id: "bot_" + _0x1a5020.user,
          },
          {
            chatbot: "true",
          }
        );
        return await _0x1a5020.send(
          "*" + _0x431455 + " successfully enabled to all chats!.*"
        );
      } else if (
        _0x974aae.startsWith("on") ||
        _0x974aae.startsWith("act") ||
        _0x974aae.startsWith("enable")
      ) {
        if (_0x44755b.chatbot == "true" || _0x4924e5.chatbot == "true") {
          return await _0x1a5020.send(
            "*" + _0x431455 + " was already enabled.*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x1a5020.chat,
          },
          {
            chatbot: "true",
          }
        );
        return await _0x1a5020.send(
          "*" + _0x431455 + " activated successfully.*"
        );
      } else if (
        _0x974aae.startsWith("off") ||
        _0x974aae.startsWith("deact") ||
        _0x974aae.startsWith("disable")
      ) {
        if (_0x44755b.chatbot == "false" && _0x4924e5.chatbot == "false") {
          return await _0x1a5020.send(
            "*" + _0x431455 + " was already disabled.*"
          );
        }
        await bot_.updateOne(
          {
            id: "bot_" + _0x1a5020.user,
          },
          {
            chatbot: "false",
          }
        );
        await groupdb.updateOne(
          {
            id: _0x1a5020.chat,
          },
          {
            chatbot: "false",
          }
        );
        return await _0x1a5020.send(
          "*" + _0x431455 + " deactivated successfully.*"
        );
      } else {
        return await _0x1a5020.reply(
          "*_" +
            _0x431455 +
            " Currently *" +
            (_0x4924e5.chatbot == "true"
              ? "Enabled in 'all' Chats"
              : _0x44755b.chatbot == "true"
              ? "Enabled in Chat"
              : "Disabled in Chat") +
            "!_*\n*_Use On/Off/all to enable/disable " +
            _0x431455 +
            "_*"
        );
      }
    } catch (_0x1a9758) {
      _0x1a5020.error(_0x1a9758 + "\n\ncommand: lydea(chatbot)", _0x1a9758);
    }
  }
);
let warn = {};
warn.addwarn = async (_0x535f84, _0x1e53d3, _0x445500 = {}) => {
  try {
    let _0x285cd0 =
      (await userdb.findOne({
        id: _0x535f84,
      })) ||
      (await userdb.new({
        id: _0x535f84,
      }));
    let _0x84b1f8 = _0x285cd0.warn || {};
    if (!_0x84b1f8[_0x1e53d3]) {
      _0x84b1f8[_0x1e53d3] = [];
    }
    var _0x1a434e = {
      chat: "PRIVATE",
      reason: "Inapropriate Behaviour",
      date: new Date(),
      warnedby: tlang().title,
      ..._0x445500,
    };
    _0x84b1f8[_0x1e53d3].push(_0x1a434e);
    _0x285cd0 = await userdb.updateOne(
      {
        id: _0x535f84,
      },
      {
        warn: _0x84b1f8,
      }
    );
    return {
      status: true,
      warning: _0x84b1f8[_0x1e53d3].length,
      user: _0x285cd0,
    };
  } catch (_0x5aeabd) {
    return {
      status: false,
      warning: 0,
      user: {},
      error: _0x5aeabd,
    };
  }
};
smd(
  {
    pattern: "checkwarn",
    alias: ["listwarn", "chatwarn", "allwarn"],
    desc: "create paste of text.",
    category: "user",
    filename: __filename,
  },
  async (_0x598674, _0x1c4990) => {
    try {
      let _0x4604cb = "";
      let _0x581b05 = _0x598674.sender;
      if (_0x598674.isCreator) {
        _0x581b05 = _0x598674.reply_message
          ? _0x598674.reply_message.sender
          : _0x598674.mentionedJid[0]
          ? _0x598674.mentionedJid[0]
          : _0x581b05;
      }
      let _0x31a5b0 =
        (await userdb.findOne({
          id: _0x581b05,
        })) ||
        (await userdb.new({
          id: _0x581b05,
        }));
      let _0x40e695 = _0x31a5b0.warn || false;
      let _0x49f508 = {};
      if (_0x40e695 && _0x1c4990 === "all") {
        _0x40e695 = _0x31a5b0.warn;
      } else if (_0x40e695 && _0x40e695[_0x598674.chat]) {
        _0x49f508[_0x598674.chat] = [..._0x40e695[_0x598674.chat]];
        _0x40e695 = _0x49f508;
      } else {
        _0x40e695 = false;
      }
      let _0xfcc9b7 = _0x1c4990 === "all" ? true : !_0x40e695[_0x598674.chat];
      if (!_0x31a5b0 || !_0x40e695 || !_0xfcc9b7) {
        return await _0x598674.send("*_User didn't have any warning yet!!_*");
      }
      console.log("allwarn : ", _0x40e695);
      for (const _0x15bd99 in _0x40e695) {
        let _0x52d2b3 = _0x40e695[_0x15bd99];
        _0x4604cb +=
          "\n╭─────────────◆\n│ *[ID] : " +
          (_0x15bd99.includes("@")
            ? (await _0x598674.bot.getName(_0x15bd99)) || _0x15bd99
            : _0x15bd99) +
          "*\n│ *[TOTAL WARNING] : " +
          _0x40e695[_0x15bd99].length +
          "*\n┝─────────────◆\n";
        for (let _0x36bd30 = 0; _0x36bd30 < _0x52d2b3.length; _0x36bd30++) {
          _0x4604cb +=
            "┝── *WARNING " +
            (_0x36bd30 + 1) +
            "* ──\n│  *DATE:* " +
            _0x52d2b3[_0x36bd30].date +
            " " +
            (_0x52d2b3[_0x36bd30].reason
              ? "  \n│  *REASON:* " + _0x52d2b3[_0x36bd30].reason
              : "") +
            "\n│  *WARNED BY:* " +
            _0x52d2b3[_0x36bd30].warnedby +
            "\n│  *CHAT:* " +
            _0x52d2b3[_0x36bd30].chat +
            "\n";
        }
        _0x4604cb += "╰─────────────◆\n";
      }
      return await _0x598674.reply(
        _0x4604cb ? _0x4604cb : "*_User didn't have any warning yet!!_*"
      );
    } catch (_0x44b38e) {
      await _0x598674.error(_0x44b38e + "\n\nCommand: chatwarn", _0x44b38e);
    }
  }
);
smd(
  {
    pattern: "warn",
    fromMe: true,
    desc: "warn a user!",
    category: "user",
    filename: __filename,
    use: " < USER >",
  },
  async (_0xb9222e, _0x4cb71f) => {
    try {
      let _0x5746a6 = _0xb9222e.reply_message
        ? _0xb9222e.reply_message.sender
        : _0xb9222e.mentionedJid[0]
        ? _0xb9222e.mentionedJid[0]
        : false;
      if (!_0x5746a6) {
        return await _0xb9222e.send("*_Uhh please, reply to a user!!_*");
      }
      let _0x314399 =
        (await userdb.findOne({
          id: _0x5746a6,
        })) ||
        (await userdb.new({
          id: _0x5746a6,
        }));
      let _0x5980c1 = _0x314399.warn || {};
      if (!_0x5980c1[_0xb9222e.chat]) {
        _0x5980c1[_0xb9222e.chat] = [];
      }
      var _0x389244 = {
        chat: _0xb9222e.isGroup
          ? _0xb9222e.metadata?.subject || "GROUP"
          : "PRIVATE CHAT",
        reason: _0x4cb71f,
        date: _0xb9222e.date,
        warnedby: _0xb9222e.senderName,
      };
      _0x5980c1[_0xb9222e.chat].push(_0x389244);
      await userdb.updateOne(
        {
          id: _0x5746a6,
        },
        {
          warn: _0x5980c1,
        }
      );
      let _0x46237b = parseInt(global.warncount) || 3;
      if (
        _0x5980c1[_0xb9222e.chat].length > _0x46237b &&
        !_0xb9222e.checkBot(_0x5746a6)
      ) {
        if (_0xb9222e.isGroup) {
          if (_0xb9222e.isBotAdmin) {
            await _0xb9222e.send(
              "*_Hey @" +
                _0x5746a6.split("@")[0] +
                ", Kicking you from group!_*\n*_Because Your warn limit exceed!_*",
              {
                mentions: [_0x5746a6],
              }
            );
            await _0xb9222e.bot.groupParticipantsUpdate(
              _0xb9222e.chat,
              [_0x5746a6],
              "remove"
            );
          } else {
            return await _0xb9222e.send(
              "*_Hey @" +
                _0x5746a6.split("@")[0] +
                " Dont Spam, Your warn limit exceed!_*"
            );
          }
        } else {
          await _0xb9222e.send(
            "*_Hey @" +
              _0x5746a6.split("@")[0] +
              ", Blocking you!_*\n*_Because Your warn limit exceed!_*",
            {
              mentions: [_0x5746a6],
            }
          );
          await _0xb9222e.bot.updateBlockStatus(_0x5746a6, "block");
        }
      } else {
        return await _0xb9222e.send(
          "*_Hey @" + _0x5746a6.split("@")[0] + " warning added, Don't spam!_*",
          {
            mentions: [_0x5746a6],
          }
        );
      }
    } catch (_0x229851) {
      await _0xb9222e.error(_0x229851 + "\n\nCommand: warn ", _0x229851, false);
    }
  }
);
smd(
  {
    pattern: "resetwarn",
    desc: "create paste of text.",
    category: "user",
    filename: __filename,
    use: " user ",
  },
  async (_0x204e61, _0xad20a9) => {
    try {
      if (!_0x204e61.isCreator && !_0x204e61.isAdmin) {
        return await _0x204e61.reply(tlang().admin);
      }
      let _0x16177d = _0x204e61.reply_message
        ? _0x204e61.reply_message.sender
        : _0x204e61.mentionedJid[0]
        ? _0x204e61.mentionedJid[0]
        : false;
      if (!_0x16177d) {
        return await _0x204e61.send("*_Uhh please, reply to a user!!_*");
      }
      let _0x3397c7 =
        (await userdb.findOne({
          id: _0x16177d,
        })) ||
        (await userdb.new({
          id: _0x16177d,
        })) ||
        {};
      let _0x1aa30d = _0x3397c7.warn || {};
      if (
        _0x204e61.isCreator &&
        _0xad20a9.toLowerCase() === "all" &&
        _0x1aa30d
      ) {
        _0x1aa30d = {};
      } else {
        if (!_0x3397c7 || !_0x1aa30d || !_0x1aa30d[_0x204e61.chat]) {
          return await _0x204e61.send("*_User didn't have any warning yet!!_*");
        }
        delete _0x1aa30d[_0x204e61.chat];
      }
      await userdb.updateOne(
        {
          id: _0x16177d,
        },
        {
          warn: _0x1aa30d,
        }
      );
      await _0x204e61.reply(
        "*User is free as a bird now!*\n*All warns has been deleted!*"
      );
    } catch (_0x2b8f6c) {
      await _0x204e61.error(_0x2b8f6c + "\n\nCommand: resetwarn", _0x2b8f6c);
    }
  }
);
smd(
  {
    pattern: "act",
    alias: ["activate", "active"],
    desc: "Switches for varios works.",
    category: "moderation",
    filename: __filename,
  },
  async (_0x1c1427, _0x2c32fb) => {
    try {
      if (!_0x1c1427.isGroup) {
        return _0x1c1427.reply(tlang().group);
      }
      const _0x2e197f = _0x1c1427.botNumber;
      const _0x571a11 = _0x1c1427.isAdmin;
      let _0x14856e = _0x2c32fb?.split(" ")[0].toLowerCase()?.trim() || false;
      if (!_0x571a11 && !_0x1c1427.isCreator) {
        return _0x1c1427.reply(tlang().admin);
      }
      let _0x599658 =
        (await groupdb.findOne({
          id: _0x1c1427.chat,
        })) ||
        (await groupdb.new({
          id: _0x1c1427.chat,
        })) ||
        false;
      if (!_0x599658) {
        return await _0x1c1427.reply(
          "*_Uhh dear, Group not found in Databse!_*"
        );
      }
      switch (_0x14856e) {
        case "antilink":
          {
            if (_0x599658.antilink !== "false") {
              return await _0x1c1427.reply(
                "*_Antilink was alredy enabled here!_*"
              );
            }
            await groupdb.updateOne(
              {
                id: _0x1c1427.chat,
              },
              {
                antilink: "warn",
              }
            );
            await _0x1c1427.reply("*_Enabled antilink in current chat.!_*");
          }
          break;
        case "economy":
          {
            if (_0x599658.economy == "true") {
              return await _0x1c1427.reply("*_Economy was alredy enabled.!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x1c1427.chat,
              },
              {
                economy: "true",
              }
            );
            await _0x1c1427.reply("*_Economy enabled in current chat.!_*");
          }
          break;
        case "events":
        case "event":
          {
            await groupdb.updateOne(
              {
                id: _0x1c1427.chat,
              },
              {
                welcome: "true",
                goodbye: "true",
              }
            );
            return await _0x1c1427.reply("*Successfully Enabled Events!*");
          }
          break;
        case "nsfw":
          {
            if (_0x599658.nsfw == "true") {
              return await _0x1c1427.reply("*_NSFW is already enabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x1c1427.chat,
              },
              {
                nsfw: "true",
              }
            );
            await _0x1c1427.reply("*_Successfully Enabled NSFW_*");
          }
          break;
        case "bot":
          {
            if (_0x599658.botenable == "true") {
              return await _0x1c1427.reply("*_bot is already enabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x1c1427.chat,
              },
              {
                botenable: "true",
              }
            );
            await _0x1c1427.reply("*_Successfully Enabled bot_*");
          }
          break;
        default: {
          _0x1c1427.reply(
            "Please provide me term like.\n1-events\n2-antilink\n3-economy\n4-bot"
          );
        }
      }
    } catch (_0x54acfc) {
      await _0x1c1427.error(_0x54acfc + "\n\ncommand: act", _0x54acfc);
    }
  }
);
smd(
  {
    pattern: "deact",
    alias: ["deactive", "deactivate"],
    desc: "Switches for varios works.",
    category: "moderation",
    filename: __filename,
  },
  async (_0x3dfe85, _0x4d9655) => {
    try {
      if (!_0x3dfe85.isGroup) {
        return _0x3dfe85.reply(tlang().group);
      }
      const _0x6df183 = _0x3dfe85.botNumber;
      const _0x66f7b9 = _0x3dfe85.isAdmin;
      let _0x22f3c7 = _0x4d9655?.split(" ")[0].toLowerCase()?.trim() || false;
      if (!_0x22f3c7) {
        return _0x3dfe85.reply(
          "❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy"
        );
      }
      if (!_0x66f7b9 && !_0x3dfe85.isCreator) {
        return _0x3dfe85.reply(tlang().admin);
      }
      let _0x39a7fb =
        (await groupdb.findOne({
          id: _0x3dfe85.chat,
        })) ||
        (await groupdb.new({
          id: _0x3dfe85.chat,
        })) ||
        false;
      if (!_0x39a7fb) {
        return await _0x3dfe85.reply(
          "*_Uhh dear, request not be proceed due to error!_*"
        );
      }
      switch (_0x22f3c7) {
        case "antilink":
          {
            if (_0x39a7fb.antilink == "false") {
              return _0x3dfe85.reply("*_Antilink was alredy disabled_*");
            }
            await groupdb.updateOne(
              {
                id: _0x3dfe85.chat,
              },
              {
                antilink: "false",
              }
            );
            _0x3dfe85.reply("*_disabled antilink in current chat!_*");
          }
          break;
        case "economy":
          {
            if (_0x39a7fb.economy == "false") {
              return _0x3dfe85.reply("*_Economy was alredy disabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x3dfe85.chat,
              },
              {
                economy: "false",
              }
            );
            _0x3dfe85.reply("*disabled Economy in current chat.*");
          }
          break;
        case "events":
        case "event":
          {
            if (_0x39a7fb.events == "false") {
              return _0x3dfe85.reply("*_Events are already disabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x3dfe85.chat,
              },
              {
                welcome: "false",
                goodbye: "false",
              }
            );
            return _0x3dfe85.reply("*Successfully disabled Events!*");
          }
          break;
        case "nsfw":
          {
            if (_0x39a7fb.nsfw == "false") {
              return _0x3dfe85.reply("*_NSFW is already disabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x3dfe85.chat,
              },
              {
                nsfw: "false",
              }
            );
            _0x3dfe85.reply("*Successfully disabled NSFW*");
          }
          break;
        case "bot":
          {
            if (_0x39a7fb.botenable == "false") {
              return await _0x3dfe85.reply("*_bot is already disabled!_*");
            }
            await groupdb.updateOne(
              {
                id: _0x3dfe85.chat,
              },
              {
                botenable: "true",
              }
            );
            await _0x3dfe85.reply("*_Successfully disabled bot_*");
          }
          break;
        default: {
          _0x3dfe85.reply(
            "Please provide me term like.\n1-events\n2-antilink\n3-bot\n4-economy"
          );
        }
      }
    } catch (_0x27fa6e) {
      await _0x3dfe85.error(_0x27fa6e + "\n\ncommand: deact", _0x27fa6e);
    }
  }
);
smd(
  {
    pattern: "bot",
    desc: "activates and deactivates bot.\nuse buttons to toggle.",
    fromMe: true,
    category: "misc",
    filename: __filename,
  },
  async (_0x129972, _0x3811e7) => {
    try {
      let _0x1b1ab2 = _0x3811e7 ? _0x3811e7.toLowerCase().trim() : false;
      let _0x15047e = _0x1b1ab2 ? _0x1b1ab2.split(" ")[0] : false;
      let _0x13ab5f =
        (await groupdb.findOne({
          id: _0x129972.chat,
        })) ||
        (await groupdb.new({
          id: _0x129972.chat,
        }));
      if (!_0x15047e) {
        await _0x129972.send(
          "*_Bot *" +
            (_0x13ab5f.botenable === "false" ? "Disabled" : "Enabled") +
            " in this Chat!_*"
        );
      } else if (
        _0x15047e.startsWith("off") ||
        _0x15047e.startsWith("deact") ||
        _0x15047e.startsWith("disable")
      ) {
        if (_0x13ab5f.botenable === "false") {
          await _0x129972.send("*_Bot already disabled in current Chat!!_*");
        } else {
          await groupdb.updateOne(
            {
              id: _0x129972.chat,
            },
            {
              botenable: "false",
            }
          );
          await _0x129972.send("*_Bot Disabled Succesfully!_*");
        }
      } else if (
        _0x15047e.startsWith("on") ||
        _0x15047e.startsWith("act") ||
        _0x15047e.startsWith("enable")
      ) {
        if (_0x13ab5f.botenable === "true") {
          await _0x129972.send("*_Bot already enabled in current Chat!!_*");
        } else {
          await groupdb.updateOne(
            {
              id: _0x129972.chat,
            },
            {
              botenable: "true",
            }
          );
          await _0x129972.send("*_Bot Succesfully Enabled!_*");
        }
      } else {
        await _0x129972.send(
          "*_Provide Valid Instruction_*\n*Ex: _" + prefix + "bot on/off_*"
        );
      }
    } catch (_0x9db1e2) {
      _0x129972.error(_0x9db1e2 + "\n\ncommand: bot", _0x9db1e2);
    }
  }
);
smd(
  {
    pattern: "antitag",
    desc: "detect tagall in group chat, then kick them",
    fromMe: true,
    category: "misc",
    filename: __filename,
  },
  async (_0x27399d, _0x182372) => {
    try {
      let _0x206317 = _0x182372 ? _0x182372.toLowerCase().trim() : false;
      let _0x4a3f1c = _0x206317 ? _0x206317.split(" ")[0] : false;
      let _0x3dc11c =
        (await groupdb.findOne({
          id: _0x27399d.chat,
        })) ||
        (await groupdb.new({
          id: _0x27399d.chat,
        }));
      if (!_0x4a3f1c) {
        await _0x27399d.send(
          "*_Anti_tag *" +
            (_0x3dc11c.antitag === "false" ? "Disabled" : "Enabled") +
            " in this Chat!_*"
        );
      } else if (
        _0x4a3f1c.startsWith("off") ||
        _0x4a3f1c.startsWith("deact") ||
        _0x4a3f1c.startsWith("disable")
      ) {
        if (_0x3dc11c.antitag === "false") {
          await _0x27399d.send(
            "*_Anti_tag already disabled in current Chat!!_*"
          );
        } else {
          await groupdb.updateOne(
            {
              id: _0x27399d.chat,
            },
            {
              antitag: "false",
            }
          );
          await _0x27399d.send("*_Anti_tag Disabled Succesfully!_*");
        }
      } else if (
        _0x4a3f1c.startsWith("on") ||
        _0x4a3f1c.startsWith("act") ||
        _0x4a3f1c.startsWith("enable")
      ) {
        if (_0x3dc11c.antitag === "true") {
          await _0x27399d.send(
            "*_Anti_tag already enabled in current Chat!!_*"
          );
        } else {
          await groupdb.updateOne(
            {
              id: _0x27399d.chat,
            },
            {
              antitag: "true",
            }
          );
          await _0x27399d.send(
            "*_Anti_tag succesfully enabled in chat!_*\n*_Now bot kick user who tag all members!_*"
          );
        }
      } else {
        await _0x27399d.send(
          "*_Provide Valid Instruction_*\n*Ex: _" + prefix + "antitag on/off_*"
        );
      }
    } catch (_0x3141b6) {
      _0x27399d.error(_0x3141b6 + "\n\ncommand: antitag", _0x3141b6);
    }
  }
);
smd(
  {
    pattern: "antilink",
    desc: "activates and deactivates antilink.\nuse buttons to toggle.",
    category: "group",
    filename: __filename,
  },
  async (_0x25c82f, _0x4ae2c7, { smd: _0x23c42c }) => {
    try {
      if (!_0x25c82f.isGroup) {
        return _0x25c82f.reply(tlang().group);
      }
      if (!_0x25c82f.isAdmin && !_0x25c82f.isCreator) {
        return _0x25c82f.reply(tlang().admin);
      }
      let _0x495b9f = _0x4ae2c7 ? _0x4ae2c7.toLowerCase().trim() : false;
      let _0x520158 = _0x495b9f ? _0x495b9f.split(" ")[0] : false;
      let _0x7e1f39 =
        (await groupdb.findOne({
          id: _0x25c82f.chat,
        })) ||
        (await groupdb.new({
          id: _0x25c82f.chat,
        }));
      if (!_0x520158) {
        return await _0x25c82f.send(
          "*_Antilink " +
            (_0x7e1f39.antilink === "false" ? "Disabled" : "Enabled") +
            " in this Group!_* \n" +
            (_0x7e1f39.antilink === "false"
              ? ""
              : "*Current Mode:* _" + _0x7e1f39.antilink + "_") +
            "\n\n*Antilink Modes:* ```\n" +
            (prefix + _0x23c42c) +
            " kick (Delete Links & Kick Senders)\n" +
            (prefix + _0x23c42c) +
            " delete (Delete Links Only)\n" +
            (prefix + _0x23c42c) +
            " warn (warn & delete links)\n" +
            (prefix + _0x23c42c) +
            " off (Disable Antilink in chat) ```\n\n\n" +
            Config.caption
        );
      } else if (
        _0x520158.startsWith("off") ||
        _0x520158.startsWith("deact") ||
        _0x520158.startsWith("disable")
      ) {
        if (_0x7e1f39.antilink === "false") {
          return await _0x25c82f.send(
            "*_Anti_Link already disabled in current Chat!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x25c82f.chat,
          },
          {
            antilink: "false",
          }
        );
        return await _0x25c82f.send("*_Anti_Link Disabled Succesfully!_*");
      } else if (_0x520158.startsWith("kick")) {
        if (_0x7e1f39.antilink === "kick") {
          return await _0x25c82f.send(
            "*_Anti_Link already set to kick link senders!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x25c82f.chat,
          },
          {
            antilink: "kick",
          }
        );
        return await _0x25c82f.send(
          "*_Anti_Link Succesfully set to kick link senders!_*"
        );
      } else if (_0x520158.startsWith("delete")) {
        if (_0x7e1f39.antilink === "delete") {
          return await _0x25c82f.send(
            "*_Anti_Link already set to delete links!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x25c82f.chat,
          },
          {
            antilink: "delete",
          }
        );
        return await _0x25c82f.send(
          "*_Anti_Link Succesfully set to delete links from chat!_*"
        );
      } else if (_0x520158.startsWith("warn")) {
        if (_0x7e1f39.antilink === "warn") {
          return await _0x25c82f.send(
            "*_Anti_Link already set to warn link senders!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x25c82f.chat,
          },
          {
            antilink: "warn",
          }
        );
        return await _0x25c82f.send(
          "*_Anti_Link set to warn and delete links!_*"
        );
      } else {
        return await _0x25c82f.send(
          "*_Uhh Please, Provide Valid Instruction_*\n*Eg: _" +
            prefix +
            "antilink kick/delete/warn/off_*"
        );
      }
    } catch (_0x90fda9) {
      _0x25c82f.error(_0x90fda9 + "\n\ncommand: antilink", _0x90fda9);
    }
  }
);
smd(
  {
    pattern: "welcome",
    alias: ["setwelcome"],
    desc: "sets welcome message in specific group.",
    category: "group",
    filename: __filename,
  },
  async (_0x1e1e67, _0x1036fe) => {
    try {
      if (!_0x1e1e67.isGroup) {
        return _0x1e1e67.reply(tlang().group);
      }
      if (!_0x1e1e67.isAdmin && !_0x1e1e67.isCreator) {
        return _0x1e1e67.reply(tlang().admin);
      }
      let _0x2154d6 = _0x1036fe.toLowerCase().trim();
      let _0x558208 =
        (await groupdb.findOne({
          id: _0x1e1e67.chat,
        })) ||
        (await groupdb.new({
          id: _0x1e1e67.chat,
        }));
      if (_0x2154d6 === "on" || _0x2154d6 === "act" || _0x2154d6 === "enable") {
        if (_0x558208.welcome === "true") {
          return await _0x1e1e67.send(
            "*_Welcome already enabled in current group!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x1e1e67.chat,
          },
          {
            welcome: "true",
          }
        );
        return await _0x1e1e67.send("*Welcome successfully enabled!!*");
      }
      if (_0x558208.welcome !== "true") {
        return await _0x1e1e67.send(
          "*_Welcome *Disabled in this Group!_* \n*_Use on/off to enable/disable welcome_*"
        );
      }
      if (!_0x1036fe || _0x2154d6 === "get") {
        return await _0x1e1e67.reply("*Welcome :* " + _0x558208.welcometext);
      }
      if (
        _0x2154d6 === "off" ||
        _0x2154d6 === "deact" ||
        _0x2154d6 === "disable"
      ) {
        if (_0x558208.welcome === "false") {
          return await _0x1e1e67.send(
            "*_Welcome already disabled in current group!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x1e1e67.chat,
          },
          {
            welcome: "false",
          }
        );
        return await _0x1e1e67.send("*Welcome message disabled!!*");
      }
      await groupdb.updateOne(
        {
          id: _0x1e1e67.chat,
        },
        {
          welcometext: _0x1036fe,
          welcome: "true",
        }
      );
      await sendWelcome(_0x1e1e67, _0x1036fe);
    } catch (_0x582cfc) {
      _0x1e1e67.error(_0x582cfc + "\n\ncommand: setwelcome", _0x582cfc);
    }
  }
);
smd(
  {
    pattern: "goodbye",
    alias: ["setgoodbye", "setbye"],
    desc: "sets goodbye message in specific group.",
    category: "group",
    filename: __filename,
  },
  async (_0x2c1a56, _0x5dedfc) => {
    try {
      if (!_0x2c1a56.isGroup) {
        return _0x2c1a56.reply(tlang().group);
      }
      if (!_0x2c1a56.isAdmin && !_0x2c1a56.isCreator) {
        return _0x2c1a56.reply(tlang().admin);
      }
      let _0x604587 = _0x5dedfc.toLowerCase().trim();
      let _0xbcf3ee =
        (await groupdb.findOne({
          id: _0x2c1a56.chat,
        })) ||
        (await groupdb.new({
          id: _0x2c1a56.chat,
        }));
      if (_0x604587 === "on" || _0x604587 === "act" || _0x604587 === "enable") {
        if (_0xbcf3ee.goodbye === "true") {
          return await _0x2c1a56.send(
            "*_Goodbye already enabled in current group!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x2c1a56.chat,
          },
          {
            goodbye: "true",
          }
        );
        return await _0x2c1a56.send("*Goodbye successfully enabled!!*");
      }
      if (_0xbcf3ee.goodbye !== "true") {
        return await _0x2c1a56.send(
          "*_Goodbye *Disabled in this Group!_* \n*_Use on/off to enable/disable goodbye_*"
        );
      }
      if (!_0x5dedfc || _0x604587 === "get") {
        return await _0x2c1a56.reply(
          "*Goodbye Message :* " + _0xbcf3ee.goodbyetext
        );
      }
      if (
        _0x604587 === "off" ||
        _0x604587 === "deact" ||
        _0x604587 === "disable"
      ) {
        if (_0xbcf3ee.goodbye === "false") {
          return await _0x2c1a56.send(
            "*_Goodbye already disabled in current group!!_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x2c1a56.chat,
          },
          {
            goodbye: "false",
          }
        );
        return await _0x2c1a56.send("*Goodbye message disabled!!*");
      }
      await groupdb.updateOne(
        {
          id: _0x2c1a56.chat,
        },
        {
          goodbyetext: _0x5dedfc,
          goodbye: "true",
        }
      );
      await sendWelcome(_0x2c1a56, _0x5dedfc);
    } catch (_0x5dd573) {
      _0x2c1a56.error(_0x5dd573 + "\n\ncommand: setgoodbye", _0x5dd573);
    }
  }
);
smd(
  {
    pattern: "onlyadmin",
    alias: ["antimessge"],
    desc: "activates and deactivates onlyadmin.",
    category: "group",
    filename: __filename,
  },
  async (_0x18fcc8, _0x2d4a64, { cmdName: _0x3e69a5 }) => {
    try {
      if (!_0x18fcc8.isGroup) {
        return _0x18fcc8.reply(tlang().group);
      }
      if (!_0x18fcc8.isAdmin && !_0x18fcc8.isCreator) {
        return _0x18fcc8.reply(tlang().admin);
      }
      let _0x38fef2 =
        (await groupdb.findOne({
          id: _0x18fcc8.chat,
        })) ||
        (await groupdb.new({
          id: _0x18fcc8.chat,
        }));
      let _0x5b0eb3 = _0x2d4a64 ? _0x2d4a64.toLowerCase().trim() : false;
      let _0x119122 = _0x5b0eb3 ? _0x5b0eb3.split(" ")[0] : false;
      if (!_0x119122) {
        return await _0x18fcc8.send(
          "*_" +
            _0x3e69a5 +
            " *" +
            (_0x38fef2.onlyadmin === "false" ? "Disabled" : "Enabled") +
            " in this Group!_*\n *_Use on/off to enable/disable_*"
        );
      } else if (
        _0x119122.startsWith("off") ||
        _0x119122.startsWith("deact") ||
        _0x119122.startsWith("disable")
      ) {
        if (_0x38fef2.onlyadmin === "false") {
          return await _0x18fcc8.reply(
            "*_Onlyadmin Already Disabled in Current Chat_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x18fcc8.chat,
          },
          {
            onlyadmin: "false",
          }
        );
        await _0x18fcc8.bot.groupSettingUpdate(
          _0x18fcc8.chat,
          "not_announcement"
        );
        return await _0x18fcc8.send(
          "*" +
            _0x3e69a5 +
            " succesfully disable in group!_*\n*_Now everyone send message in group_*"
        );
      } else if (
        _0x119122.startsWith("on") ||
        _0x119122.startsWith("act") ||
        _0x119122.startsWith("enable")
      ) {
        if (_0x38fef2.onlyadmin === "true") {
          return await _0x18fcc8.reply(
            "*_Onlyadmin Already Enabled in Current Chat_*"
          );
        }
        if (_0x18fcc8.isBotAdmin) {
          await groupdb.updateOne(
            {
              id: _0x18fcc8.chat,
            },
            {
              onlyadmin: "true",
            }
          );
          await _0x18fcc8.bot.groupSettingUpdate(
            _0x18fcc8.chat,
            "announcement"
          );
          return await _0x18fcc8.send(
            "*" +
              _0x3e69a5 +
              " succesfully set to kick msg senders!_*\n*_Now only admins allow to send msg in group_*"
          );
        } else {
          return await _0x18fcc8.reply(
            "*_UHH Please, Provide Admin Role First_*"
          );
        }
      } else {
        return await _0x18fcc8.reply(
          "*_Please Provide Valid Instruction_*\n*_Use on/off to enable/disable_*"
        );
      }
    } catch (_0x53ffd3) {
      _0x18fcc8.error(_0x53ffd3 + "\n\ncommand: onlyadmin", _0x53ffd3);
    }
  }
);
smd(
  {
    pattern: "antibot",
    desc: "kick Bot Users from Group.!",
    category: "group",
    filename: __filename,
  },
  async (_0x3b3e26, _0x12cbbf, { cmdName: _0x12486d }) => {
    try {
      if (!_0x3b3e26.isGroup) {
        return _0x3b3e26.reply(tlang().group);
      }
      if (!_0x3b3e26.isAdmin && !_0x3b3e26.isCreator) {
        return _0x3b3e26.reply(tlang().admin);
      }
      let _0x397293 =
        (await groupdb.findOne({
          id: _0x3b3e26.chat,
        })) ||
        (await groupdb.new({
          id: _0x3b3e26.chat,
        }));
      let _0x22e1dc = _0x12cbbf ? _0x12cbbf.toLowerCase().trim() : "";
      let _0x11994b =
        _0x22e1dc.startsWith("on") ||
        _0x22e1dc.startsWith("act") ||
        _0x22e1dc.startsWith("enable") ||
        _0x22e1dc.startsWith("del") ||
        _0x22e1dc.startsWith("warn")
          ? "warn"
          : _0x22e1dc.startsWith("kic")
          ? "kick"
          : _0x22e1dc.startsWith("off") ||
            _0x22e1dc.startsWith("reset") ||
            _0x22e1dc.startsWith("deact") ||
            _0x22e1dc.startsWith("disable")
          ? "false"
          : "";
      if (!_0x11994b) {
        return await _0x3b3e26.send(
          "*_Antibot Currently *" +
            (_0x397293.antibot === "false" ? "Disabled" : "Enabled") +
            " in this Group!_*\n*_Use warn/kick/off to enable/disable Antibot_*"
        );
      } else if (_0x11994b === "false") {
        if (_0x397293.antibot === "false") {
          return await _0x3b3e26.reply(
            "*_Antibot Already Disabled in Current Chat_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3b3e26.chat,
          },
          {
            antibot: "false",
          }
        );
        return await _0x3b3e26.send(
          "*_Antibot Succesfully Disable in group!_*"
        );
      } else if (_0x11994b === "warn" || _0x11994b === "kick") {
        if (_0x397293.antibot === _0x11994b) {
          return await _0x3b3e26.reply(
            "*_Antibot Already set to " + _0x11994b + " bots!_*"
          );
        }
        if (!_0x3b3e26.isBotAdmin) {
          return await _0x3b3e26.reply(
            "*_Uhh Please, Provide Admin Role First_*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3b3e26.chat,
          },
          {
            antibot: _0x11994b,
          }
        );
        return await _0x3b3e26.send(
          "*_Antibot Succesfully set to " + _0x11994b + " Bot Users!_*"
        );
      } else {
        return await _0x3b3e26.reply(
          "*_Please provide valid instructions!_*\n*_Use warn/kick/off to enable/disable Antibot!_*"
        );
      }
    } catch (_0x304d4d) {
      _0x3b3e26.error(_0x304d4d + "\n\ncommand: antibot", _0x304d4d);
    }
  }
);
smd(
  {
    pattern: "disable",
    desc: "disable cmds in Group.!",
    category: "group",
    filename: __filename,
  },
  async (_0x204bdc, _0x1c3634) => {
    try {
      if (!_0x204bdc.isGroup) {
        return _0x204bdc.reply(tlang().group);
      }
      if (!_0x204bdc.isAdmin && !_0x204bdc.isCreator) {
        return _0x204bdc.reply(tlang().admin);
      }
      let _0x2cad27 =
        (await groupdb.findOne({
          id: _0x204bdc.chat,
        })) ||
        (await groupdb.new({
          id: _0x204bdc.chat,
        }));
      let _0x161561 = _0x1c3634 ? _0x1c3634.toLowerCase().trim() : false;
      let _0x3dd6b4 = _0x161561 ? _0x161561.split(" ")[0] : "";
      if (!_0x3dd6b4) {
        return await _0x204bdc.send(
          "*Provide cmd name to disable in group*\n*Ex " +
            prefix +
            "disable tag(to disabled 'tag' cmd)/info*"
        );
      } else if (
        _0x3dd6b4.startsWith("info") ||
        _0x3dd6b4.startsWith("list") ||
        _0x3dd6b4.startsWith("cmds")
      ) {
        return await _0x204bdc.send(
          _0x2cad27.disablecmds === "false"
            ? "*_Uhh Dear, Theres no cmd disabled in current group_*"
            : "*_Disable cmds :_* ```" +
                _0x2cad27.disablecmds.replace("false,", "") +
                "```"
        );
      } else if (
        _0x3dd6b4.startsWith("enable") ||
        _0x3dd6b4.startsWith("disable") ||
        _0x3dd6b4.startsWith("bot")
      ) {
        return await _0x204bdc.reply("*_Uhh Dear, I can't disable that cmd_*");
      } else if (_0x3dd6b4) {
        const _0x965649 =
          astro_patch.commands.find(
            (_0x1b0024) => _0x1b0024.pattern === _0x3dd6b4
          ) ||
          astro_patch.commands.find(
            (_0x2fd6f8) =>
              _0x2fd6f8.alias && _0x2fd6f8.alias.includes(_0x3dd6b4)
          );
        if (_0x965649) {
          let _0xac463 = _0x965649.pattern.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
          );
          let _0x27d7ad = new RegExp("\\b" + _0xac463 + "\\b");
          if (_0x27d7ad.test(_0x2cad27.disablecmds)) {
            return await _0x204bdc.send(
              "*Uhh Dear, Provided cmd already in disable cmds*"
            );
          }
          var _0x41da99 = _0x2cad27.disablecmds + "," + _0x965649.pattern;
          await groupdb.updateOne(
            {
              id: _0x204bdc.chat,
            },
            {
              disablecmds: _0x41da99,
            }
          );
          let _0x23b4d5 = _0x41da99.replace("false,", "");
          return await _0x204bdc.send(
            '*_"' +
              _0x3dd6b4 +
              '" Succesfully added in disable cmds_*' +
              (_0x23b4d5 === ""
                ? ""
                : "\n*_Disable cmds :_* ```" + _0x23b4d5 + "```")
          );
        } else {
          return await _0x204bdc.reply(
            "*_'" +
              _0x3dd6b4 +
              "' is not a bot command, Provide valid command_*"
          );
        }
      }
    } catch (_0x590dfb) {
      _0x204bdc.error(_0x590dfb + "\n\ncommand: enable", _0x590dfb);
    }
  }
);
smd(
  {
    pattern: "enable",
    desc: "enable a cmd in Group.!",
    category: "group",
    filename: __filename,
  },
  async (_0x212b0e, _0x412234) => {
    try {
      if (!_0x212b0e.isGroup) {
        return _0x212b0e.reply(tlang().group);
      }
      if (!_0x212b0e.isAdmin && !_0x212b0e.isCreator) {
        return _0x212b0e.reply(tlang().admin);
      }
      let _0x2c9cd0 =
        (await groupdb.findOne({
          id: _0x212b0e.chat,
        })) ||
        (await groupdb.new({
          id: _0x212b0e.chat,
        }));
      let _0xa3fc1d = _0x412234 ? _0x412234.toLowerCase().trim() : false;
      let _0x439688 = _0xa3fc1d ? _0xa3fc1d.split(" ")[0] : "";
      let _0x40bb35 = _0x439688.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      let _0x5c60c4 = new RegExp("\\b" + _0x40bb35 + "\\b");
      if (!_0x439688 || _0x439688 === "") {
        return await _0x212b0e.send(
          "*Please provide disabled cmd name to enable it*\n*Ex " +
            prefix +
            "enable tag(if 'tag' cmd disabled)/all(reset disables)*"
        );
      } else if (_0xa3fc1d.startsWith("all")) {
        await groupdb.updateOne(
          {
            id: _0x212b0e.chat,
          },
          {
            disablecmds: "false",
          }
        );
        return await _0x212b0e.send("*_All disable cmds succesfully enabled_*");
      } else if (
        _0x5c60c4.test(_0x2c9cd0.disablecmds) &&
        _0x2c9cd0.disablecmds.includes(_0x439688)
      ) {
        let _0x51b1cd = _0x2c9cd0.disablecmds.replace(_0x5c60c4, "");
        await groupdb.updateOne(
          {
            id: _0x212b0e.chat,
          },
          {
            disablecmds: _0x51b1cd,
          }
        );
        return await _0x212b0e.send(
          '*_"' +
            _0x439688.replace(",", "") +
            '" Succesfully removed from disable cmds_*'
        );
      } else {
        return await _0x212b0e.send(
          "_There's no cmd disabled with *" +
            _0x439688.replace(",", "") +
            "* name"
        );
      }
    } catch (_0x25ceaf) {
      _0x212b0e.error(_0x25ceaf + "\n\ncommand: disable", _0x25ceaf);
    }
  }
);
smd(
  {
    pattern: "antifake",
    desc: "𝗗𝗲𝘁𝗲𝗰𝘁𝘀 𝗽𝗿𝗼𝗺𝗼𝘁𝗲/𝗱𝗲𝗺𝗼𝘁𝗲 𝗮𝗻𝗱 𝘀𝗲𝗻𝗱𝘀 𝗮𝗹𝗲𝗿𝘁. ",
    category: "group",
    filename: __filename,
  },
  async (_0x5a1eb8, _0x463e76) => {
    try {
      if (!_0x5a1eb8.isGroup) {
        return _0x5a1eb8.reply(tlang().group);
      }
      if (!_0x5a1eb8.isAdmin && !_0x5a1eb8.isCreator) {
        return _0x5a1eb8.reply(tlang().admin);
      }
      let _0x49ac75 =
        (await groupdb.findOne({
          id: _0x5a1eb8.chat,
        })) ||
        (await groupdb.new({
          id: _0x5a1eb8.chat,
        }));
      let _0x1c6236 = _0x463e76 ? _0x463e76.toLowerCase().trim() : "";
      if (
        _0x1c6236.startsWith("off") ||
        _0x1c6236.startsWith("deact") ||
        _0x1c6236.startsWith("disable")
      ) {
        if (_0x49ac75.antifake == "false") {
          return await _0x5a1eb8.send(
            "*Anti_Fake Already Disabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x5a1eb8.chat,
          },
          {
            antifake: "false",
          }
        );
        return await _0x5a1eb8.send("*Anti_Fake Disable Succesfully!*");
      } else if (!_0x463e76) {
        return await _0x5a1eb8.send(
          "*_Antifake " +
            (_0x49ac75.antifake === "false"
              ? "Not set to any"
              : 'set to "' + _0x49ac75.antifake + '"') +
            " Country Code!_*\n *Provide Country code to Update Antifake Status*\n*Eg: _.antifake 92_*"
        );
      }
      let _0x2f3d1b = _0x463e76
        ? _0x463e76
            .split(",")
            .map((_0x40173c) => parseInt(_0x40173c))
            .filter((_0x44d61c) => !isNaN(_0x44d61c))
            .join(",")
        : false;
      if (!_0x463e76 || !_0x2f3d1b) {
        return await _0x5a1eb8.send(
          "*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: " +
            prefix +
            "antifake 92_*"
        );
      } else if (_0x2f3d1b) {
        await groupdb.updateOne(
          {
            id: _0x5a1eb8.chat,
          },
          {
            antifake: "" + _0x2f3d1b,
          }
        );
        return await _0x5a1eb8.send(
          '*Anti_Fake Succesfully set to "' +
            _0x2f3d1b +
            "\"!*\n*_Now People Joined Group Who's Number Start With " +
            _0x2f3d1b +
            "_*"
        );
      } else {
        return await _0x5a1eb8.send(
          "*_Please provide a Valid country code First_*\n *_Only numbers to join this group._*\n*_eg: " +
            prefix +
            "antifake 92_*"
        );
      }
    } catch (_0x53288b) {
      _0x5a1eb8.error(_0x53288b + "\n\ncommand: antifake", _0x53288b);
    }
  }
);
smd(
  {
    pattern: "antidemote",
    desc: "Detects Promote and Automaticaly demote promoted person.",
    category: "group",
    filename: __filename,
  },
  async (_0x3d214e, _0x55496f) => {
    try {
      if (!_0x3d214e.isGroup) {
        return _0x3d214e.reply(tlang().group);
      }
      if (!_0x3d214e.isAdmin && !_0x3d214e.isCreator) {
        return _0x3d214e.reply(tlang().admin);
      }
      let _0x30a721 =
        (await groupdb.findOne({
          id: _0x3d214e.chat,
        })) ||
        (await groupdb.new({
          id: _0x3d214e.chat,
        }));
      let _0x210ede = _0x55496f ? _0x55496f.toLowerCase().trim() : "";
      if (
        _0x210ede.startsWith("on") ||
        _0x210ede.startsWith("act") ||
        _0x210ede.startsWith("enable")
      ) {
        if (_0x30a721.antidemote == "true") {
          return await _0x3d214e.send(
            "*Anti_Demote Already Enabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3d214e.chat,
          },
          {
            antidemote: "true",
          }
        );
        return await _0x3d214e.send(
          "*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*"
        );
      } else if (
        _0x210ede.startsWith("off") ||
        _0x210ede.startsWith("deact") ||
        _0x210ede.startsWith("disable")
      ) {
        if (_0x30a721.antidemote == "false") {
          return await _0x3d214e.send(
            "*Anti_Demote Already Disabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3d214e.chat,
          },
          {
            antidemote: "false",
          }
        );
        return await _0x3d214e.send("*Anti_Demote Disable Succesfully!*");
      } else {
        return await _0x3d214e.reply(
          '*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Enable & Disable Stop Demoting Peoples!_*'
        );
      }
    } catch (_0x3863b4) {
      _0x3d214e.error(_0x3863b4 + "\n\ncommand: antidemote", _0x3863b4);
    }
  }
);
smd(
  {
    pattern: "antipromote",
    desc: "Detects Promote and Automaticaly demote promoted person.",
    category: "group",
    filename: __filename,
  },
  async (_0x3d1898, _0x4bf866) => {
    try {
      if (!_0x3d1898.isGroup) {
        return _0x3d1898.reply(tlang().group);
      }
      if (!_0x3d1898.isAdmin && !_0x3d1898.isCreator) {
        return _0x3d1898.reply(tlang().admin);
      }
      let _0x599352 =
        (await groupdb.findOne({
          id: _0x3d1898.chat,
        })) ||
        (await groupdb.new({
          id: _0x3d1898.chat,
        }));
      let _0x41626b = _0x4bf866 ? _0x4bf866.toLowerCase().trim() : "";
      if (
        _0x41626b.startsWith("on") ||
        _0x41626b.startsWith("act") ||
        _0x41626b.startsWith("enable")
      ) {
        if (_0x599352.antipromote == "true") {
          return await _0x3d1898.send(
            "*Anti_Promote Already Enabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3d1898.chat,
          },
          {
            antipromote: "true",
          }
        );
        return await _0x3d1898.send(
          "*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*"
        );
      } else if (
        _0x41626b.startsWith("off") ||
        _0x41626b.startsWith("deact") ||
        _0x41626b.startsWith("disable")
      ) {
        if (_0x599352.antipromote == "false") {
          return await _0x3d1898.send(
            "*Anti_Promote Already Disabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x3d1898.chat,
          },
          {
            antipromote: "false",
          }
        );
        return await _0x3d1898.send("*Anti_Promote Disable Succesfully!*");
      } else {
        return await _0x3d1898.reply(
          '*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Stop Promoting Peoples in Chat_*'
        );
      }
    } catch (_0x424dfe) {
      _0x3d1898.error(_0x424dfe + "\n\ncommand: antipromote", _0x424dfe);
    }
  }
);
smd(
  {
    pattern: "pdm",
    desc: "Detect Promote/Demote Users And Send Alerts in Chat ",
    category: "group",
    filename: __filename,
  },
  async (_0x47f7e9, _0x4bf96c) => {
    try {
      if (!_0x47f7e9.isGroup) {
        return _0x47f7e9.reply(tlang().group);
      }
      if (!_0x47f7e9.isAdmin && !_0x47f7e9.isCreator) {
        return _0x47f7e9.reply(tlang().admin);
      }
      let _0x9e3626 =
        (await groupdb.findOne({
          id: _0x47f7e9.chat,
        })) ||
        (await groupdb.new({
          id: _0x47f7e9.chat,
        }));
      let _0x19e598 = _0x4bf96c ? _0x4bf96c.toLowerCase().trim() : "";
      if (
        _0x19e598.startsWith("on") ||
        _0x19e598.startsWith("act") ||
        _0x19e598.startsWith("enable")
      ) {
        if (_0x9e3626.pdm == "true") {
          return await _0x47f7e9.send(
            "*Promote/Demote Alerts Already Enabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x47f7e9.chat,
          },
          {
            pdm: "true",
          }
        );
        return await _0x47f7e9.send(
          "*Promote/Demote Alerts Enable Succesfully!*"
        );
      } else if (
        _0x19e598.startsWith("off") ||
        _0x19e598.startsWith("deact") ||
        _0x19e598.startsWith("disable")
      ) {
        if (_0x9e3626.pdm == "false") {
          return await _0x47f7e9.send(
            "*Promote/Demote Alerts Already Disabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x47f7e9.chat,
          },
          {
            pdm: "false",
          }
        );
        return await _0x47f7e9.send(
          "*Promote/Demote Alerts Disable Succesfully!*"
        );
      } else {
        return await _0x47f7e9.reply(
          '*Uhh Dear, Please use between "On" And "Off".* \n*_To get And Stop Promote/Demote Alerts_*'
        );
      }
    } catch (_0x2f089d) {
      _0x47f7e9.error(_0x2f089d + "\n\ncommand: pdm", _0x2f089d);
    }
  }
);
smd(
  {
    pattern: "amute",
    desc: "sets auto mute time in group.",
    category: "moderation",
  },
  async (_0x23aaae, _0xc0fcc0) => {
    try {
      if (!_0x23aaae.isGroup) {
        return _0x23aaae.reply(tlang().group);
      }
      if (!_0x23aaae.isAdmin && !_0x23aaae.isCreator) {
        return _0x23aaae.reply(tlang().admin);
      }
      let _0x4e4f77 =
        (await groupdb.findOne({
          id: _0x23aaae.chat,
        })) ||
        (await groupdb.new({
          id: _0x23aaae.chat,
        }));
      if (!_0xc0fcc0) {
        return await _0x23aaae.reply(
          "*Auto_Mute *" +
            (_0x4e4f77.mute === "false" ? "disable" : "enabled") +
            " for current group*" +
            (_0x4e4f77.mute !== "false"
              ? "\n *Auto mute status set at : " + _0x4e4f77.mute + "* "
              : "")
        );
      }
      let [_0x579533, _0x1c48cc] = _0xc0fcc0.split(":").map(Number);
      if (
        isNaN(_0x579533) ||
        isNaN(_0x1c48cc) ||
        _0x579533 < 0 ||
        _0x579533 >= 24 ||
        _0x1c48cc < 0 ||
        _0x1c48cc >= 60
      ) {
        return _0x23aaae.reply(
          "Please provide correct form.\nEg: " + prefix + "amute 22:00"
        );
      }
      let _0x37c60f =
        _0x579533.toString().padStart(2, "0") +
        ":" +
        _0x1c48cc.toString().padStart(2, "0");
      await groupdb.updateOne(
        {
          id: _0x23aaae.chat,
        },
        {
          mute: _0x37c60f,
        }
      );
      return _0x23aaae.reply(
        "*_Successfully done, Group auto mute at " + _0x37c60f + "_*"
      );
    } catch (_0x47f0cd) {
      _0x23aaae.error(_0x47f0cd + "\n\ncommand: amute", _0x47f0cd);
    }
  }
);
smd(
  {
    pattern: "aunmute",
    desc: "sets unmute time in group.",
    category: "moderation",
  },
  async (_0x93dfcd, _0x13088a) => {
    try {
      if (!_0x93dfcd.isGroup) {
        return _0x93dfcd.reply(tlang().group);
      }
      if (!_0x93dfcd.isAdmin && !_0x93dfcd.isCreator) {
        return _0x93dfcd.reply(tlang().admin);
      }
      let _0x233212 =
        (await groupdb.findOne({
          id: _0x93dfcd.chat,
        })) ||
        (await groupdb.new({
          id: _0x93dfcd.chat,
        }));
      if (!_0x13088a) {
        return await _0x93dfcd.reply(
          "*Auto_Unmute *" +
            (_0x233212.unmute === "false" ? "disable" : "enabled") +
            " for current group*" +
            (_0x233212.unmute !== "false"
              ? "\n *Auto unmute status set at : " + _0x233212.unmute + "* "
              : "")
        );
      }
      let [_0x4566be, _0x302718] = _0x13088a.split(":").map(Number);
      if (
        isNaN(_0x4566be) ||
        isNaN(_0x302718) ||
        _0x4566be < 0 ||
        _0x4566be >= 24 ||
        _0x302718 < 0 ||
        _0x302718 >= 60
      ) {
        return _0x93dfcd.reply(
          "Please provide correct form.\nEg: " + prefix + "aunmute 22:00"
        );
      }
      let _0x47f5d3 =
        _0x4566be.toString().padStart(2, "0") +
        ":" +
        _0x302718.toString().padStart(2, "0");
      await groupdb.updateOne(
        {
          id: _0x93dfcd.chat,
        },
        {
          unmute: _0x47f5d3,
        }
      );
      return _0x93dfcd.reply(
        "*_Successfully done, Group auto unmute at " + _0x47f5d3 + "_*"
      );
    } catch (_0x30bf1c) {
      _0x93dfcd.error(_0x30bf1c + "\n\ncommand: aunmute", _0x30bf1c);
    }
  }
);
smd(
  {
    pattern: "dunmute",
    desc: "Delete unmute from group.",
    category: "moderation",
  },
  async (_0xe007b5) => {
    try {
      if (!_0xe007b5.isGroup) {
        return _0xe007b5.reply(tlang().group);
      }
      if (!_0xe007b5.isAdmin && !_0xe007b5.isCreator) {
        return _0xe007b5.reply(tlang().admin);
      }
      let _0xb4b312 = await groupdb.findOne({
        id: _0xe007b5.chat,
      });
      if (!_0xb4b312 || !_0xb4b312.unmute || _0xb4b312.unmute == "false") {
        return await _0xe007b5.reply("*There's no auto unmute set in group.*");
      }
      await groupdb.updateOne(
        {
          id: _0xe007b5.chat,
        },
        {
          unmute: "false",
        }
      );
      return await _0xe007b5.reply("*Auto unmute deleted successfully.*");
    } catch (_0x243aed) {
      _0xe007b5.error(_0x243aed + "\n\ncommand: dunmute", _0x243aed);
    }
  }
);
smd(
  {
    pattern: "dmute",
    desc: "Delete mute from group.",
    category: "moderation",
  },
  async (_0x10542a, _0x2cc451) => {
    try {
      if (!_0x10542a.isGroup) {
        return _0x10542a.reply(tlang().group);
      }
      if (!_0x10542a.isAdmin && !_0x10542a.isCreator) {
        return _0x10542a.reply(tlang().admin);
      }
      let _0x529593 = await groupdb.findOne({
        id: _0x10542a.chat,
      });
      if (!_0x529593 || !_0x529593.mute || _0x529593.mute == "false") {
        return await _0x10542a.reply("*There's no auto mute set in group.*");
      }
      await groupdb.updateOne(
        {
          id: _0x10542a.chat,
        },
        {
          mute: "false",
        }
      );
      return await _0x10542a.reply("*Auto mute deleted successfully.*");
    } catch (_0x137fa6) {
      _0x10542a.error(_0x137fa6 + "\n\ncommand: dmute", _0x137fa6);
    }
  }
);
async function haveEqualMembers(_0x31ae7e, _0x107896) {
  if (_0x31ae7e.length === 0 || _0x107896.length === 0) {
    return false;
  }
  const _0x5aee47 = _0x31ae7e.filter((_0x44f6e4) =>
    _0x107896.includes(_0x44f6e4)
  );
  const _0x3a93d0 = (_0x5aee47.length / _0x31ae7e.length) * 100;
  return _0x3a93d0 >= 76;
}
smd(
  {
    pattern: "antiword",
    desc: "Detects words from chat,and delete/warn senders.",
    category: "group",
    filename: __filename,
    use: "< action | words >",
  },
  async (_0x4626e9, _0x244587, { cmdName: _0xc43bcd }) => {
    try {
      if (!_0x4626e9.isGroup) {
        return _0x4626e9.reply(tlang().group);
      }
      if (!_0x4626e9.isAdmin && !_0x4626e9.isCreator) {
        return _0x4626e9.reply(tlang().admin);
      }
      let _0x55ea26 =
        (await groupdb.findOne({
          id: _0x4626e9.chat,
        })) ||
        (await groupdb.new({
          id: _0x4626e9.chat,
          antiword: {
            status: "false",
            words: "",
          },
        }));
      let _0x14e9b0 = _0x244587 ? _0x244587.toLowerCase().trim() : false;
      let _0xe2e8cc = _0x55ea26.antiword;
      let _0x28cfe1 =
        "*Antiword Currently *" +
        (_0xe2e8cc.status !== "false" ? "enabled" : "disabled") +
        "!!!* ```\n  STATUS: " +
        (_0xe2e8cc.status ? _0xe2e8cc.status : "--Empty Yet--") +
        " \n  WORDS: " +
        (_0xe2e8cc.words
          ? _0xe2e8cc.words.replace(/,/gi, " -- ")
          : "--Empty Yet--") +
        "```\n\n*Available Cmds:* ```\n  " +
        (prefix + _0xc43bcd) +
        " off \n  " +
        (prefix + _0xc43bcd) +
        " reset\n  " +
        (prefix + _0xc43bcd) +
        " warn | bad,words\n  " +
        (prefix + _0xc43bcd) +
        " delete | hot,badas,etc\n``` \n\n\n " +
        Config.caption;
      if (!_0x14e9b0 || !_0x244587) {
        return await _0x4626e9.send(_0x28cfe1);
      }
      let _0x48cd39 = _0x14e9b0.split("|")[1] || "";
      let _0x431ae2 =
        _0x14e9b0.startsWith("on") ||
        _0x14e9b0.startsWith("act") ||
        _0x14e9b0.startsWith("enable") ||
        _0x14e9b0.startsWith("del")
          ? "delete"
          : _0x14e9b0.startsWith("warn")
          ? "warn"
          : _0x14e9b0.startsWith("off") ||
            _0x14e9b0.startsWith("deact") ||
            _0x14e9b0.startsWith("disable")
          ? "false"
          : _0x14e9b0.startsWith("reset")
          ? "reset"
          : "";
      _0x431ae2 =
        !_0x431ae2 && _0x48cd39 && _0xe2e8cc.status !== "false"
          ? _0xe2e8cc.status
          : _0x431ae2;
      if (_0x431ae2 === "reset") {
        await groupdb.updateOne(
          {
            id: _0x4626e9.chat,
          },
          {
            antiword: {},
          }
        );
        return await _0x4626e9.send("*_Anti_Word status cleard!_*");
      } else if (_0x431ae2 === "delete" || _0x431ae2 === "warn") {
        if (_0xe2e8cc.status == _0x431ae2 && !_0x48cd39) {
          return await _0x4626e9.send(
            "*Please provide badWords, like " +
              (prefix + _0xc43bcd) +
              " " +
              _0x431ae2 +
              " | bad,words"
          );
        }
        _0x48cd39 = _0x48cd39 ? _0x48cd39 : _0xe2e8cc.words;
        await groupdb.updateOne(
          {
            id: _0x4626e9.chat,
          },
          {
            antiword: {
              status: _0x431ae2,
              words: _0x48cd39,
            },
          }
        );
        return await _0x4626e9.send(
          "*_Anti_Word succesfully set to '" +
            _0x431ae2 +
            "' badward!_*\n*Antiwords are:```" +
            (_0x48cd39 ? _0x48cd39.replace(/,/gi, " | ") : "--Empty Yet--") +
            "``` *"
        );
      } else if (_0x431ae2 === "false") {
        if (_0xe2e8cc.status === _0x431ae2) {
          return await _0x4626e9.send(
            "*Anti_Word Already Disabled In Current Chat!*"
          );
        }
        await groupdb.updateOne(
          {
            id: _0x4626e9.chat,
          },
          {
            antiword: {
              status: "false",
              words: _0xe2e8cc.words,
            },
          }
        );
        return await _0x4626e9.send("*Anti_Word Disable Succesfully!*");
      } else {
        return await _0x4626e9.reply(
          "*Uhh dear, Please follow instructions!!*\n\n" + _0x28cfe1
        );
      }
    } catch (_0x5738c4) {
      _0x4626e9.error(_0x5738c4 + "\n\ncommand: antiword", _0x5738c4);
    }
  }
);
let bott = false;
let chatbotCount = 0;
smd(
  {
    on: "main",
  },
  async (
    _0x39f91d,
    _0x4baec9,
    {
      botNumber: _0x4ac038,
      isCreator: _0x184989,
      budy: _0x47409a,
      body: _0x66fc82,
      icmd: _0x250d65,
    }
  ) => {
    try {
      if (global.MsgsInLog === "true") {
        console.log(
          "" +
            (_0x39f91d.isGroup
              ? "[MESSAGE IN GROUP] From => " +
                _0x39f91d.metadata.subject +
                "\n[USER]:"
              : "[MESSAGE IN PRIVATE] From =>") +
            (" " +
              _0x39f91d.senderName +
              " " +
              _0x39f91d.senderNum +
              "\n[" +
              _0x39f91d.mtype.toUpperCase() +
              "]: " +
              _0x39f91d.body +
              "\n============== [SMD] =================")
        );
      }
      let _0x273393 =
        (await groupdb.findOne({
          id: _0x39f91d.chat,
        })) || false;
      let _0xea5278 = false;
      try {
        if (!global.SmdOfficial && global.SmdOfficial !== "yes") {
          return;
        }
        if (
          _0x273393 &&
          _0x273393.antitag == "true" &&
          !_0x39f91d.checkBot() &&
          _0x39f91d.mtype !== "reactionMessage" &&
          _0x273393.botenable == "true"
        ) {
          const _0x50265a = await haveEqualMembers(
            _0x39f91d.metadata.participants.map((_0x406321) => _0x406321.id),
            _0x39f91d.mentionedJid
          );
          if (_0x50265a && _0x39f91d.isBotAdmin) {
            let _0x40ef27 = {
              reason: "tagging all members!",
              chat: _0x39f91d.metadata?.subject || "GROUP",
              warnedby: tlang().title,
              date: _0x39f91d.date,
            };
            _0xea5278 = await warn.addwarn(
              _0x39f91d.sender,
              _0x39f91d.chat,
              _0x40ef27
            );
            await _0x39f91d.reply(
              "*_[TAG DETECTED] Hey @" +
                _0x39f91d.senderNum +
                " warning!!_*\n*_Tagging all members is not allowed!_*",
              {
                mentions: [_0x39f91d.sender],
              }
            );
            await _0x39f91d.delete();
          } else if (_0x50265a && !_0x39f91d.isBotAdmin) {
            await _0x39f91d.reply(
              "*_[TAGALL DETECTED] Can't do anything, without getting admin role!_*",
              {
                mentions: [_0x39f91d.sender],
              }
            );
          }
        }
        if (
          _0x273393 &&
          _0x39f91d.isGroup &&
          !_0x39f91d.isAdmin &&
          !_0x184989 &&
          _0x39f91d.mtype !== "reactionMessage" &&
          _0x273393.botenable == "true"
        ) {
          if (
            _0x273393.antibot &&
            _0x273393.antibot !== "false" &&
            _0x39f91d.isBot &&
            !_0x39f91d.checkBot(_0x39f91d.sender)
          ) {
            if (_0x39f91d.isBotAdmin) {
              var _0x3c86e4 =
                "*_Bot user not allowed, please make it private!_*";
              if (_0x273393.antibot === "warn") {
                let _0x50d0d8 = {
                  reason: "Bots not allowed!",
                  chat: _0x39f91d.metadata?.subject || "GROUP",
                  date: _0x39f91d.date,
                };
                _0xea5278 = _0xea5278
                  ? _0xea5278
                  : await warn.addwarn(
                      _0x39f91d.sender,
                      _0x39f91d.chat,
                      _0x50d0d8
                    );
                if (_0xea5278.status) {
                  _0x3c86e4 =
                    "*_Hey @" +
                    _0x39f91d.senderNum +
                    " warning, Due To Antibot!_*";
                }
              } else if (_0x273393.antibot === "kick") {
                try {
                  sleep(1000);
                  await _0x39f91d.bot.groupParticipantsUpdate(
                    _0x39f91d.chat,
                    [_0x39f91d.sender],
                    "remove"
                  );
                  _0x3c86e4 =
                    "*_User @" +
                    _0x39f91d.senderNum +
                    " kick Due To Antibot!_*";
                } catch {}
              }
              await _0x39f91d.delete();
              await _0x39f91d.send(_0x3c86e4, {
                mentions: [_0x39f91d.sender],
              });
            } else if (!_0x39f91d.isBotAdmin && _0x39f91d.isBot) {
              await _0x39f91d.reply(
                "*_Uhh Please, Provide Admin Role To Kick Other Bot_*\n*_Or Disable Antibot (On/Off) In Current Group_*"
              );
            }
          }
          if (
            _0x273393.onlyadmin &&
            _0x273393.onlyadmin === "true" &&
            SmdOfficial == "yes"
          ) {
            var _0x3c86e4 = "";
            if (_0x39f91d.isBotAdmin) {
              let _0x5c4aae = {
                reason: "Only Admin can Chat!",
                chat: _0x39f91d.metadata?.subject || "PRIVATE",
                warnedby: tlang().title,
                date: _0x39f91d.date,
              };
              _0xea5278 = _0xea5278
                ? _0xea5278
                : await warn.addwarn(
                    _0x39f91d.sender,
                    _0x39f91d.chat,
                    _0x5c4aae
                  );
              if (_0xea5278.status) {
                _0x3c86e4 = "*Warns you for chat here!*\n";
              }
              await _0x39f91d.delete();
              sleep(1500);
              await _0x39f91d.send(
                "*Hey @" +
                  _0x39f91d.senderNum +
                  "* " +
                  _0x3c86e4 +
                  "*Deleteing message,while onlyadmin activated!!* ",
                {
                  mentions: [_0x39f91d.sender],
                }
              );
            } else {
              await _0x39f91d.send(
                "*_Provide admin role to kick Message Senders_*\n*Or _Disable onlyadmin(on/off) in currentchat_*"
              );
            }
          }
          if (
            _0x273393.antilink &&
            _0x273393.antilink !== "false" &&
            SmdOfficial === "yes"
          ) {
            const _0x37bc15 =
              Config.antilink_values && Config.antilink_values !== "all"
                ? Config.antilink_values
                    .split(",")
                    .filter((_0x3da281) => _0x3da281.trim() !== "")
                : ["https://", "chat.whatsapp.com", "fb.com"];
            let _0x5cbc1d = _0x66fc82.toLowerCase();
            if (_0x37bc15.some((_0x81b040) => _0x5cbc1d.includes(_0x81b040))) {
              if (!_0x39f91d.isBotAdmin) {
                let _0x26aa7f =
                  " *[LINK DETECTED]*\nUser @" +
                  _0x39f91d.sender.split("@")[0] +
                  " detected sending a link.\nPromote " +
                  Config.botname +
                  " as admin to " +
                  (_0x273393.antilink === "kick"
                    ? "kick \nlink senders."
                    : "delete \nlinks from this Chat") +
                  " \n";
                await _0x39f91d.send(_0x26aa7f, {
                  mentions: [_0x39f91d.sender],
                });
              } else if (_0x273393.antilink === "delete") {
                await _0x39f91d.send("*_Link Detected.. Deletion Done!_*");
                await _0x39f91d.delete();
              } else if (
                _0x273393.antilink === "warn" ||
                _0x273393.antilink === "true"
              ) {
                let _0x75abf8 = {
                  reason: "links not allowed!",
                  chat: _0x39f91d.metadata?.subject || "PRIVATE",
                  warnedby: tlang().title,
                  date: _0x39f91d.date,
                };
                _0xea5278 = _0xea5278
                  ? _0xea5278
                  : await warn.addwarn(
                      _0x39f91d.sender,
                      _0x39f91d.chat,
                      _0x75abf8
                    );
                var _0x3c86e4 = _0xea5278.status
                  ? "*_[LINK DETECTED] Hey @" +
                    _0x39f91d.senderNum +
                    " warning!!_*\n*_links not allowed in current group!_*"
                  : "*_[LINK DETECTED]!_*";
                await _0x39f91d.reply(_0x3c86e4, {
                  mentions: [_0x39f91d.sender],
                });
                await _0x39f91d.delete();
              } else if (_0x273393.antilink === "kick") {
                await _0x39f91d.send("*_Link Detected!!_*");
                try {
                  await _0x39f91d.delete();
                  sleep(1500);
                  await _0x39f91d.bot.groupParticipantsUpdate(
                    _0x39f91d.chat,
                    [_0x39f91d.sender],
                    "remove"
                  );
                } catch {
                  await _0x39f91d.send("*Link Detected*\n" + tlang().botAdmin);
                }
              }
            }
          }
        }
      } catch (_0x1a7fb0) {
        console.log("Error From Antilinks : ", _0x1a7fb0);
      }
      var _0x219875 = _0x273393?.antiword || {
        status: "false",
      };
      if (
        _0x4baec9.length > 1 &&
        !_0x39f91d.isBot &&
        _0x219875 &&
        _0x219875.status !== "false" &&
        _0x219875.words
      ) {
        var _0x4e66ac = _0x219875.words.split(",") || [];
        let _0x2298c9 = false;
        _0x4e66ac.map(async (_0x5e94de) => {
          if (
            _0x39f91d.isAdmin ||
            !global.SmdOfficial ||
            global.SmdOfficial != "yes"
          ) {
            return;
          }
          let _0x520e96 = new RegExp("\\b" + _0x5e94de?.trim() + "\\b", "ig");
          let _0x1ae0c5 = _0x47409a.toLowerCase();
          if (!_0x2298c9 && _0x5e94de && _0x520e96.test(_0x1ae0c5)) {
            _0x2298c9 = true;
            await sleep(500);
            try {
              var _0x3dc4df = "";
              if (_0x219875.status === "warn") {
                let _0x5f3cee = {
                  reason: "For using Bad Word",
                  chat: _0x39f91d.metadata?.subject || "PRIVATE",
                  warnedby: tlang().title,
                  date: _0x39f91d.date,
                };
                _0xea5278 = _0xea5278
                  ? _0xea5278
                  : await warn.addwarn(
                      _0x39f91d.sender,
                      _0x39f91d.chat,
                      _0x5f3cee
                    );
                if (_0xea5278.status) {
                  _0x3dc4df = "\n*Warns you for using badWord!!*\n";
                }
              }
              if (_0x39f91d.isBotAdmin) {
                await _0x39f91d.send(
                  "*[BAD WORD DETECTED] Hey @" +
                    _0x39f91d.senderNum +
                    "* " +
                    _0x3dc4df +
                    " *Deleting your message from chat!*\n",
                  {
                    mentions: [_0x39f91d.sender],
                  },
                  "suhail",
                  _0x39f91d
                );
                await _0x39f91d.delete();
              } else {
                await _0x39f91d.reply(
                  "*_[BAD WORD DETECTED] provide admin to take action!_*",
                  {
                    mentions: [_0x39f91d.sender],
                  }
                );
              }
            } catch (_0x44e136) {
              console.log("Error From Bad Words : ", _0x44e136);
            }
          }
        });
      }
      if (_0xea5278) {
        let _0x4cb16b = parseInt(global.warncount) || 3;
        if (_0xea5278.warning >= _0x4cb16b) {
          if (_0x39f91d.isGroup) {
            if (_0x39f91d.isBotAdmin) {
              await _0x39f91d.send(
                "*_Hey @" +
                  _0x39f91d.senderNum +
                  " Kicking you from group!_*\n*_Because Your warn limit exceed!_*",
                {
                  mentions: [_0x39f91d.sender],
                }
              );
              await _0x39f91d.bot.groupParticipantsUpdate(
                _0x39f91d.chat,
                [_0x39f91d.sender],
                "remove"
              );
            }
          } else {
            await _0x39f91d.send(
              "*_Hey @" +
                _0x39f91d.senderNum +
                " Blocking you!_*\n*_Because Your warn limit exceed!_*",
              {
                mentions: [_0x39f91d.sender],
              }
            );
            await _0x39f91d.bot.updateBlockStatus(_0x39f91d.sender, "block");
          }
        }
      }
      try {
        if (!global.SmdOfficial || _0x39f91d.mtype === "reactionMessage") {
          return;
        }
        let _0x294e10 = (await groupdb.findOne({
          id: _0x39f91d.chat,
        })) || {
          chatbot: "false",
        };
        if (!bott || chatbotCount >= 10) {
          bott = (await bot_.findOne({
            id: "bot_" + _0x39f91d.user,
          })) || {
            chatbot: "false",
          };
        } else {
          chatbotCount++;
        }
        let _0x3f3751 =
          bott && bott.chatbot && bott.chatbot == "true"
            ? "true"
            : _0x294e10.chatbot || "false";
        if (
          _0x3f3751 === "true" &&
          !_0x250d65 &&
          !_0x39f91d.isBot &&
          _0x39f91d.text
        ) {
          let _0x4c0917 = !_0x39f91d.isGroup
            ? _0x39f91d.user
            : _0x39f91d.quoted
            ? _0x39f91d.quoted.sender
            : _0x39f91d.mentionedJid[0] || false;
          if (
            _0x39f91d.isGroup &&
            _0x4c0917 &&
            !_0x39f91d.checkBot(_0x4c0917)
          ) {
            return;
          }
          let { data: _0x1a5d20 } = await axios.get(
            "http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" +
              _0x39f91d.senderNum +
              "]&msg=[" +
              _0x47409a +
              "]"
          );
          if (_0x1a5d20 && _0x1a5d20.cnt) {
            _0x39f91d.send(_0x1a5d20.cnt, {}, "suhail", _0x39f91d);
          } else {
            ("");
          }
        }
      } catch (_0x418db7) {
        console.log("Error From ChatBot : ", _0x418db7);
      }
    } catch (_0x4eac84) {
      console.log("Group Settings error in command.main() \n", _0x4eac84);
    }
  }
);
let users = {};
let user_warns = {};
smd(
  {
    group: "add",
  },
  async (_0x28d76c, { Void: _0x4dedb6 }) => {
    try {
      let _0x3a7fc2 = await groupdb.findOne({
        id: _0x28d76c.chat,
      });
      if (
        !_0x3a7fc2 ||
        !_0x28d76c.isGroup ||
        _0x3a7fc2.botenable !== "true" ||
        _0x28d76c.blockJid ||
        _0x28d76c.fromMe
      ) {
        return;
      }
      let _0x21c5eb =
        _0x3a7fc2 && _0x3a7fc2.welcome ? _0x3a7fc2.welcome : "false";
      let _0x3fc86e =
        _0x3a7fc2 && _0x3a7fc2.antifake
          ? _0x3a7fc2.antifake.toLowerCase()
          : "false";
      let _0x5dd590 = _0x3fc86e.split(",");
      const _0xdb6223 = _0x5dd590.some((_0x25ffc0) =>
        _0x28d76c.user.startsWith(_0x25ffc0)
      );
      if (_0x3fc86e !== "false" && !_0xdb6223 && !_0x28d76c.isCreator) {
        if (_0x28d76c.isBotAdmin) {
          try {
            await _0x28d76c.kick();
            return await sendWelcome(
              _0x28d76c,
              "*[ANTIFAKE START] @User kicked automaticaly!* @pp"
            );
          } catch (_0x52d6df) {
            await _0x28d76c.error(
              " Can't kick user in antifake\n❲❒❳ GROUP: " +
                _0x28d76c.metadata.subject +
                "\n❲❒❳ ERROR: " +
                _0x52d6df +
                "\n",
              _0x52d6df,
              false
            );
          }
        } else {
          await _0x28d76c.send(
            "*[ANTI_FAKE ERROR] Need admin role to kick fake users!!*"
          );
        }
      } else if (_0x21c5eb === "true") {
        await sendWelcome(_0x28d76c, _0x3a7fc2.welcometext);
      }
    } catch (_0x476537) {
      console.log("Error From Welcome : ", _0x476537);
    }
  }
);
smd(
  {
    group: "remove",
  },
  async (_0x1b9988, { Void: _0xcb3386 }) => {
    try {
      let _0xa3ec6 =
        (await groupdb.findOne({
          id: _0x1b9988.chat,
        })) || false;
      if (
        !_0x1b9988 ||
        !_0xa3ec6 ||
        !_0x1b9988.isGroup ||
        _0xa3ec6.botenable !== "true" ||
        _0x1b9988.blockJid ||
        _0x1b9988.fromMe
      ) {
        return;
      }
      let _0x9f4c7b = _0xa3ec6 && _0xa3ec6.goodbye ? _0xa3ec6.goodbye : "false";
      if (_0x9f4c7b === "true") {
        await sendWelcome(_0x1b9988, _0xa3ec6.goodbyetext);
      }
    } catch (_0x442765) {
      console.log("Error From Goodbye : ", _0x442765);
    }
  }
);
smd(
  {
    group: "promote",
  },
  async (_0x482975, { Void: _0x3481d2 }) => {
    try {
      let _0x390d91 =
        (await groupdb.findOne({
          id: _0x482975.chat,
        })) || false;
      if (
        !_0x390d91 ||
        !_0x482975.isGroup ||
        _0x390d91.botenable !== "true" ||
        _0x482975.blockJid
      ) {
        return;
      }
      if (!user_warns[_0x482975.sender]) {
        user_warns[_0x482975.sender] = {
          [_0x482975.action]: 1,
        };
      } else {
        user_warns[_0x482975.sender][_0x482975.action]++;
      }
      let _0x4124fa;
      if (_0x390d91.antipromote == "true" && !_0x482975.isCreator) {
        _0x4124fa = _0x482975.isBotAdmin ? false : true;
        if (
          users[_0x482975.sender] &&
          users[_0x482975.sender].previous_Action === "antidemote"
        ) {
          delete users[_0x482975.sender];
          return;
        }
        if (_0x482975.isBotAdmin) {
          try {
            await _0x482975.demote();
            users[_0x482975.sender] = {
              previous_Action: "antipromote",
            };
            if (user_warns[_0x482975.sender][_0x482975.action] > 2) {
              return;
            }
            return await sendWelcome(
              _0x482975,
              "*[ANTIPROMOTE START] @User Demoted Automatically!* @pp "
            );
          } catch (_0x5ae38b) {
            await _0x482975.error(
              " Can't demote user in antipromote\n❲❒❳ GROUP: " +
                _0x482975.metadata.subject +
                "\n❲❒❳ ERROR: " +
                _0x5ae38b +
                "\n",
              _0x5ae38b,
              false
            );
          }
        }
      }
      if (_0x390d91.pdm == "true" || _0x4124fa) {
        if (user_warns[_0x482975.sender][_0x482975.action] > 2) {
          return;
        }
        var _0x218901 =
          " *[SOMEONE PROMOTE HERE]*\n" +
          (_0x4124fa
            ? "*Note : _I'm Not Admin Here, So I Can't Demote Someone while Anti_Promote Activated_*"
            : "") +
          "\n           \n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Member -> Admin_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n\n\n" +
          Config.caption;
        return await sendWelcome(_0x482975, _0x218901);
      }
    } catch (_0x3a436e) {
      console.log("Error From Promote : ", _0x3a436e);
    }
  }
);
smd(
  {
    group: "demote",
  },
  async (_0x2b38a5, { Void: _0x4676d7 }) => {
    try {
      let _0x1273fa =
        (await groupdb.findOne({
          id: _0x2b38a5.chat,
        })) || false;
      if (
        !_0x1273fa ||
        !_0x2b38a5.isGroup ||
        _0x1273fa.botenable !== "true" ||
        _0x2b38a5.blockJid
      ) {
        return;
      }
      if (!user_warns[_0x2b38a5.sender]) {
        user_warns[_0x2b38a5.sender] = {
          [_0x2b38a5.action]: 1,
        };
      } else {
        user_warns[_0x2b38a5.sender][_0x2b38a5.action]++;
      }
      let _0x5878b4;
      if (_0x1273fa.antidemote == "true" && !_0x2b38a5.isCreator) {
        _0x5878b4 = _0x2b38a5.isBotAdmin ? false : true;
        if (
          users[_0x2b38a5.sender] &&
          users[_0x2b38a5.sender].previous_Action === "antipromote"
        ) {
          delete users[_0x2b38a5.sender];
          return;
        }
        if (_0x2b38a5.isBotAdmin) {
          try {
            await _0x2b38a5.promote();
            users[_0x2b38a5.sender] = {
              previous_Action: "antidemote",
            };
            if (user_warns[_0x2b38a5.sender][_0x2b38a5.action] > 2) {
              return;
            }
            return await sendWelcome(
              _0x2b38a5,
              "*[ANTIPROMOTE START] User promote automatically!* @pp "
            );
          } catch (_0x275310) {
            await _0x2b38a5.error(
              " Can't promote user in antidemote\n❲❒❳ GROUP: " +
                _0x2b38a5.metadata.subject +
                "\n❲❒❳ ERROR: " +
                _0x275310 +
                "\n",
              _0x275310,
              false
            );
          }
        }
      }
      if (_0x1273fa.pdm == "true" || _0x5878b4) {
        if (user_warns[_0x2b38a5.sender][_0x2b38a5.action] > 2) {
          return;
        }
        var _0x168c92 =
          " *[SOMEONE DEMOTE HERE]*\n  " +
          (_0x5878b4
            ? "*Note : _I'm Not Admin Here, So I Can't promote Someone while Anti_Demote Activated_*"
            : "") +
          "\n\n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Admin -> Member_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n  \n\n" +
          Config.caption;
        return await sendWelcome(_0x2b38a5, _0x168c92);
      }
    } catch (_0x3ef55d) {
      console.log("Error From Demote : ", _0x3ef55d);
    }
  }
);
