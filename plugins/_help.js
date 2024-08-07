const os = require("os");
const fs = require("fs");
const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  prefix,
  smd,
  commands,
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

smd(
  {
    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (message) => {
    try {
      let menuMessage = ` 
➮ʀᴜɴᴛɪᴍᴇ - ${runtime(process.uptime())} 
➮ᴅᴀᴛᴇ - ${message.date} 
➮ɴᴏᴡ ᴛɪᴍᴇ - ${message.time} 
➮Fᴏᴜɴᴅᴇʀ- *David Cyril*
➮Oᴡɴᴇʀ - ${Config.ownername} 
➮Nᴜᴍ - ${owner.split(",")[0]} 
➮Mᴇᴍᴏ - ${formatp(os.totalmem() - os.freemem())} 
      \n *QUEEN_ANITA-V2 SIMPLE WHATSAPP BOT*\n\n ${readmore} 
╭──❰ *ALL MENU* ❱ 
│🎗 Lɪꜱᴛ 
│🎗 Cᴀᴛᴇɢᴏʀʏ 
│🎗 Hᴇʟᴘ 
│🎗 Aʟɪᴠᴇ 
│🎗 Uᴘᴛɪᴍᴇ 
│🎗 Wᴇᴀᴛʜᴇʀ 
│🎗 Lɪɴᴋ 
│🎗 Cᴘᴜ 
│🎗 Rᴇᴘᴏꜱɪᴛᴏʀʏ 
╰─────────────⦁`.trim();
      return await message.bot.sendUi(message.from, { caption: menuMessage });
    } catch (error) {
      await message.error(error + "\nCommand:menus", error);
    }
  }
);
// Command: Set Custom Command
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To set a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      if (!query) {
        return await message.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }

      let queryParts = query.split(",");
      let newCommand, originalCommand;
      let isSticker = false;

      if (message.quoted) {
        let quotedType = message.quoted.mtype;
        if (quotedType === "stickerMessage" && query) {
          isSticker = true;
          newCommand = query.split(" ")[0];
          originalCommand = "sticker-" + message.quoted.msg.fileSha256;
        }
      }

      if (!isSticker && queryParts.length > 1) {
        originalCommand = queryParts[0].trim().toLowerCase();
        newCommand = queryParts[1].trim().toLowerCase();
      } else if (!isSticker) {
        return await message.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }

      if (newCommand.length < 1) {
        return await message.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }

      if (global.setCmdAlias[newCommand]) {
        return await message.send(
          `*_"${isSticker ? "Given Sticker" : newCommand}" Already set for "${
            global.setCmdAlias[newCommand]
          }" Cmd, Please try another ${isSticker ? "Sticker" : "Name"}_*`
        );
      }

      const foundCommand =
        astro_patch.commands.find((cmd) => cmd.pattern === originalCommand) ||
        astro_patch.commands.find(
          (cmd) => cmd.alias && cmd.alias.includes(originalCommand)
        );

      if (foundCommand) {
        global.setCmdAlias[newCommand] = foundCommand.pattern;
        return await message.send(
          `*_Cmd "${global.setCmdAlias[newCommand]}" Successfully set to "${
            isSticker ? "Sticker" : newCommand
          }"._*\n*_These all names are reset if the bot restarts_*`
        );
      } else {
        return await message.send(
          `*_Provided Cmd (${originalCommand}) not found in bot commands. Please provide a valid command name_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:setcmd", error);
    }
  }
);

// Command: Delete Custom Command
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To delete a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      let commandName = query ? query.split(" ")[0].trim().toLowerCase() : "";
      let isSticker = false;

      if (message.quoted) {
        if (message.quoted.mtype === "stickerMessage") {
          isSticker = true;
          commandName = "sticker-" + message.quoted.msg.fileSha256;
        } else if (!query) {
          return await message.send(
            "*_Please reply to a Sticker that was set for a command_*"
          );
        }
      } else if (!query) {
        return await message.send(
          "*_Uhh Dear, provide the name that was set for a command_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }

      if (global.setCmdAlias[commandName]) {
        await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" deleted successfully for "${
            global.setCmdAlias[commandName]
          }" command_*`
        );
        delete global.setCmdAlias[commandName];
        return;
      } else {
        return await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" is not set for any command._*\n *_Please provide a valid ${
            isSticker ? "Sticker" : "command name"
          } to delete_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:delcmd", error);
    }
  }
);

// Command: Ping
astro_patch.smd(
  {
    pattern: "ping",
    desc: "To check ping",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    var startTime = new Date().getTime();
    const { key } = await message.reply("*Queen_Anita-V2 Ping!!!*");
    var endTime = new Date().getTime();
    return await message.send(
      `*Pong*\n *${endTime - startTime} ms*`,
      {
        edit: key,
      },
      "",
      message
    );
  }
);

// Command: Uptime
astro_patch.cmd(
  {
    pattern: "uptime",
    alias: ["runtime"],
    desc: "Tells runtime/uptime of bot.",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    try {
      message.reply(
        `*_Uptime of ${tlang().title}: ${runtime(process.uptime())}_*`
      );
    } catch (error) {
      await message.error(error + "\n\ncommand : uptime", error, false);
    }
  }
);

// Command: List Menu
astro_patch.cmd(
  {
    pattern: "list",
    desc: "list menu",
    category: "user",
    react: "🥀",
  },
  async (message) => {
    try {
      const { commands } = require("../lib");
      let listMessage = `\n  
╭━━〘 * ${Config.botname} * 〙    
┃ 🎗 Prefix: ${Config.HANDLERS}
┃ 🎗 Owner: ${Config.ownername}
┃ 🎗 Commands: ${commands.length}
┃ 🎗 Uptime: ${runtime(process.uptime())}
┃ 🎗 Mem: ${formatp(os.totalmem() - os.freemem())}
╰━━━━━━━━━━━━━━⊷\n`;

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern === undefined) {
          continue;
        }
        listMessage += `*${i + 1} ${fancytext(commands[i].pattern, 1)}*\n`;
        listMessage += `  ${fancytext(commands[i].desc, 1)}\n`;
      }

      return await message.sendUi(message.chat, {
        caption: listMessage + Config.caption,
      });
    } catch (error) {
      await message.error(error + "\nCommand:list", error);
    }
  }
);

// Command: Owner
astro_patch.smd(
  {
    pattern: "owner",
    desc: "To display owner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      const vcard =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        Config.ownername +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        global.owner?.split(",")[0] +
        ":+" +
        global.owner?.split(",")[0] +
        "\nEND:VCARD";

      let contactMessage = {
        contacts: {
          displayName: Config.ownername,
          contacts: [
            {
              vcard,
            },
          ],
        },
        contextInfo: {
          externalAdReply: {
            title: Config.ownername,
            body: "Touch here.",
            renderLargerThumbnail: true,
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 1,
            mediaUrl: "",
            sourceUrl:
              "https://wa.me/+" +
              global.owner?.split(",")[0] +
              "?text=Hii+" +
              Config.ownername,
          },
        },
      };

      return await message.sendMessage(message.jid, contactMessage, {
        quoted: message,
      });
    } catch (error) {
      await message.error(error + "\nCommand:owner", error);
    }
  }
);

// Command: Translate
astro_patch.cmd(
  {
    pattern: "trt",
    alias: ["translate"],
    category: "user",
    filename: __filename,
    use: "< text >",
    desc: "Translates the given text to the desired language.",
  },
  async (message, query) => {
    try {
      let targetLanguage = query ? query.split(" ")[0].toLowerCase() : "en";
      if (!message.reply_text) {
        var textToTranslate =
          query.replace(targetLanguage, "")?.trim() || false;
      } else {
        var textToTranslate = message.reply_text;
      }

      if (!textToTranslate) {
        return await message.reply(
          `*Please provide the text to translate. Example: ${prefix}trt en Who are you*`
        );
      }

      var translation = await translatte(textToTranslate, {
        from: "auto",
        to: targetLanguage,
      });

      if ("text" in translation) {
        return await message.reply(translation.text);
      }
    } catch (error) {
      await message.error(error + "\n\nCommand: trt", error);
    }
  }
);
const readDirectory = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject("Error reading directory");
      } else {
        resolve(files);
      }
    });
  });
};
astro_patch.cmd(
  {
    pattern: "file",
    desc: "to get the exact name and location of the command in the repository, so the user can edit it.",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (message, query) => {
    try {
      if (!query) {
        return message.reply("*Please provide a command or directory*");
      }

      if (query.startsWith(".")) {
        let result = "*------------- FILE MANAGER -2------------*\n";
        try {
          const files = await readDirectory(query);
          files.forEach((file) => {
            result += file + "\n";
          });
          await message.reply(result.toString());
        } catch (error) {
          message.reply(error);
        }
        return;
      }

      const { commands } = require("../lib");
      let output = [];
      let command = query.split(" ")[0].toLowerCase().trim();
      let commandInfo =
        commands.find((cmd) => cmd.pattern === command) ||
        commands.find((cmd) => cmd.alias && cmd.alias.includes(command));

      if (!commandInfo) {
        return await message.reply("*❌No such command.*");
      }

      output.push("*🍁Command:* " + commandInfo.pattern);
      if (commandInfo.category) {
        output.push("*🧩Type:* " + commandInfo.category);
      }
      if (commandInfo.alias && commandInfo.alias[0]) {
        output.push("*🧩Alias:* " + commandInfo.alias.join(", "));
      }
      if (commandInfo.desc) {
        output.push("*✨Description:* " + commandInfo.desc);
      }
      if (commandInfo.use) {
        output.push(
          "*〽️Usage:*\n ```" +
            prefix +
            commandInfo.pattern +
            " " +
            commandInfo.use +
            "```"
        );
      }
      if (commandInfo.usage) {
        output.push("*〽️Usage:*\n ```" + commandInfo.usage + "```");
      }
      if (commandInfo.filename) {
        output.push("*✨FileName:* " + commandInfo.filename);
      }
      try {
        if (
          query.includes("function") &&
          commandInfo.function &&
          message.isAsta &&
          commandInfo.pattern !== "file"
        ) {
          output.push("*🧩Function:* " + commandInfo.function.toString());
        }
      } catch {}
      await message.reply(output.join("\n"));
    } catch (error) {
      await message.error(error + "\nCommand:file", error);
    }
  }
);

astro_patch.cmd(
  {
    pattern: "eval",
    alias: ["$"],
    category: "tools",
    filename: __filename,
    fromMe: true,
    desc: "Runs JavaScript code on the Node.js server.",
    use: "< run code >",
    dontAddCommandList: true,
  },
  async (message, query, { isCreator, cmdName, Void }) => {
    try {
      if (!query) {
        return message.reply("*Provide a query to run*");
      }
      let result = eval("const a = async()=>{\n" + query + "\n}\na()");
      if (typeof result === "object") {
        await message.reply(JSON.stringify(result));
      } else {
        await message.reply(result.toString());
      }
    } catch (error) {
      return await message.reply(error.toString());
    }
  }
);

astro_patch.cmd(
  {
    pattern: "shell",
    category: "tools",
    filename: __filename,
    fromMe: true,
    desc: "Runs a command in the server shell (e.g., Heroku).",
    use: "<shell commands | ls, cd >",
    dontAddCommandList: true,
  },
  async (message, query) => {
    try {
      if (!message.isCreator) {
        return message.reply(tlang().owner);
      }
      if (!query) {
        return message.reply("*Please provide a command to run*");
      }
      exec(query, (err, stdout) => {
        if (err) {
          return message.reply("----" + tlang().title + "----\n\n" + err);
        }
        if (stdout) {
          return message.reply("----" + tlang().title + "----\n\n" + stdout);
        }
      });
    } catch (error) {
      await message.error(error + "\n\ncommand shell", error);
    }
  }
);
