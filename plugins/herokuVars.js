const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1,
  smd,
} = require("../lib");
const axios = require("axios");
const appName = Config.HEROKU_APP_NAME
  ? Config.HEROKU_APP_NAME.toLowerCase()
  : "";
const authToken = Config.HEROKU_API_KEY;
const HEROKU = authToken && appName ? true : false;
const fetch = require("node-fetch");
let updateConfig = () => {
  try {
    let _0x3334e2 = "../config";
    delete require.cache[_0x3334e2];
    require(_0x3334e2);
    return true;
  } catch (_0x4ed960) {
    console.log(_0x4ed960);
  }
};
const heroku = {};
heroku.addvar = async (_0xd07de3, _0x48d352) => {
  try {
    const _0x5a040c = {
      Accept: "application/vnd.heroku+json; version=3",
      Authorization: "Bearer " + authToken,
      "Content-Type": "application/json",
    };
    const _0x2855d9 = await fetch(
      "https://api.heroku.com/apps/" + appName + "/config-vars",
      {
        method: "PATCH",
        headers: _0x5a040c,
        body: JSON.stringify({
          [_0xd07de3]: _0x48d352,
        }),
      }
    );
    const _0x22fb4f = await _0x2855d9.json();
    return {
      status: true,
      data: _0x22fb4f,
    };
  } catch (_0x479075) {
    return {
      status: false,
      data: _0x479075,
    };
  }
};
heroku.getallvar = async () => {
  try {
    const _0x22b1af = {
      Accept: "application/vnd.heroku+json; version=3",
      Authorization: "Bearer " + authToken,
    };
    const _0x3bb50b = await fetch(
      "https://api.heroku.com/apps/" + appName + "/config-vars",
      {
        headers: _0x22b1af,
      }
    );
    const _0xfb3354 = await _0x3bb50b.json();
    let _0x6efaf0 =
      "   『 *" +
      appName +
      " VARS* 』 \n*________________________________________*\n";
    Object.keys(_0xfb3354).forEach((_0x792bf) => {
      _0x6efaf0 +=
        "*" +
        _0x792bf +
        " :*  " +
        (_0xfb3354[_0x792bf] ? "```" + _0xfb3354[_0x792bf] + "```" : "") +
        " \n";
    });
    return {
      status: true,
      data: _0x6efaf0,
    };
  } catch (_0x3932ac) {
    return {
      status: false,
      data: _0x3932ac.message || _0x3932ac,
    };
  }
};
heroku.getvar = async (_0xb1a22) => {
  try {
    const _0x5c6d03 = {
      Accept: "application/vnd.heroku+json; version=3",
      Authorization: "Bearer " + authToken,
    };
    const _0x5605e7 = await fetch(
      "https://api.heroku.com/apps/" + appName + "/config-vars",
      {
        headers: _0x5c6d03,
      }
    );
    const _0x26040f = await _0x5605e7.json();
    return {
      status: true,
      data: _0x26040f[_0xb1a22],
    };
  } catch (_0x3bef2f) {
    return {
      status: false,
      data: _0x3bef2f.message || _0x3bef2f,
    };
  }
};
heroku.setvar = async (_0x25ad82, _0x3115e9) => {
  try {
    const _0x4207de = {
      Accept: "application/vnd.heroku+json; version=3",
      Authorization: "Bearer " + authToken,
      "Content-Type": "application/json",
    };
    fetch("https://api.heroku.com/apps/" + appName + "/config-vars", {
      method: "GET",
      headers: _0x4207de,
    })
      .then((_0x47bbf4) => {
        if (_0x47bbf4.ok) {
          return _0x47bbf4.json();
        } else {
          return {
            status: false,
            data: "Failed to fetch app variables. Status: " + _0x47bbf4.status,
          };
        }
      })
      .then((_0x387a92) => {
        if (_0x387a92.hasOwnProperty(_0x25ad82)) {
          const _0x17a922 = {
            ..._0x387a92,
          };
          _0x17a922[_0x25ad82] = _0x3115e9;
          return fetch(
            "https://api.heroku.com/apps/" + appName + "/config-vars",
            {
              method: "PATCH",
              headers: _0x4207de,
              body: JSON.stringify(_0x17a922),
            }
          );
        } else {
          return {
            status: false,
            data: "Variable not found in app",
          };
        }
      })
      .then((_0x58ea28) => {
        if (_0x58ea28.ok) {
          return {
            status: true,
            data: _0x58ea28,
          };
        }
      })
      .catch((_0x916fd3) => {
        return {
          status: false,
          data: _0x916fd3,
        };
      });
  } catch (_0x3d9ebc) {
    return {
      status: false,
      data: _0x3d9ebc,
    };
  }
};
heroku.setvar = async (_0x4d36a5, _0x4c84a1) => {
  try {
    const _0x2515a0 = {
      Accept: "application/vnd.heroku+json; version=3",
      Authorization: "Bearer " + authToken,
      "Content-Type": "application/json",
    };
    const _0x69e829 = await fetch(
      "https://api.heroku.com/apps/" + appName + "/config-vars",
      {
        method: "GET",
        headers: _0x2515a0,
      }
    );
    if (!_0x69e829.ok) {
      return {
        status: false,
        data: "Variable not found in heroku app",
      };
    }
    const _0x5ae1b2 = await _0x69e829.json();
    if (_0x5ae1b2.hasOwnProperty(_0x4d36a5)) {
      const _0x587d10 = {
        ..._0x5ae1b2,
      };
      _0x587d10[_0x4d36a5] = _0x4c84a1;
      const _0x4b3418 = await fetch(
        "https://api.heroku.com/apps/" + appName + "/config-vars",
        {
          method: "PATCH",
          headers: _0x2515a0,
          body: JSON.stringify(_0x587d10),
        }
      );
      if (_0x4b3418.ok) {
        return {
          status: true,
          data: _0x4b3418,
        };
      } else {
        return {
          status: false,
          data: "Failed to update app variable. Status: " + _0x4b3418.status,
        };
      }
    } else {
      return {
        status: false,
        data: "Variable not found in app",
      };
    }
  } catch (_0x5e8fe0) {
    return {
      status: false,
      data: _0x5e8fe0.message || _0x5e8fe0,
    };
  }
};
smd(
  {
    cmdname: "getsudo",
    alias: ["mods", "gsudo"],
    info: "get sudo users list.",
    fromMe: true,
    type: "tools",
    filename: __filename,
  },
  async (_0xf78029) => {
    let _0x204a80 = global.sudo
      .split(",")
      .filter((_0x4a441f) => _0x4a441f && _0x4a441f !== "null")
      .map((_0x471040) => _0x471040.trim());
    let _0x10bccf = _0x204a80
      .map(
        (_0x247f5e, _0xc999b3) =>
          "  " + (_0xc999b3 + 1) + " 〄 @" + _0x247f5e + "\n\n"
      )
      .join("");
    let _0x1babe2 = [
      _0xf78029.sender,
      ..._0x204a80.map((_0xb3507b) => _0xb3507b + "@s.whatsapp.net"),
    ];
    if (!_0x10bccf || !_0x204a80 || !_0x204a80[0]) {
      return await _0xf78029.reply(
        "*There's no mods/sudo added for your bot!*"
      );
    }
    let _0x762894 = (
      "\n   👤 *" +
      (Config.botname ? Config.botname : "QUEEN_ANITA-V2") +
      " MODS* 👤\n   \n" +
      _0x10bccf
    ).trim();
    return await _0xf78029.reply(
      "https://telegra.ph/file/5fd51597b0270b8cff15b.png",
      {
        caption: _0x762894,
        mentions: _0x1babe2,
      },
      "img",
      _0xf78029
    );
  }
);
smd(
  {
    pattern: "setsudo",
    alias: ["ssudo", "setmod"],
    fromMe: true,
    desc: "Make sudo to a user",
    category: "tools",
    filename: __filename,
  },
  async (_0x61d6ff) => {
    try {
      let _0x24d586 = _0x61d6ff.reply_message
        ? _0x61d6ff.reply_message.sender
        : _0x61d6ff.mentionedJid[0]
        ? _0x61d6ff.mentionedJid[0]
        : "";
      if (!_0x24d586 || !_0x24d586.includes("@s.whatsapp.net")) {
        return await _0x61d6ff.reply("*Uhh dear, reply/mention an User*");
      }
      let _0xf1255f = _0x24d586.split("@")[0];
      if (global.sudo.includes(_0xf1255f)) {
        return _0x61d6ff.reply("*Number Already Exist In Sudo!*");
      }
      global.sudo += "," + _0xf1255f;
      let _0x376ddc = HEROKU
        ? await heroku.addvar("SUDO", global.sudo)
        : {
            status: false,
          };
      if (_0x376ddc && _0x376ddc.status) {
        return _0x61d6ff.reply(
          "*" +
            _0xf1255f +
            " Added Succesfully.*\nSudo Numbers : ```" +
            global.sudo +
            "```"
        );
      } else if (!_0x376ddc || !_0x376ddc?.status) {
        if (HEROKU) {
          await _0x61d6ff.reply(
            "*_Request terminated due to error!_*\n\n  There's no responce from _HEROKU_, \n  please check that you put valid _HEROKU_APP_NAME_ and _HEROKU_API_KEY_"
          );
        }
        await _0x61d6ff.reply("*User temporary added in sudo.*");
      }
    } catch (_0x356a31) {
      await _0x61d6ff.error(_0x356a31 + "\n\ncommand: setsudo", _0x356a31);
    }
  }
);
smd(
  {
    pattern: "delsudo",
    alias: ["dsudo", "delmod"],
    fromMe: true,
    desc: "delete sudo user.",
    category: "tools",
    filename: __filename,
  },
  async (_0xd149b4) => {
    try {
      let _0x45285f = _0xd149b4.reply_message
        ? _0xd149b4.reply_message.sender
        : _0xd149b4.mentionedJid[0]
        ? _0xd149b4.mentionedJid[0]
        : "";
      if (!_0x45285f || !_0x45285f.includes("@s.whatsapp.net")) {
        return await _0xd149b4.reply("*Uhh dear, reply/mention an User*");
      }
      let _0x3c1f41 = _0x45285f.split("@")[0];
      let _0x5a3afd = "," + _0x3c1f41;
      if (global.sudo.includes(_0x5a3afd)) {
        global.sudo = global.sudo.replace(_0x5a3afd, "");
      } else {
        return await _0xd149b4.reply("*_User not found in the Sudo List!_*");
      }
      let _0x69f761 = HEROKU
        ? await heroku.addvar("SUDO", global.sudo)
        : {
            status: false,
          };
      if (_0x69f761 && _0x69f761.status) {
        return _0xd149b4.reply(
          "*" +
            _0x3c1f41 +
            " Deleted Succesfully.*\nSudo Numbers : ```" +
            global.sudo +
            "```"
        );
      } else if (!_0x69f761 || !_0x69f761?.status) {
        if (HEROKU) {
          await _0xd149b4.reply(
            "*_Request terminated due to error!_*\n\n  There's no responce from _HEROKU_, \n  please check that you put valid _HEROKU_APP_NAME_ and _HEROKU_API_KEY_"
          );
        }
        await _0xd149b4.reply("*User removed from sudo.*");
      }
    } catch (_0x38beee) {
      await _0xd149b4.error(_0x38beee + "\n\ncommand: delsudo", _0x38beee);
    }
  }
);
smd(
  {
    pattern: "allvar",
    alias: ["getallvar", "allvars"],
    desc: "To get All  Heroku Vars",
    fromMe: true,
    category: "tools",
    filename: __filename,
  },
  async (_0x301429) => {
    try {
      let _0x30be20 = await heroku.getallvar();
      console.log({
        result: _0x30be20,
      });
      if (_0x30be20.status) {
        return _0x301429.send(_0x30be20.data);
      } else {
        console.error(_0x30be20.data);
        _0x301429.reply(
          "*_There's no responce from HEROKU_*, \n  please check that you put valid\n  _HEROKU_APP_NAME_ & _HEROKU_API_KEY_\n``` See Console to check whats the err```"
        );
      }
    } catch (_0x27dcbd) {
      await _0x301429.error(_0x27dcbd + "\n\ncommand: allvar", _0x27dcbd);
    }
  }
);
smd(
  {
    pattern: "newvar",
    alias: ["addvar", "avar"],
    desc: "To Set Heroku Vars",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (_0x23a9e4, _0x5eb901, { cmdName: _0x5d321d }) => {
    try {
      if (!_0x5eb901) {
        return _0x23a9e4.reply(
          "*Use " + (prefix + _0x5d321d) + " CAPTION:Suhail Md*"
        );
      }
      const _0x6c193a = _0x5eb901.indexOf(":");
      const _0x41a396 = _0x5eb901.slice(0, _0x6c193a).toUpperCase().trim();
      const _0x440f12 = _0x5eb901.slice(_0x6c193a + 1).trim();
      process.env[_0x41a396] = _0x440f12;
      updateConfig();
      if (!_0x440f12) {
        return msg.reply(
          "*Uhh Please, Provide Value After ':' !*\n*Example : " +
            (prefix + smd) +
            " AUTO_SAVE_STATUS:true*"
        );
      }
      let _0x451d76 = await heroku.addvar(_0x41a396, _0x440f12);
      if (_0x451d76 && _0x451d76.status) {
        return _0x23a9e4.reply(
          "*" + _0x41a396 + ":* [ " + _0x440f12 + " ]  *Added successfully.*"
        );
      } else if (!_0x451d76 || !_0x451d76.status) {
        console.error(result.data);
        await _0x23a9e4.reply(
          "*_Can't add " +
            _0x5d321d +
            " due to error!_*\n\n  _please check that you put valid_\n  _*HEROKU_APP_NAME* and *HEROKU_API_KEY*_"
        );
      }
    } catch (_0x5763ff) {
      await _0x23a9e4.error(_0x5763ff + "\n\ncommand: " + _0x5d321d, _0x5763ff);
    }
  }
);
smd(
  {
    pattern: "getvar",
    desc: "To Get A Heroku Var",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (_0x303701, _0x1d8719, { cmdName: _0x4d5fc7 }) => {
    try {
      if (!_0x1d8719) {
        return _0x303701.reply(
          "*Please give me Variable Name*\n*Example : " +
            (prefix + _0x4d5fc7) +
            " CAPTION*"
        );
      }
      const _0x31c9ad = _0x1d8719.split(" ")[0].toUpperCase();
      let _0x510fef = await heroku.getvar(_0x31c9ad);
      if (_0x510fef.status) {
        if (_0x510fef.data) {
          return _0x303701.reply("*" + _0x31c9ad + " :* " + _0x510fef.data);
        } else {
          return _0x303701.reply(
            "*" +
              _0x31c9ad +
              "* does not exist in Heroku *" +
              appName +
              "* app."
          );
        }
      } else if (!_0x510fef || !_0x510fef.status) {
        console.error(result.data);
        await _0x303701.reply(
          "*_There's no responce from HEROKU_*, \n  _please check that you put valid_\n  _*HEROKU_APP_NAME* & *HEROKU_API_KEY*_"
        );
      }
    } catch (_0x3c6608) {
      await _0x303701.error(_0x3c6608 + "\n\ncommand: " + _0x4d5fc7, _0x3c6608);
    }
  }
);
smd(
  {
    pattern: "setvar",
    desc: "To Set Heroku Vars",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (_0xf720ad, _0x4492c1, { smd: _0x14ba4c }) => {
    try {
      if (!_0x4492c1) {
        return _0xf720ad.reply(
          "*Uhh dear, Give me variable name*\n*Example : " +
            prefix +
            "setvar PREFIX:null*"
        );
      }
      const _0x3adbd0 = _0x4492c1.indexOf(":");
      const _0x495c42 = _0x4492c1.slice(0, _0x3adbd0).toUpperCase().trim();
      const _0xaca022 = _0x4492c1.slice(_0x3adbd0 + 1).trim();
      if (!_0xaca022) {
        return msg.reply(
          "*Uhh Please, Provide value after ':' !*\n*Example : " +
            (prefix + _0x14ba4c) +
            " AUTO_READ_STATUS:true*"
        );
      }
      process.env[_0x495c42] = _0xaca022;
      updateConfig();
      let _0x20767c = await heroku.setvar(_0x495c42, _0xaca022);
      if (_0x20767c.status) {
        await _0xf720ad.reply(
          "*" + _0x495c42 + ":* [ " + _0xaca022 + " ]  *updated successfully.*"
        );
      } else if (!_0x20767c || !_0x20767c.status) {
        console.error(_0x20767c.data);
        await _0xf720ad.reply(_0x20767c.data);
      }
    } catch (_0x536b03) {
      await _0xf720ad.error(_0x536b03 + "\n\ncommand: " + _0x14ba4c, _0x536b03);
    }
  }
);
