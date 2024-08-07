const fs = require("fs");
const path = require("path");
const Config = require(__dirname + "/../config.js");
const blockJid = ["" + (process.env.BLOCKJIDS || "120363023983262391@g.us"), ...(typeof global.blockJids === "string" ? global.blockJids.split(",") : [])];
const allowJid = ["null", ...(typeof global.allowJids === "string" ? global.allowJids.split(",") : [])];
const Pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const FileType = require("file-type");
const express = require("express");
const app = express();
const events = require("./plugins");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./exif");
let {
  default: SuhailMDConnect,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  DisconnectReason,
  useMultiFileAuthState,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  makeInMemoryStore,
  jidDecode
} = require("@whiskeysockets/baileys");
var last_status = {};
global.setCmdAlias = {};
global.AstroOfficial = false;
global.sqldb = false;
global.pg_pools = false;
const {
  userdb,
  sck,
  groupdb,
  Plugindb,
  bot_,
  smdBuffer
} = require("../lib");
const fetch = require("node-fetch");
const axios = require("axios");
let {
  sleep,
  getBuffer,
  parsedJid,
  tiny,
  botpic,
  tlang
} = require("../lib");
const {
  smsg,
  callsg,
  groupsg,
} = require("./serialized.js");
const {
  runtime,
  getSizeMedia,
} = require("../lib");
var prefa = !Config.HANDLERS || ["false", "null", " ", "", "nothing", "not", "empty"].includes(!Config.HANDLERS) ? true : false;
global.prefix = prefa ? "" : Config.HANDLERS[0];
global.prefixRegex = prefa || ["all"].includes(Config.HANDLERS) ? new RegExp("^") : new RegExp("^[" + Config.HANDLERS + "]");
global.prefixboth = ["all"].includes(Config.HANDLERS);
let baileys = "/Sessions/";
const connnectpg = async () => {
  try {
    const {
      Pool: _0x49bfec
    } = require("pg");
    const _0x39ea68 = new _0x49bfec({
      connectionString: global.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
    const _0xbc8be7 = await _0x39ea68.connect();
    _0xbc8be7.release();
    console.log("🌍 Connected to the PostgreSQL.");
    return true;
  } catch (_0x4fb407) {
    console.log("Could not connect with PostgreSQL.\n");
    return false;
  }
};
const connnectMongo = async () => {
  const _0x1268d = require("mongoose");
  try {
    _0x1268d.set("strictQuery", true);
    await _0x1268d.connect(mongodb);
    console.log("🌍 Connected to the Mongodb.");
    return true;
  } catch {
    console.log("Could not connect with Mongodb.");
    return false;
  }
};
let Suhail = {};
const store = makeInMemoryStore({
  logger: Pino({
    level: "silent"
  }).child({
    level: "silent"
  })
});
try {
  if (fs.existsSync(__dirname + "/store.json")) {
    store.readFromFile(__dirname + "/store.json");
  }
} catch (_0x4ef18e) {
  console.log("CLIENT STORE ERROR:\n", _0x4ef18e);
}
require("events").EventEmitter.defaultMaxListeners = 2000;
async function syncdb() {
  let _0x3d0468 = __dirname + "/assets/logo.png";
  try {
    global.log0 = typeof THUMB_IMAGE === "string" ? await getBuffer(THUMB_IMAGE.split(",")[0]) : fs.readFileSync(_0x3d0468);
  } catch (_0x780452) {
    _0x3d0468 = __dirname + "/assets/logo.png";
  }
  global.log0 = global.log0 || fs.readFileSync(_0x3d0468);
  const {
    state: _0x46b7e4,
    saveCreds: _0xd884d9
  } = await useMultiFileAuthState(__dirname + baileys);
  let _0x5447f8 = SuhailMDConnect({
    logger: Pino({
      level: "silent" || "debug" || "fatal"
    }),
    printQRInTerminal: false,
    browser: ["Windows", "chrome", ""],
    fireInitQueries: true,
    shouldSyncHistoryMessage: true,
    downloadHistory: true,
    syncFullHistory: true,
    generateHighQualityLinkPreview: true,
    markOnlineOnConnect: false,
    auth: _0x46b7e4,
    getMessage: async _0x303f46 => {
      let _0x2faf9d = {
        conversation: "Asta-Md"
      };
      if (store) {
        const _0x27b3c1 = await store.loadMessage(_0x303f46.remoteJid, _0x303f46.id);
        return _0x27b3c1.message || _0x2faf9d;
      }
      return _0x2faf9d;
    }
  });
  store.bind(_0x5447f8.ev);
  setInterval(() => {
    try {
      store.writeToFile(__dirname + "/store.json");
    } catch (_0x54ac48) {
      console.log("CLIENT STORE ERROR:\n", _0x54ac48);
    }
  }, 10000);
  _0x5447f8.ev.on("call", async _0x522b10 => {
    let _0x37f540 = await callsg(_0x5447f8, JSON.parse(JSON.stringify(_0x522b10[0])));
    events.commands.map(async _0x13c575 => {
      if (_0x13c575.call === "offer" && _0x37f540.status === "offer") {
        try {
          _0x13c575.function(_0x37f540, {
            store: store,
            Void: _0x5447f8
          });
        } catch (_0x557640) {
          console.error("[CALL ERROR] ", _0x557640);
        }
      }
      if (_0x13c575.call === "accept" && _0x37f540.status === "accept") {
        try {
          _0x13c575.function(_0x37f540, {
            store: store,
            Void: _0x5447f8
          });
        } catch (_0x3d8400) {
          console.error("[CALL ACCEPT ERROR] ", _0x3d8400);
        }
      }
      if (_0x13c575.call === "call" || _0x13c575.call === "on" || _0x13c575.call === "all") {
        try {
          _0x13c575.function(_0x37f540, {
            store: store,
            Void: _0x5447f8
          });
        } catch (_0x27942e) {
          console.error("[CALL ERROR] ", _0x27942e);
        }
      }
    });
  });
  var _0x5b55c3 = false;
  let _0x4f1890 = {};
  let _0x686f61 = {};
  _0x5447f8.ev.on("messages.upsert", async _0x21c265 => {
    try {
      if (!_0x21c265.messages || !Array.isArray(_0x21c265.messages)) {
        return;
      }
      _0x5b55c3 = _0x5b55c3 || _0x5447f8.decodeJid(_0x5447f8.user.id);
      for (mek of _0x21c265.messages) {
        mek.message = Object.keys(mek.message || {})[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || !/broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x4857e4 = await smsg(_0x5447f8, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x4857e4.message) {
          continue;
        }
        let _0x40f6ef = _0x4857e4.body;
        let _0x12bfa9 = {
          body: _0x40f6ef,
          mek: mek,
          text: _0x40f6ef,
          args: _0x40f6ef.split(" ") || [],
          botNumber: _0x5b55c3,
          isCreator: _0x4857e4.isCreator,
          store: store,
          budy: _0x40f6ef,
          Suhail: {
            bot: _0x5447f8
          },
          Void: _0x5447f8,
          proto: proto
        };
        events.commands.map(async _0x2becac => {
          if (typeof _0x2becac.on === "string") {
            let _0x443fbc = _0x2becac.on.trim();
            let _0x17b495 = !_0x2becac.fromMe || _0x2becac.fromMe && _0x4857e4.fromMe;
            if (/status|story/gi.test(_0x443fbc) && (_0x4857e4.jid === "status@broadcast" || mek.key.remoteJid === "status@broadcast") && _0x17b495) {
              _0x2becac.function(_0x4857e4, _0x40f6ef, _0x12bfa9);
            } else if (["broadcast"].includes(_0x443fbc) && (/broadcast/gi.test(mek.key.remoteJid) || _0x4857e4.broadcast || /broadcast/gi.test(_0x4857e4.from)) && _0x17b495) {
              _0x2becac.function(_0x4857e4, _0x40f6ef, _0x12bfa9);
            }
          }
        });
      }
    } catch (_0x45f1be) {
      console.log("ERROR broadCast --------- messages.upsert \n", _0x45f1be);
    }
  });
  _0x5447f8.ev.on("messages.upsert", async _0x1071af => {
    try {
      _0x5b55c3 = _0x5b55c3 || _0x5447f8.decodeJid(_0x5447f8.user.id);
      if (!global.isStart) {
        return;
      }
      for (mek of _0x1071af.messages) {
        if (!mek.message) {
          continue;
        }
        mek.message = Object.keys(mek.message || {})[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || /broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x5979da = await smsg(_0x5447f8, JSON.parse(JSON.stringify(mek)), store, true);
        let _0x11d09c = _0x5979da;
        if (!_0x5979da.message || _0x5979da.chat.endsWith("broadcast")) {
          continue;
        }
        var {
          body: _0x4186a0
        } = _0x5979da;
        var _0x36ea81 = _0x5979da.isCreator;
        var _0x57832c = typeof _0x5979da.text == "string" ? _0x5979da.text.trim() : false;
        if (_0x57832c && _0x4186a0[1] && _0x4186a0[1] == " ") {
          _0x4186a0 = _0x4186a0[0] + _0x4186a0.slice(2);
        }
        let _0x9954f4 = false;
        let _0x4931af = false;
        let _0x49f69c = false;
        if (_0x57832c && Config.HANDLERS.toLowerCase().includes("null")) {
          _0x9954f4 = true;
          _0x4931af = _0x4186a0.split(" ")[0].toLowerCase() || false;
        } else if (_0x57832c && !Config.HANDLERS.toLowerCase().includes("null")) {
          _0x9954f4 = prefixboth || _0x4186a0 && prefixRegex.test(_0x4186a0[0]) || _0x5979da.isAstro && /2348039607375|2349027862116|2348052944641/g.test(_0x5b55c3) && _0x4186a0[0] == ",";
          _0x4931af = _0x9954f4 ? prefa ? _0x4186a0.trim().split(" ")[0].toLowerCase() : _0x4186a0.slice(1).trim().split(" ")[0].toLowerCase() : false;
          _0x49f69c = prefixboth ? _0x4186a0.trim().split(" ")[0].toLowerCase() : "";
        } else {
          _0x9954f4 = false;
        }
        let _0x4dc849 = _0x4931af ? _0x4931af.trim() : "";
        if (_0x4dc849 && global.setCmdAlias[_0x4dc849] !== undefined) {
          _0x4931af = global.setCmdAlias[_0x4dc849];
          _0x9954f4 = true;
        } else if (_0x5979da.mtype == "stickerMessage") {
          _0x4dc849 = "sticker-" + _0x5979da.msg.fileSha256;
          if (global.setCmdAlias[_0x4dc849]) {
            _0x4931af = global.setCmdAlias[_0x4dc849];
            _0x9954f4 = true;
          }
        }
        if (blockJid.includes(_0x5979da.chat) && !_0x5979da.isAstro) {
          return;
        }
        if (_0x9954f4 && (_0x5979da.isBaileys || !_0x36ea81 && Config.WORKTYPE === "private" && !allowJid.includes(_0x5979da.chat))) {
          _0x9954f4 = false;
        }
        const _0x34cf4e = _0x5979da.body ? _0x4186a0.trim().split(/ +/).slice(1) : [];
        if (!_0x36ea81 && global.disablepm === "true" && _0x9954f4 && !_0x5979da.isGroup) {
          _0x9954f4 = false;
        }
        if (!_0x36ea81 && global.disablegroup === "true" && _0x9954f4 && _0x5979da.isGroup && !allowJid.includes(_0x5979da.chat)) {
          _0x9954f4 = false;
        }
        Suhail.bot = _0x5447f8;
        if (_0x9954f4) {
          let _0x111ae6 = events.commands.find(_0x3350ce => _0x3350ce.pattern === _0x4931af) || events.commands.find(_0x33eb5e => _0x33eb5e.alias && _0x33eb5e.alias.includes(_0x4931af));
          if (!_0x111ae6 && prefixboth && _0x49f69c) {
            _0x111ae6 = events.commands.find(_0x4c60c8 => _0x4c60c8.pattern === _0x49f69c) || events.commands.find(_0x4a2be0 => _0x4a2be0.alias && _0x4a2be0.alias.includes(_0x49f69c));
          }
          if (_0x111ae6 && _0x111ae6.fromMe && !_0x5979da.fromMe && !_0x36ea81) {
            _0x111ae6 = false;
            return _0x5979da.reply(tlang().owner);
          }
          if (_0x5979da.isGroup && _0x111ae6 && _0x4931af !== "bot") {
            let _0x334235 = _0x4f1890[_0x5979da.chat] || (await groupdb.findOne({
              id: _0x5979da.chat
            })) || {
              botenable: toBool(_0x5979da.isAstro || !blockJid.includes(_0x5979da.chat))
            };
            if (_0x334235 && _0x334235.botenable === "false") {
              _0x111ae6 = false;
            }
            if (_0x111ae6 && _0x334235) {
              let _0x262020 = _0x111ae6.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x1678dd = new RegExp("\\b" + _0x262020 + "\\b");
              if (_0x334235.disablecmds !== "false" && _0x1678dd.test(_0x334235.disablecmds)) {
                _0x111ae6 = false;
              }
            }
          }
          if (!_0x36ea81 && _0x111ae6) {
            try {
              let _0x129db8 = _0x686f61[_0x5979da.sender] || (await userdb.findOne({
                id: _0x5979da.sender
              })) || {
                ban: "false"
              };
              if (_0x129db8.ban === "true") {
                _0x111ae6 = false;
                _0x5979da.reply("*Hey " + _0x5979da.senderName.split("\n").join("  ") + ",*\n_You are banned from using my commands._");
              }
            } catch (_0x1ae665) {
              console.log("checkban.ban", _0x1ae665);
            }
          }
          if (_0x111ae6) {
            if (_0x111ae6.react) {
              _0x5979da.react(_0x111ae6.react);
            }
            let _0x23f471 = _0x5979da.body ? _0x4186a0.trim().split(/ +/).slice(1).join(" ") : "";
            let _0x2e97d6 = _0x111ae6.pattern;
            _0x5979da.cmd = _0x2e97d6;
            try {
              _0x111ae6.function(_0x5979da, _0x23f471, {
                cmd: _0x2e97d6,
                text: _0x23f471,
                body: _0x4186a0,
                args: _0x34cf4e,
                cmdName: _0x4931af,
                isCreator: _0x36ea81,
                smd: _0x2e97d6,
                botNumber: _0x5b55c3,
                budy: _0x57832c,
                store: store,
                Suhail: Suhail,
                Void: _0x5447f8
              });
            } catch (_0x1db755) {
              console.log("[ERROR] ", _0x1db755);
            }
          } else {
            _0x9954f4 = false;
            const _0x44e2a2 = events.commands.find(_0x527670 => _0x527670.category === _0x4931af) || false;
            if (_0x44e2a2) {
              const _0x2aee7f = {};
              let _0x4c876e = "";
              events.commands.map(async (_0x2d64f9, _0x30758e) => {
                if (_0x2d64f9.dontAddCommandList === false && _0x2d64f9.pattern !== undefined) {
                  if (!_0x2aee7f[_0x2d64f9.category]) {
                    _0x2aee7f[_0x2d64f9.category] = [];
                  }
                  _0x2aee7f[_0x2d64f9.category].push(_0x2d64f9.pattern);
                }
              });
              for (const _0x47f295 in _0x2aee7f) {
                if (_0x4931af == _0x47f295.toLowerCase()) {
                  _0x4c876e = "┌───〈 *" + _0x47f295.toLowerCase() + " menu*  〉───◆\n│╭─────────────···▸\n┴│▸\n";
                  for (const _0x562a5a of _0x2aee7f[_0x47f295]) {
                    _0x4c876e += "⬡│▸ " + _0x562a5a + "\n";
                  }
                  _0x4c876e += "┬│▸\n│╰────────────···▸▸\n└───────────────···▸";
                  break;
                }
              }
              _0x5447f8.sendUi(_0x5979da.jid, {
                caption: tiny(_0x4c876e)
              });
            }
          }
        }
        try {
          _0x4f1890[_0x5979da.chat] = (await groupdb.findOne({
            id: _0x5979da.chat
          })) || (await groupdb.new({
            id: _0x5979da.chat,
            botenable: _0x5979da.chat === "120363023983262391@g.us" ? "false" : "true",
            goodbye: toBool(global.gdbye),
            welcome: toBool(global.wlcm)
          }));
          _0x686f61[_0x5979da.sender] = (await userdb.findOne({
            id: _0x5979da.sender
          })) || (await userdb.new({
            id: _0x5979da.sender,
            name: _0x5979da.pushName || "Unknown"
          }));
        } catch (_0x1e1681) {
          main();
        }
        text = _0x5979da.body;
        let _0x4717ae = {
          dbuser: _0x686f61[_0x5979da.sender],
          dbgroup: _0x4f1890[_0x5979da.chat],
          body: _0x4186a0,
          mek: mek,
          text: text,
          args: _0x34cf4e,
          botNumber: _0x5b55c3,
          isCreator: _0x36ea81,
          icmd: _0x9954f4,
          store: store,
          budy: _0x57832c,
          Suhail: Suhail,
          Void: _0x5447f8,
          proto: proto
        };
        let _0x1421b9 = {
          mp4: "video",
          mp3: "audio",
          webp: "sticker",
          photo: "image",
          picture: "image",
          vv: "viewonce"
        };
        events.commands.map(async _0x2dffdb => {
          if (typeof _0x2dffdb.on === "string") {
            let _0x1d5795 = _0x2dffdb.on.trim();
            let _0x3078ae = !_0x2dffdb.fromMe || _0x2dffdb.fromMe && _0x5979da.fromMe;
            if (_0x1d5795 === "main" && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (_0x5979da.text && _0x1d5795 === "text" && /text|txt|true|smd|asta/gi.test(_0x2dffdb.quoted) && _0x5979da.quoted && _0x5979da.quoted.text && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (_0x5979da.text && ["body", "text"].includes(_0x1d5795) && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (typeof _0x5979da[_0x1421b9[_0x1d5795] || _0x1d5795] === "boolean" && _0x5979da.quoted && _0x5979da.quoted[_0x2dffdb.quoted] && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (_0x1d5795 === "viewonce" && (_0x5979da.viewOnce || mek.message.viewOnceMessageV2)) {
              try {
                _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
              } catch (_0x1b9359) {
                console.log("[ERROR] ", _0x1b9359);
              }
            } else if (typeof _0x5979da[_0x1421b9[_0x1d5795] || _0x1d5795] === "boolean" && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            }
            if (_0x1d5795 === "delete" && _0x5979da.mtype == "protocolMessage" && _0x5979da.msg.type === "REVOKE" && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (_0x1d5795 === "poll" && /poll/gi.test(_0x5979da.mtype) && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            } else if (_0x1d5795 === "quoted" && _0x5979da.quoted && _0x3078ae) {
              _0x2dffdb.function(_0x5979da, _0x4186a0, _0x4717ae);
            }
          }
        });
      }
    } catch (_0x30adbe) {
      console.log("client.js --------- messages.upsert \n", _0x30adbe);
    }
  });
  let _0x4c825a = {};
  _0x5447f8.ev.on("group-participants.update", async _0x33a505 => {
    try {
      let _0x1684d7 = await groupsg(_0x5447f8, JSON.parse(JSON.stringify(_0x33a505)), true);
      if (!_0x1684d7 || !_0x1684d7.isGroup) {
        return;
      }
      events.commands.map(async _0x497293 => {
        if (_0x1684d7.status === _0x497293.group) {
          try {
            _0x497293.function(_0x1684d7, {
              store: store,
              Void: _0x5447f8
            });
          } catch (_0x32a9e1) {
            console.error("[GROUP PARTICEPENTS ADD ERROR] ", _0x32a9e1);
          }
        }
        if (/on|true|main|all|asta|smd/gi.test(_0x497293.group)) {
          try {
            _0x497293.function(_0x1684d7, {
              store: store,
              Void: _0x5447f8
            });
          } catch (_0x1dff1e) {
            console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", _0x1dff1e);
          }
        }
      });
    } catch (_0x424a69) {
      console.log(_0x424a69);
    }
  });
  _0x5447f8.ev.on("groups.update", async _0x334a9c => {
    try {
      for (const _0x6a9165 of _0x334a9c) {
        if (!store.allgroup) {
          store.allgroup = {};
        }
        ;
        store.allgroup[_0x6a9165.id] = _0x6a9165;
      }
    } catch (_0x58d9c1) {
      console.log(_0x58d9c1);
    }
  });
  _0x5447f8.ev.on("groups.upsert", async _0x6ac529 => {
    try {
      events.commands.map(async _0x591343 => {
        if (/on|true|main|all|asta|smd/gi.test(_0x591343.groupsetting || _0x591343.upsertgroup || _0x591343.groupupsert)) {
          _0x591343.function({
            ..._0x6ac529[0],
            bot: _0x5447f8
          }, {
            store: store,
            Void: _0x5447f8,
            data: _0x6ac529
          });
        }
      });
      await groupsg(_0x5447f8, JSON.parse(JSON.stringify(_0x6ac529[0])), false, true);
    } catch (_0x2ec500) {
      console.log(_0x2ec500);
    }
  });
  _0x5447f8.ev.on("contacts.upsert", _0x30754f => {
    try {
      for (const _0x55e2fd of _0x30754f) {
        store.contacts[_0x55e2fd.id] = _0x55e2fd;
      }
    } catch (_0x528b11) {}
  });
  _0x5447f8.ev.on("contacts.update", async _0x557445 => {
    for (let _0x2d3aad of _0x557445) {
      let _0x42cd7b = _0x5447f8.decodeJid(_0x2d3aad.id);
      if (store && store.contacts) {
        store.contacts[_0x42cd7b] = {
          id: _0x42cd7b,
          name: _0x2d3aad.notify
        };
      }
    }
  });
  _0x5447f8.serializeM = _0x40f3f1 => smsg(_0x5447f8, _0x40f3f1, store, false);
  _0x5447f8.ev.on("connection.update", async _0x3fd0b3 => {
    const {
      connection: _0x2224a7,
      lastDisconnect: _0x309893,
    } = _0x3fd0b3;
    if (_0x2224a7 === "connecting") {
    //  log("ℹ️ Connecting to WhatsApp!");
    }
    if (_0x2224a7 === "open") {
      if (/true|ok|sure|yes/gi.test(global.flush) || !_0x5447f8.authState.creds?.myAppStateKeyId) {
        log("Flushing SESSION_ID" + (_0x5447f8.authState.creds?.myAppStateKeyId ? "" : " B'Coz *myAppStateKeyId Missing") + "!");
        _0x5447f8.ev.flush();
      }
      let _0x89b8f6 = _0x5447f8.decodeJid(_0x5447f8.user.id);
      let _0x11c5d7 = /2348039607375|2349027862116|2348052944641/g.test(_0x89b8f6);
      let _0x506b6e = false;
      global.plugin_dir = path.join(__dirname, "../plugins/");
      if (!isMongodb && !sqldb) {
        main();
      }
      log("CONNECTED TO WHATSAPP");
      try {
        try {
          _0x506b6e = (await bot_.findOne({
            id: "bot_" + _0x89b8f6
          })) || (await bot_.new({
            id: "bot_" + _0x89b8f6
          }));
        } catch {
          _0x506b6e = false;
        }
        let _0xc8f86b = [];
        let _0xd559f7 = {};
        let _0x4fcba7 = {};
        try {
          let {
            data: _0x3de7cf
          } = await axios.get("");
          _0xd559f7 = {
            ...(typeof _0x3de7cf.external === "object" ? _0x3de7cf.external : {}),
            ...(typeof _0x3de7cf.plugins === "object" ? _0x3de7cf.plugins : {})
          };
          _0xc8f86b = _0x3de7cf.names;
          _0x4fcba7 = _0x3de7cf.extension && typeof _0x3de7cf.extension === "object" ? _0x3de7cf.extension : {};
        } catch (_0x385462) {
          _0xd559f7 = {};
        }
        _0xc8f86b = Array.isArray(_0xc8f86b) ? _0xc8f86b : [];
        if (_0x506b6e && _0x506b6e.plugins) {
        //  log("⏳ Checking External Plugins.!!");
          _0xd559f7 = {
            ..._0x506b6e.plugins,
            ..._0xd559f7
          };
        }
        if (Object.keys(_0xd559f7 || {}).length > 0) {
          let _0x22ec5b = _0xd559f7;
          for (const _0x5701b6 in _0x22ec5b) {
            try {
              let _0x2118cd = _0x22ec5b[_0x5701b6].includes("raw") ? _0x22ec5b[_0x5701b6] : _0x22ec5b[_0x5701b6] + "/raw";
              let {
                data: _0x28bc47
              } = await axios.get(_0x2118cd);
              if (_0x28bc47) {
                let _0x224d22 = _0x5701b6 + (_0x4fcba7[_0x5701b6] && /.js|.smd|.asta/gi.test(_0x4fcba7[_0x5701b6]) ? _0x4fcba7[_0x5701b6] : ".smd");
                const _0x286e03 = plugin_dir + (_0x224d22.includes("/") ? _0x224d22.split("/")[0] : "");
                if (!fs.existsSync(_0x286e03)) {
                  fs.mkdirSync(_0x286e03, {
                    recursive: true
                  });
                }
                fs.writeFileSync(plugin_dir + _0x224d22, _0x28bc47, "utf8");
                if (!_0xc8f86b.includes(_0x5701b6)) {
                  log(" " + _0x5701b6 + " ✔️");
                }
              }
            } catch (_0x3e4fbf) {
              if (_0x11c5d7 || !_0xc8f86b.includes(_0x5701b6)) {
                log(" " + _0x5701b6 + " ❌");
              }
            }
          }
         // log("\n✅ External Plugins Installed!");
        }
      } catch (_0x42a37a) {
        log("❌ ERROR INSTALATION PLUGINS ", e);
      }
      await loadPlugins(plugin_dir);
      let _0x1f88ec = 
`${Config.botname} RUNNING
Prefix  : ${Config.HANDLERS}
Plugins : ${events.commands.length}
Mode    : ${Config.WORKTYPE}
Database:  ${(isMongodb ? "MongoDb" : sqldb ? "PostegreSql" : "Asta Default")}
\t_VARS_
Owner: ${Config.ownername}
Sudo: ${global.sudo}
Welcome Msg: ${global.wlcm}
Goodbye Msg: ${global.gdbye}`;
      try {
        const _0x15a383 = require("../lib/scraper");
        let _0x4cf26d = await _0x15a383.syncgit();
        if (_0x4cf26d.total !== 0) {
          _0x1f88ec += "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n";
        }
      } catch (_0x16375a) {}
      global.qr_message = {
        message: "BOT ALREADY CONNECTED!",
        bot_user: _0x89b8f6,
        connection: _0x1f88ec.trim()
      };
      print(_0x1f88ec);
      await _0x5447f8.sendMessage(_0x89b8f6, {
        text: "```" + ("" + _0x1f88ec).trim() + "```"
      }, {
        disappearingMessagesInChat: true,
        ephemeralExpiration: 2,
      });
      global.isStart = true;
      let _0x8207d5 = true;
      let _0x4050fb = {
        bot: _0x5447f8,
        user: _0x89b8f6,
        isAstro: _0x11c5d7,
        isCreator: _0x8207d5
      };
      let _0x215e68 = {
        dbbot: _0x506b6e,
        botNumber: _0x89b8f6,
        isCreator: _0x8207d5,
        isAstro: _0x11c5d7,
        store: store,
        Suhail: _0x4050fb,
        Void: _0x5447f8,
        ..._0x3fd0b3
      };
      events.commands.map(async _0x5325ef => {});
    }
    if (_0x2224a7 === "close") {
      await sleep(5000);
      global.isStart = false;
      global.qr_message = {
        message: "CONNECTION CLOSED WITH BOT!"
      };
      let _0x53c3c8 = new Boom(_0x309893?.error)?.output.statusCode;
      if (_0x53c3c8 === DisconnectReason.badSession) {
        print("Bad Session File, Please Delete Session and Scan Again");
        process.exit(0);
      } else if (_0x53c3c8 === DisconnectReason.connectionClosed) {
        print("Connection closed, reconnecting....");
        syncdb().catch(_0x26a09f => console.log(_0x26a09f));
      } else if (_0x53c3c8 === DisconnectReason.connectionLost) {
        print("Connection Lost from Server, reconnecting...");
        syncdb().catch(_0x5c26ad => console.log(_0x5c26ad));
      } else if (_0x53c3c8 === DisconnectReason.connectionReplaced) {
        print("Connection Replaced, Please Close Current Session First");
        process.exit(1);
      } else if (_0x53c3c8 === DisconnectReason.loggedOut) {
        print("Device Logged Out, Please Scan Again And Run.");
        process.exit(1);
      } else if (_0x53c3c8 === DisconnectReason.restartRequired) {
        print("Restart Required, Restarting...");
        syncdb().catch(_0x25b47d => console.log(_0x25b47d));
      } else if (_0x53c3c8 === DisconnectReason.timedOut) {
        print("Connection TimedOut, Reconnecting...");
        syncdb().catch(_0x2aa067 => console.log(_0x2aa067));
      } else if (_0x53c3c8 === DisconnectReason.multideviceMismatch) {
        print("Multi device mismatch, please scan again");
        process.exit(0);
      } else {
        print("Connection closed with bot. Please put New Session ID again.");
        print(_0x53c3c8);
        process.exit(0);
      }
    }
  });
  _0x5447f8.ev.on("creds.update", _0xd884d9);
  _0x5447f8.lastStatus = async () => {
    console.log("last_status :", last_status);
    return last_status;
  };
  _0x5447f8.decodeJid = _0x409cb8 => {
    if (!_0x409cb8) {
      return _0x409cb8;
    }
    if (/:\d+@/gi.test(_0x409cb8)) {
      let _0x1db567 = jidDecode(_0x409cb8) || {};
      return _0x1db567.user && _0x1db567.server && _0x1db567.user + "@" + _0x1db567.server || _0x409cb8;
    } else {
      return _0x409cb8;
    }
  };
  _0x5447f8.getName = (_0x1e19e3, _0xbde05d = false) => {
    let _0x4bacff = _0x5447f8.decodeJid(_0x1e19e3);
    let _0x3a374f;
    let _0x55d7b0 = "+" + _0x1e19e3.replace("@s.whatsapp.net", "");
    if (_0x4bacff.endsWith("@g.us")) {
      return new Promise(async _0x49f5cb => {
        _0x3a374f = store.contacts[_0x4bacff] || {};
        if (!_0x3a374f.name?.notify && !_0x3a374f.subject) {
          try {
            _0x3a374f = (await _0x5447f8.groupMetadata(_0x4bacff)) || {};
          } catch (_0xd44c16) {}
        }
        _0x49f5cb(_0x3a374f.subject || _0x3a374f.name || _0x55d7b0);
      });
    } else {
      _0x3a374f = _0x4bacff === "0@s.whatsapp.net" ? {
        id: _0x4bacff,
        name: "WhatsApp"
      } : _0x4bacff === _0x5447f8.decodeJid(_0x5447f8.user.id) ? _0x5447f8.user : store.contacts[_0x4bacff] || {};
    }
    if (_0x3a374f.name || _0x3a374f.subject || _0x3a374f.verifiedName) {
      return _0x3a374f.name || _0x3a374f.subject || _0x3a374f.verifiedName || _0x55d7b0;
    } else {
      return userdb.findOne({
        id: _0x4bacff
      }).then(_0x3dcb8d => _0x3dcb8d.name || _0x55d7b0).catch(_0x519084 => {
        _0x55d7b0;
      });
    }
  };
  _0x5447f8.sendContact = async (_0xee3400, _0x1ba9aa, _0x460513 = "", _0x345014 = {}) => {
    let _0x3b10d0 = [];
    for (let _0x11d953 of _0x1ba9aa) {
      _0x3b10d0.push({
        displayName: await _0x5447f8.getName(_0x11d953 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x5447f8.getName(_0x11d953 + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + _0x11d953 + ":" + _0x11d953 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    return _0x5447f8.sendMessage(_0xee3400, {
      contacts: {
        displayName: _0x3b10d0.length + " Contact",
        contacts: _0x3b10d0
      },
      ..._0x345014
    }, {
      quoted: _0x460513
    });
  };
  _0x5447f8.setStatus = _0x4e1b1d => {
    _0x5447f8.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status"
      },
      content: [{
        tag: "status",
        attrs: {},
        content: Buffer.from(_0x4e1b1d, "utf-8")
      }]
    });
    return _0x4e1b1d;
  };
  _0x5447f8.messageId = (_0x344ea2 = 8, _0x4bb246 = "SUHAILMD") => {
    const _0xfe49e6 = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let _0x159a8c = 0; _0x159a8c < _0x344ea2; _0x159a8c++) {
      const _0x1bd7e5 = Math.floor(Math.random() * _0xfe49e6.length);
      _0x4bb246 += _0xfe49e6.charAt(_0x1bd7e5);
    }
    return _0x4bb246;
  };
  _0x5447f8.send5ButImg = async (_0x5014fe, _0x151c1b = "", _0x11eaa9 = "", _0x17f875, _0x1dc3ec = [], _0x148c68, _0x1b833a = {}) => {
    let _0x14c1ba = await prepareWAMessageMedia({
      image: _0x17f875,
      jpegThumbnail: _0x148c68
    }, {
      upload: _0x5447f8.waUploadToServer
    });
    var _0x35e5eb = generateWAMessageFromContent(_0x5014fe, proto.Message.fromObject({
      templateMessage: {
        hydratedTemplate: {
          imageMessage: _0x14c1ba.imageMessage,
          hydratedContentText: _0x151c1b,
          hydratedFooterText: _0x11eaa9,
          hydratedButtons: _0x1dc3ec
        }
      }
    }), _0x1b833a);
    _0x5447f8.relayMessage(_0x5014fe, _0x35e5eb.message, {
      messageId: _0x5447f8.messageId()
    });
  };
  _0x5447f8.sendButtonText = (_0x32e16b, _0x2e98df = [], _0x268834, _0x5dadfc, _0x3d9e07 = "", _0x40db80 = {}) => {
    let _0x2d84f4 = {
      text: _0x268834,
      footer: _0x5dadfc,
      buttons: _0x2e98df,
      headerType: 2,
      ..._0x40db80
    };
    _0x5447f8.sendMessage(_0x32e16b, _0x2d84f4, {
      quoted: _0x3d9e07,
      ..._0x40db80
    });
  };
  _0x5447f8.sendText = (_0x1eade9, _0x1612ea, _0x57885f = "", _0x3dcc13) => _0x5447f8.sendMessage(_0x1eade9, {
    text: _0x1612ea,
    ..._0x3dcc13
  }, {
    quoted: _0x57885f
  });
  _0x5447f8.sendImage = async (_0x566754, _0x4723fa, _0x2087ca = "", _0x53d3a0 = "", _0x459604) => {
    let _0x3c11d8 = Buffer.isBuffer(_0x4723fa) ? _0x4723fa : /^data:.*?\/.*?;base64,/i.test(_0x4723fa) ? Buffer.from(_0x4723fa.split`,`[1], "base64") : /^https?:\/\//.test(_0x4723fa) ? await await getBuffer(_0x4723fa) : fs.existsSync(_0x4723fa) ? fs.readFileSync(_0x4723fa) : Buffer.alloc(0);
    return await _0x5447f8.sendMessage(_0x566754, {
      image: _0x3c11d8,
      caption: _0x2087ca,
      ..._0x459604
    }, {
      quoted: _0x53d3a0
    });
  };
  _0x5447f8.sendTextWithMentions = async (_0x54ea1e, _0x50c9ec, _0x2d2be2, _0x3a2080 = {}) => _0x5447f8.sendMessage(_0x54ea1e, {
    text: _0x50c9ec,
    contextInfo: {
      mentionedJid: [..._0x50c9ec.matchAll(/@(\d{0,16})/g)].map(_0x1fe586 => _0x1fe586[1] + "@s.whatsapp.net")
    },
    ..._0x3a2080
  }, {
    quoted: _0x2d2be2
  });
  _0x5447f8.sendImageAsSticker = async (_0x3532c5, _0x527062, _0x3309ab = {}) => {
    let _0x262184;
    if (_0x3309ab && (_0x3309ab.packname || _0x3309ab.author)) {
      _0x262184 = await writeExifImg(_0x527062, _0x3309ab);
    } else {
      _0x262184 = await imageToWebp(_0x527062);
    }
    await _0x5447f8.sendMessage(_0x3532c5, {
      sticker: {
        url: _0x262184
      },
      ..._0x3309ab
    }, _0x3309ab);
  };
  _0x5447f8.sendVideoAsSticker = async (_0x10f5a6, _0x5c502f, _0x587709 = {}) => {
    let _0x4c63fd;
    if (_0x587709 && (_0x587709.packname || _0x587709.author)) {
      _0x4c63fd = await writeExifVid(_0x5c502f, _0x587709);
    } else {
      _0x4c63fd = await videoToWebp(_0x5c502f);
    }
    await _0x5447f8.sendMessage(_0x10f5a6, {
      sticker: {
        url: _0x4c63fd
      },
      ..._0x587709
    }, _0x587709);
  };
  _0x5447f8.sendMedia = async (_0x2c82eb, _0x3b6f24, _0x1faf03 = "", _0x265eee = "", _0x43689c = "", _0x5f0c19 = {}) => {
    let _0x2a5dbc = await _0x5447f8.getFile(_0x3b6f24, true);
    let {
      mime: _0x50c8d4,
      ext: _0x249af9,
      res: _0x1d60dd,
      data: _0x59ee9f,
      filename: _0x4ec529
    } = _0x2a5dbc;
    if (_0x1d60dd && _0x1d60dd.status !== 200 || file.length <= 65536) {
      try {
        throw {
          json: JSON.parse(file.toString())
        };
      } catch (_0x376081) {
        if (_0x376081.json) {
          throw _0x376081.json;
        }
      }
    }
    let _0x4e01e4 = "";
    let _0x1f052f = _0x50c8d4;
    let _0xc5f634 = _0x4ec529;
    if (_0x5f0c19.asDocument) {
      _0x4e01e4 = "document";
    }
    if (_0x5f0c19.asSticker || /webp/.test(_0x50c8d4)) {
      let {
        writeExif: _0x171797
      } = require("./exif");
      let _0x39fa7e = {
        mimetype: _0x50c8d4,
        data: _0x59ee9f
      };
      _0xc5f634 = await _0x171797(_0x39fa7e, {
        packname: _0x5f0c19.packname ? _0x5f0c19.packname : Config.packname,
        author: _0x5f0c19.author ? _0x5f0c19.author : Config.author,
        categories: _0x5f0c19.categories ? _0x5f0c19.categories : []
      });
      await fs.promises.unlink(_0x4ec529);
      _0x4e01e4 = "sticker";
      _0x1f052f = "image/webp";
    } else if (/image/.test(_0x50c8d4)) {
      _0x4e01e4 = "image";
    } else if (/video/.test(_0x50c8d4)) {
      _0x4e01e4 = "video";
    } else if (/audio/.test(_0x50c8d4)) {
      _0x4e01e4 = "audio";
    } else {
      _0x4e01e4 = "document";
    }
    await _0x5447f8.sendMessage(_0x2c82eb, {
      [_0x4e01e4]: {
        url: _0xc5f634
      },
      caption: _0x265eee,
      mimetype: _0x1f052f,
      fileName: _0x1faf03,
      ..._0x5f0c19
    }, {
      quoted: _0x43689c,
      ..._0x5f0c19
    });
    return fs.promises.unlink(_0xc5f634);
  };
  _0x5447f8.downloadAndSaveMediaMessage = async (_0x23227c, _0x37efaf = "null", _0x3e6b5f = false, _0x2c905e = true) => {
    let _0x51c141 = _0x23227c.msg ? _0x23227c.msg : _0x23227c;
    let _0x1a1e90 = _0x51c141.mimetype || "";
    let _0x5b8c9d = _0x23227c.mtype ? _0x23227c.mtype.split(/Message/gi)[0] : _0x51c141.mtype ? _0x51c141.mtype.split(/Message/gi)[0] : _0x1a1e90.split("/")[0];
    const _0x240a0 = await downloadContentFromMessage(_0x51c141, _0x5b8c9d);
    let _0x39cba4 = Buffer.from([]);
    for await (const _0x2ced92 of _0x240a0) {
      _0x39cba4 = Buffer.concat([_0x39cba4, _0x2ced92]);
    }
    if (_0x3e6b5f) {
      return _0x39cba4;
    }
    let _0x2a7e6b = await FileType.fromBuffer(_0x39cba4);
    let _0x470182 = "./temp/" + _0x37efaf + "." + _0x2a7e6b.ext;
    fs.writeFileSync(_0x470182, _0x39cba4);
    return _0x470182;
  };
  _0x5447f8.forward = async (_0x5d4b74, _0x57d8d8, _0x15b451, _0x16bd40, _0x25719f = true) => {
    try {
      let _0x1c08a7 = _0x57d8d8.mtype;
      let _0x248698 = {};
      console.log("Forward function Called and Type is : ", _0x1c08a7);
      if (_0x1c08a7 == "conversation") {
        _0x248698 = {
          text: _0x57d8d8.text,
          contextInfo: _0x15b451
        };
        for (let _0x696424 of parsedJid(_0x5d4b74)) {
          await _0x5447f8.sendMessage(_0x696424, _0x248698, {
            quoted: _0x16bd40,
            messageId: _0x5447f8.messageId()
          });
        }
        return;
      }
      const _0x28c0f4 = _0x44514a => {
        return "" + Math.floor(Math.random() * 10000) + _0x44514a;
      };
      let _0x3020cf = _0x57d8d8.msg ? _0x57d8d8.msg : _0x57d8d8;
      let _0x2d258b = (_0x57d8d8.msg || _0x57d8d8).mimetype || "";
      let _0x4ee4d0 = _0x57d8d8.mtype ? _0x57d8d8.mtype.replace(/Message/gi, "") : _0x2d258b.split("/")[0];
      const _0x20002c = await downloadContentFromMessage(_0x3020cf, _0x4ee4d0);
      let _0x2572bb = Buffer.from([]);
      for await (const _0x3df13e of _0x20002c) {
        _0x2572bb = Buffer.concat([_0x2572bb, _0x3df13e]);
      }
      let _0x20c880 = await FileType.fromBuffer(_0x2572bb);
      let _0x68b951 = await _0x28c0f4(_0x20c880.ext);
      let _0x5ab377 = "./temp/" + _0x68b951;
      fs.writeFileSync(_0x5ab377, _0x2572bb);
      if (_0x1c08a7 == "videoMessage") {
        _0x248698 = {
          video: fs.readFileSync(_0x5ab377),
          mimetype: _0x57d8d8.mimetype,
          caption: _0x57d8d8.text,
          contextInfo: _0x15b451
        };
      } else if (_0x1c08a7 == "imageMessage") {
        _0x248698 = {
          image: fs.readFileSync(_0x5ab377),
          mimetype: _0x57d8d8.mimetype,
          caption: _0x57d8d8.text,
          contextInfo: _0x15b451
        };
      } else if (_0x1c08a7 == "audioMessage") {
        _0x248698 = {
          audio: fs.readFileSync(_0x5ab377),
          mimetype: _0x57d8d8.mimetype,
          seconds: 200001355,
          ptt: true,
          contextInfo: _0x15b451
        };
      } else if (_0x1c08a7 == "documentWithCaptionMessage" || _0x20c880 == "documentMessage") {
        _0x248698 = {
          document: fs.readFileSync(_0x5ab377),
          mimetype: _0x57d8d8.mimetype,
          caption: _0x57d8d8.text,
          contextInfo: _0x15b451
        };
      } else {
        fs.unlink(_0x5ab377, _0x230b04 => {
          if (_0x230b04) {
            console.error("Error deleting file:", _0x230b04);
          } else {
            console.log("File deleted successfully");
          }
        });
      }
      for (let _0x29179c of parsedJid(_0x5d4b74)) {
        try {
          await _0x5447f8.sendMessage(_0x29179c, _0x248698, {
            quoted: _0x16bd40,
            messageId: _0x5447f8.messageId()
          });
        } catch (_0x3b1e17) {}
      }
      return fs.unlink(_0x5ab377, _0x83aea9 => {
        if (_0x83aea9) {
          console.error("Error deleting file:", _0x83aea9);
        } else {
          console.log("File deleted successfully");
        }
      });
    } catch (_0x5a3250) {
      console.log(_0x5a3250);
    }
  };
  _0x5447f8.downloadMediaMessage = async _0x3d0953 => {
    let _0x1d3ed1 = _0x3d0953.msg ? _0x3d0953.msg : _0x3d0953;
    let _0x50cf98 = (_0x3d0953.msg || _0x3d0953).mimetype || "";
    let _0x557d4d = _0x3d0953.mtype ? _0x3d0953.mtype.replace(/Message/gi, "") : _0x50cf98.split("/")[0];
    const _0x350f41 = await downloadContentFromMessage(_0x1d3ed1, _0x557d4d);
    let _0x2ab63b = Buffer.from([]);
    for await (const _0x2ff5ef of _0x350f41) {
      _0x2ab63b = Buffer.concat([_0x2ab63b, _0x2ff5ef]);
    }
    return _0x2ab63b;
  };
  _0x5447f8.forwardOrBroadCast2 = async (_0x2565bd, _0x442828, _0x145dd4 = {}, _0x23baf9 = "") => {
    try {
      let _0x1068f6 = _0x442828.mtype;
      if (_0x1068f6 === "videoMessage" && _0x23baf9 === "ptv") {
        _0x442828 = {
          ptvMessage: {
            ..._0x442828.msg
          }
        };
      }
      let _0x28966a = {
        ..._0x145dd4,
        contextInfo: {
          ...(_0x145dd4.contextInfo ? _0x145dd4.contextInfo : {}),
          ...(_0x145dd4.linkPreview ? {
            linkPreview: {
              ..._0x145dd4.linkPreview
            }
          } : {}),
          ...(_0x145dd4.quoted && _0x145dd4.quoted.message ? {
            quotedMessage: {
              ...(_0x145dd4.quoted?.message || {})
            }
          } : {})
        }
      };
      var _0x14aec7 = _0x442828.message ? _0x442828.message : _0x442828;
      let _0x5909f8 = _0x1068f6 ? _0x1068f6 : Object.keys(_0x14aec7)[0];
      _0x14aec7 = {
        ..._0x28966a,
        ..._0x14aec7
      };
      const _0x5d8b14 = await generateWAMessageFromContent(_0x2565bd, _0x14aec7, _0x145dd4 ? {
        ...(_0x5909f8 == "conversation" ? {
          extendedTextMessage: {
            text: _0x14aec7[_0x5909f8]
          }
        } : _0x14aec7[_0x5909f8]),
        ..._0x28966a,
        contextInfo: {
          ...(_0x14aec7[_0x5909f8]?.contextInfo || {}),
          ..._0x28966a.contextInfo
        }
      } : {});
      await _0x5447f8.relayMessage(_0x2565bd, _0x5d8b14.message, {
        messageId: _0x5447f8.messageId()
      });
      return _0x5d8b14;
    } catch {}
  };
  _0x5447f8.forwardOrBroadCast = async (_0x189e5c, _0x54c0d9, _0x18e0cf = {}, _0x348d78 = "") => {
    try {
      if (!_0x18e0cf || typeof _0x18e0cf !== "object") {
        _0x18e0cf = {};
      }
      _0x18e0cf.messageId = _0x18e0cf.messageId || _0x5447f8.messageId();
      var _0x3ce975 = _0x54c0d9.message ? _0x54c0d9.message : _0x54c0d9;
      let _0x103f18 = _0x3ce975.mtype ? _0x3ce975.mtype : Object.keys(_0x3ce975)[0];
      if (_0x103f18 === "videoMessage" && _0x348d78 === "ptv") {
        _0x3ce975 = {
          ptvMessage: {
            ..._0x54c0d9.msg
          }
        };
        _0x103f18 = "ptvMessage";
      } else if (_0x103f18 == "conversation") {
        _0x3ce975 = {
          extendedTextMessage: {
            text: _0x3ce975[_0x103f18]
          }
        };
        _0x103f18 = "extendedTextMessage";
      }
      _0x3ce975[_0x103f18] = {
        ...(_0x3ce975[_0x103f18] || _0x3ce975),
        ..._0x18e0cf
      };
      const _0xf31bf3 = generateWAMessageFromContent(_0x189e5c, _0x3ce975, _0x18e0cf);
      await _0x5447f8.relayMessage(_0x189e5c, _0xf31bf3.message, {
        messageId: _0x18e0cf.messageId
      });
      return _0xf31bf3;
    } catch (_0x534571) {
      console.log(_0x534571);
    }
  };
  _0x5447f8.forwardMessage = _0x5447f8.forwardOrBroadCast;
  _0x5447f8.copyNForward = async (_0x333b21, _0x4d04c0, _0x3c23fa = false, _0x4ed2c0 = {}) => {
    try {
      let _0x92cb9d;
      if (_0x4ed2c0.readViewOnce) {
        _0x4d04c0.message = _0x4d04c0.message && _0x4d04c0.message.ephemeralMessage && _0x4d04c0.message.ephemeralMessage.message ? _0x4d04c0.message.ephemeralMessage.message : _0x4d04c0.message || undefined;
        _0x92cb9d = Object.keys(_0x4d04c0.message.viewOnceMessage.message)[0];
        delete (_0x4d04c0.message && _0x4d04c0.message.ignore ? _0x4d04c0.message.ignore : _0x4d04c0.message || undefined);
        delete _0x4d04c0.message.viewOnceMessage.message[_0x92cb9d].viewOnce;
        _0x4d04c0.message = {
          ..._0x4d04c0.message.viewOnceMessage.message
        };
      }
      let _0x3481f4 = Object.keys(_0x4d04c0.message)[0];
      try {
        _0x4d04c0.key.fromMe = true;
      } catch (_0x40e615) {}
      let _0x536b6b = await generateForwardMessageContent(_0x4d04c0, _0x3c23fa);
      let _0x521a63 = Object.keys(_0x536b6b)[0];
      let _0x41c842 = {};
      if (_0x3481f4 != "conversation") {
        _0x41c842 = _0x4d04c0.message[_0x3481f4].contextInfo;
      }
      _0x536b6b[_0x521a63].contextInfo = {
        ..._0x41c842,
        ..._0x536b6b[_0x521a63].contextInfo
      };
      const _0x3f7fe3 = await generateWAMessageFromContent(_0x333b21, _0x536b6b, _0x4ed2c0);
      await _0x5447f8.relayMessage(_0x333b21, _0x3f7fe3.message, {
        messageId: _0x5447f8.messageId()
      });
      return _0x3f7fe3;
    } catch (_0x529a5c) {
      console.log(_0x529a5c);
    }
  };
  _0x5447f8.sendFileUrl = async (_0x245d2a, _0x1ddbcd, _0xd689ee = "", _0x2cf1f3 = "", _0x5b2d56 = {
    author: "Asta-Md"
  }, _0x49581e = "") => {
    try {
      let _0x113f67 = await axios.head(_0x1ddbcd);
      let _0x141f60 = _0x113f67?.headers["content-type"] || "";
      let _0x4397c4 = _0x141f60.split("/")[0];
      let _0x5a6000 = false;
      if (_0x141f60.split("/")[1] === "gif" || _0x49581e === "gif") {
        _0x5a6000 = {
          video: {
            url: _0x1ddbcd
          },
          caption: _0xd689ee,
          gifPlayback: true,
          ..._0x5b2d56
        };
      } else if (_0x141f60.split("/")[1] === "webp" || _0x49581e === "sticker") {
        _0x5a6000 = {
          sticker: {
            url: _0x1ddbcd
          },
          ..._0x5b2d56
        };
      } else if (_0x4397c4 === "image" || _0x49581e === "image") {
        _0x5a6000 = {
          image: {
            url: _0x1ddbcd
          },
          caption: _0xd689ee,
          ..._0x5b2d56,
          mimetype: "image/jpeg"
        };
      } else if (_0x4397c4 === "video" || _0x49581e === "video") {
        _0x5a6000 = {
          video: {
            url: _0x1ddbcd
          },
          caption: _0xd689ee,
          mimetype: "video/mp4",
          ..._0x5b2d56
        };
      } else if (_0x4397c4 === "audio" || _0x49581e === "audio") {
        _0x5a6000 = {
          audio: {
            url: _0x1ddbcd
          },
          mimetype: "audio/mpeg",
          ..._0x5b2d56
        };
      } else if (_0x141f60 == "application/pdf") {
        _0x5a6000 = {
          document: {
            url: _0x1ddbcd
          },
          mimetype: "application/pdf",
          caption: _0xd689ee,
          ..._0x5b2d56
        };
      }
      if (_0x5a6000) {
        try {
          return await _0x5447f8.sendMessage(_0x245d2a, _0x5a6000, {
            quoted: _0x2cf1f3
          });
        } catch {}
        ;
      }
      try {
        var _0x13eb84 = _0x113f67?.headers["content-disposition"]?.split("=\"")[1]?.split("\"")[0] || "file";
        if (_0x13eb84) {
          const _0xf91516 = [".jpg", ".jpeg", ".png"];
          const _0x127659 = [".mp4", ".avi", ".mov", ".mkv", ".gif", ".m4v", ".webp"];
          var _0x2a9237 = _0x13eb84.substring(_0x13eb84.lastIndexOf("."))?.toLowerCase() || "nillll";
          var _0x2af72a;
          if (_0xf91516.includes(_0x2a9237)) {
            _0x2af72a = "image/jpeg";
          } else if (_0x127659.includes(_0x2a9237)) {
            _0x2af72a = "video/mp4";
          }
          _0x141f60 = _0x2af72a ? _0x2af72a : _0x141f60;
          let _0x47de2c = {
            fileName: _0x13eb84 || "file",
            caption: _0xd689ee,
            ..._0x5b2d56,
            mimetype: _0x141f60
          };
          return await _0x5447f8.sendMessage(_0x245d2a, {
            document: {
              url: _0x1ddbcd
            },
            ..._0x47de2c
          }, {
            quoted: _0x2cf1f3
          });
        }
      } catch (_0x48a20b) {}
      let _0x37e1b0 = {
        fileName: _0x13eb84 ? _0x13eb84 : "file",
        caption: _0xd689ee,
        ..._0x5b2d56,
        mimetype: _0x141f60
      };
      return await _0x5447f8.sendMessage(_0x245d2a, {
        document: {
          url: _0x1ddbcd
        },
        ..._0x37e1b0
      }, {
        quoted: _0x2cf1f3
      });
    } catch (_0x48b298) {
      console.log("Erorr in client.sendFileUrl() : ", _0x48b298);
      throw _0x48b298;
    }
  };
  _0x5447f8.sendFromUrl = _0x5447f8.sendFileUrl;
  const _0x29f5c5 = {};
  let _0x51034c = [];
  _0x5447f8.sendUi = async (_0x264148, _0x4d42ab = {}, _0x541cb3 = "", _0x2e5e1f = "", _0x3bceba = "", _0x171bcf = false) => {
    let _0x28cdb7 = {};
    try {
      const _0x466fc2 = /(https?:\/\/\S+)/gi;
      const _0x5a103b = [".jpg", ".jpeg", ".png"];
      const _0x43d733 = [".mp4", ".avi", ".mov", ".mkv", ".gif", ".m4v", ".webp"];
      let _0x17e93e = video = false;
      if (!_0x51034c || !_0x51034c[0]) {
        _0x51034c = global.userImages ? global.userImages.split(",") : [await botpic()];
        _0x51034c = _0x51034c.filter(_0xa03b8f => _0xa03b8f.trim() !== "");
      }
      let _0x311f88 = _0x2e5e1f && _0x3bceba ? _0x3bceba : _0x51034c[Math.floor(Math.random() * _0x51034c.length)];
      if (!_0x29f5c5[_0x311f88]) {
        const _0x280f66 = _0x311f88.substring(_0x311f88.lastIndexOf(".")).toLowerCase();
        if (_0x5a103b.includes(_0x280f66)) {
          _0x17e93e = true;
        }
        if (_0x43d733.includes(_0x280f66)) {
          video = true;
        }
        _0x29f5c5[_0x311f88] = {
          image: _0x17e93e,
          video: video
        };
      }
      _0x541cb3 = _0x541cb3 && _0x541cb3.quoted?.key ? _0x541cb3.quoted : _0x541cb3 || "";
      let _0x237b02;
      if ((_0x171bcf && _0x3bceba && global.style > 0 || !_0x3bceba) && /text|txt|nothing|smd|asta/.test(global.userImages) || _0x2e5e1f == "text") {
        _0x237b02 = {
          text: _0x4d42ab.text || _0x4d42ab.caption,
          ..._0x4d42ab
        };
      } else if (_0x2e5e1f == "image" || _0x29f5c5[_0x311f88].image) {
        _0x237b02 = {
          image: {
            url: _0x311f88
          },
          ..._0x4d42ab,
          mimetype: "image/jpeg"
        };
      } else if (_0x2e5e1f == "video" || _0x29f5c5[_0x311f88].video) {
        _0x237b02 = {
          video: {
            url: _0x311f88
          },
          ..._0x4d42ab,
          mimetype: "video/mp4",
          gifPlayback: true,
          height: 274,
          width: 540
        };
      }
      const _0x28e991 = _0x171bcf && _0x3bceba && global.style > 0 ? await smdBuffer(_0x3bceba) : null;
      _0x28cdb7 = {
        ...(await _0x5447f8.contextInfo(Config.botname, _0x541cb3 && _0x541cb3.senderName ? _0x541cb3.senderName : Config.ownername, _0x28e991))
      };
      if (_0x237b02) {
        return await _0x5447f8.sendMessage(_0x264148, {
          contextInfo: _0x28cdb7,
          ..._0x237b02
        }, {
          quoted: _0x541cb3
        });
      }
    } catch (_0x44bee5) {
      console.log("erorr in userImages() : ", _0x44bee5);
    }
    try {
      return await _0x5447f8.sendMessage(_0x264148, {
        image: {
          url: await botpic()
        },
        contextInfo: _0x28cdb7,
        ..._0x4d42ab
      });
    } catch {
      return _0x5447f8.sendMessage(_0x264148, {
        text: _0x4d42ab.text || _0x4d42ab.caption,
        ..._0x4d42ab
      });
    }
  };
  _0x5447f8.contextInfo = async (_0x180918 = Config.botname, _0x4f8a10 = Config.ownername, _0x567995 = log0, _0x281a1c = 1, _0x3e314a = gurl, _0x1d19d2 = false) => {
    try {
      let _0x2ab518 = _0x1d19d2 ? _0x1d19d2 : global.style;
      if (_0x2ab518 >= 5) {
        return {
          externalAdReply: {
            title: _0x180918,
            body: _0x4f8a10,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            thumbnail: _0x567995 || log0,
            mediaType: _0x281a1c || 1,
            mediaUrl: _0x3e314a,
            sourceUrl: _0x3e314a
          }
        };
      } else if (_0x2ab518 == 4) {
        return {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title: _0x180918,
            body: _0x4f8a10,
            renderLargerThumbnail: true,
            thumbnail: _0x567995 || log0,
            mediaType: _0x281a1c || 1,
            mediaUrl: _0x3e314a,
            sourceUrl: _0x3e314a
          }
        };
      } else if (_0x2ab518 == 3) {
        return {
          externalAdReply: {
            title: _0x180918,
            body: _0x4f8a10,
            renderLargerThumbnail: true,
            thumbnail: _0x567995 || log0,
            mediaType: _0x281a1c || 1,
            mediaUrl: _0x3e314a,
            sourceUrl: _0x3e314a
          }
        };
      } else if (_0x2ab518 == 2) {
        return {
          externalAdReply: {
            title: _0x180918,
            body: _0x4f8a10,
            thumbnail: _0x567995 || log0,
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: _0x3e314a,
            sourceUrl: _0x3e314a
          }
        };
      } else if (_0x2ab518 == 1) {
        return {
          externalAdReply: {
            title: _0x180918,
            body: _0x4f8a10,
            thumbnail: _0x567995 || log0,
            mediaType: 1,
            mediaUrl: _0x3e314a,
            sourceUrl: _0x3e314a
          }
        };
      } else {
        return {};
      }
    } catch (_0x4205a1) {
      console.log("error in client.contextInfo() : ", _0x4205a1);
      return {};
    }
  };
  _0x5447f8.cMod = (_0x2fa8b5, _0x4510a5, _0xaaa44a = "", _0x2f32eb = _0x5447f8.user.id, _0x18c25b = {}) => {
    let _0x449b96 = Object.keys(_0x4510a5.message)[0];
    let _0x255a68 = _0x449b96 === "ephemeralMessage";
    if (_0x255a68) {
      _0x449b96 = Object.keys(_0x4510a5.message.ephemeralMessage.message)[0];
    }
    let _0x16c7ec = _0x255a68 ? _0x4510a5.message.ephemeralMessage.message : _0x4510a5.message;
    let _0x3de922 = _0x16c7ec[_0x449b96];
    if (typeof _0x3de922 === "string") {
      _0x16c7ec[_0x449b96] = _0xaaa44a || _0x3de922;
    } else if (_0x3de922.caption) {
      _0x3de922.caption = _0xaaa44a || _0x3de922.caption;
    } else if (_0x3de922.text) {
      _0x3de922.text = _0xaaa44a || _0x3de922.text;
    }
    if (typeof _0x3de922 !== "string") {
      _0x16c7ec[_0x449b96] = {
        ..._0x3de922,
        ..._0x18c25b
      };
    }
    if (_0x4510a5.key.participant) {
      _0x2f32eb = _0x4510a5.key.participant = _0x2f32eb || _0x4510a5.key.participant;
    } else if (_0x4510a5.key.participant) {
      _0x2f32eb = _0x4510a5.key.participant = _0x2f32eb || _0x4510a5.key.participant;
    }
    if (_0x4510a5.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x2f32eb = _0x2f32eb || _0x4510a5.key.remoteJid;
    } else if (_0x4510a5.key.remoteJid.includes("@broadcast")) {
      _0x2f32eb = _0x2f32eb || _0x4510a5.key.remoteJid;
    }
    _0x4510a5.key.remoteJid = _0x2fa8b5;
    _0x4510a5.key.fromMe = _0x2f32eb === _0x5447f8.user.id;
    return proto.WebMessageInfo.fromObject(_0x4510a5);
  };
  _0x5447f8.getFile = async (_0x45942b, _0x80d77a) => {
    let _0x5bc7b0;
    let _0x53270f = Buffer.isBuffer(_0x45942b) ? _0x45942b : /^data:.*?\/.*?;base64,/i.test(_0x45942b) ? Buffer.from(_0x45942b.split`,`[1], "base64") : /^https?:\/\//.test(_0x45942b) ? await (_0x5bc7b0 = await getBuffer(_0x45942b)) : fs.existsSync(_0x45942b) ? (_0x29fbe1 = _0x45942b, fs.readFileSync(_0x45942b)) : typeof _0x45942b === "string" ? _0x45942b : Buffer.alloc(0);
    let _0x33ec46 = (await FileType.fromBuffer(_0x53270f)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    let _0x29fbe1 = "./temp/null." + _0x33ec46.ext;
    if (_0x53270f && _0x80d77a) {
      fs.promises.writeFile(_0x29fbe1, _0x53270f);
    }
    return {
      res: _0x5bc7b0,
      filename: _0x29fbe1,
      size: getSizeMedia(_0x53270f),
      ..._0x33ec46,
      data: _0x53270f
    };
  };
  _0x5447f8.sendFile = async (_0x17db4b, _0x2edb21, _0x347170, _0x1d60b2 = {
    quoted: ""
  }, _0x2b562b = {}) => {
    let _0x4285a2 = await _0x5447f8.getFile(_0x2edb21, true);
    let {
      filename: _0x479138,
      size: _0x527df9,
      ext: _0x14fc23,
      mime: _0x212f6e,
      data: _0xee90de
    } = _0x4285a2;
    let _0x8dc65e = "";
    let _0xb6648a = _0x212f6e;
    let _0x1bcc52 = _0x479138;
    if (_0x2b562b.asDocument) {
      _0x8dc65e = "document";
    }
    if (_0x2b562b.asSticker || /webp/.test(_0x212f6e)) {
      let {
        writeExif: _0x2fa405
      } = require("./exif.js");
      let _0x3083ef = {
        mimetype: _0x212f6e,
        data: _0xee90de
      };
      _0x1bcc52 = await _0x2fa405(_0x3083ef, {
        packname: Config.packname,
        author: Config.packname,
        categories: _0x2b562b.categories ? _0x2b562b.categories : []
      });
      await fs.promises.unlink(_0x479138);
      _0x8dc65e = "sticker";
      _0xb6648a = "image/webp";
    } else if (/image/.test(_0x212f6e)) {
      _0x8dc65e = "image";
    } else if (/video/.test(_0x212f6e)) {
      _0x8dc65e = "video";
    } else if (/audio/.test(_0x212f6e)) {
      _0x8dc65e = "audio";
    } else {
      _0x8dc65e = "document";
    }
    await _0x5447f8.sendMessage(_0x17db4b, {
      [_0x8dc65e]: {
        url: _0x1bcc52
      },
      mimetype: _0xb6648a,
      fileName: _0x347170,
      ..._0x2b562b
    }, {
      quoted: _0x1d60b2 && _0x1d60b2.quoted ? _0x1d60b2.quoted : _0x1d60b2,
      ..._0x1d60b2
    });
    return fs.promises.unlink(_0x1bcc52);
  };
  _0x5447f8.fakeMessage = async (_0x141089 = "text", _0x5364cd = {}, _0x371309 = "➬ Suhail SER", _0x1a0d91 = {}) => {
    const _0x22700d = [777, 0, 100, 500, 1000, 999, 2021];
    let _0x17661c = {
      id: _0x5447f8.messageId(),
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      ..._0x5364cd
    };
    let _0x4f03f6 = {};
    if (_0x141089 == "text" || _0x141089 == "conservation" || !_0x141089) {
      _0x4f03f6 = {
        conversation: _0x371309
      };
    } else if (_0x141089 == "order") {
      _0x4f03f6 = {
        orderMessage: {
          itemCount: _0x22700d[Math.floor(_0x22700d.length * Math.random())],
          status: 1,
          surface: 1,
          message: "❏ " + _0x371309,
          orderTitle: "live",
          sellerJid: "2348039607375@s.whatsapp.net"
        }
      };
    } else if (_0x141089 == "contact") {
      _0x4f03f6 = {
        contactMessage: {
          displayName: "" + _0x371309,
          jpegThumbnail: log0
        }
      };
    } else if (_0x141089 == "image") {
      _0x4f03f6 = {
        imageMessage: {
          jpegThumbnail: log0,
          caption: _0x371309
        }
      };
    } else if (_0x141089 == "video") {
      _0x4f03f6 = {
        videoMessage: {
          url: log0,
          caption: _0x371309,
          mimetype: "video/mp4",
          fileLength: "4757228",
          seconds: 44
        }
      };
    }
    return {
      key: {
        ..._0x17661c
      },
      message: {
        ..._0x4f03f6,
        ..._0x1a0d91
      }
    };
  };
  _0x5447f8.parseMention = async _0x3d4032 => {
    return [..._0x3d4032.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x9e355e => _0x9e355e[1] + "@s.whatsapp.net");
  };
  app.get("/chat", (_0x52c0af, _0x203368) => {
    let _0x5785a4 = _0x52c0af.query.chat || _0x52c0af.query.jid || _0x5447f8.user.id || _0x5447f8.user.m || "";
    if (["all", "msg", "total"].includes(_0x5785a4)) {
      return _0x203368.json({
        chat: _0x5785a4,
        conversation: JSON.stringify(store, null, 2)
      });
    }
    if (!_0x5785a4) {
      return _0x203368.json({
        ERROR: "Chat Id parameter missing"
      });
    }
    _0x5785a4 = _0x5447f8.decodeJid(_0x5785a4);
    const _0x382b66 = (store.messages[_0x5785a4] || store.messages[_0x5785a4 + "@s.whatsapp.net"] || store.messages[_0x5785a4 + "@g.us"])?.array || false;
    if (!_0x382b66) {
      return _0x203368.json({
        chat: _0x5785a4,
        Message: "no messages found in given chat id!"
      });
    }
    _0x203368.json({
      chat: _0x5785a4,
      conversation: JSON.stringify(_0x382b66, null, 2)
    });
  });
  _0x5447f8.dl_size = global.dl_size || 200;
  _0x5447f8.awaitForMessage = async (_0x3f601c = {}) => {
    return new Promise((_0x42ef72, _0x15fbb5) => {
      if (typeof _0x3f601c !== "object") {
        _0x15fbb5(new Error("Options must be an object"));
      }
      if (typeof _0x3f601c.sender !== "string") {
        _0x15fbb5(new Error("Sender must be a string"));
      }
      if (typeof _0x3f601c.remoteJid !== "string") {
        _0x15fbb5(new Error("ChatJid must be a string"));
      }
      if (_0x3f601c.timeout && typeof _0x3f601c.timeout !== "number") {
        _0x15fbb5(new Error("Timeout must be a number"));
      }
      if (_0x3f601c.filter && typeof _0x3f601c.filter !== "function") {
        _0x15fbb5(new Error("Filter must be a function"));
      }
      const _0x358393 = _0x3f601c?.timeout || undefined;
      const _0x1919d8 = _0x3f601c?.filter || (() => true);
      let _0x112e7d = undefined;
      let _0x4fedac = _0x54d8e0 => {
        let {
          type: _0x4bad66,
          messages: _0x5bf6f0
        } = _0x54d8e0;
        if (_0x4bad66 == "notify") {
          for (let _0xa0c0c6 of _0x5bf6f0) {
            const _0x3f5f64 = _0xa0c0c6.key.fromMe;
            const _0x43fd3f = _0xa0c0c6.key.remoteJid;
            const _0x36ea4b = _0x43fd3f.endsWith("@g.us");
            const _0x27529b = _0x43fd3f == "status@broadcast";
            const _0x5447cd = _0x5447f8.decodeJid(_0x3f5f64 ? _0x5447f8.user.id : _0x36ea4b || _0x27529b ? _0xa0c0c6.key.participant : _0x43fd3f);
            if (_0x5447cd == _0x3f601c.sender && _0x43fd3f == _0x3f601c.remoteJid && _0x1919d8(_0xa0c0c6)) {
              _0x5447f8.ev.off("messages.upsert", _0x4fedac);
              clearTimeout(_0x112e7d);
              _0x42ef72(_0xa0c0c6);
            }
          }
        }
      };
      _0x5447f8.ev.on("messages.upsert", _0x4fedac);
      if (_0x358393) {
        _0x112e7d = setTimeout(() => {
          _0x5447f8.ev.off("messages.upsert", _0x4fedac);
          _0x15fbb5(new Error("Timeout"));
        }, _0x358393);
      }
    });
  };
  return _0x5447f8;
}
let asciii = "\n\n                " + Config.VERSION + "\n  𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧\n\n";
console.log(asciii);
global.lib_dir = __dirname;
global.toBool = (_0x5f0b1e, _0x23fe95 = false) => /true|yes|ok|act|sure|enable|smd|asta/gi.test(_0x5f0b1e) ? _0x23fe95 ? true : "true" : _0x23fe95 ? false : "false";
async function loadPlugins(_0x31a795) {
  try {
    fs.readdirSync(_0x31a795).forEach(_0x340012 => {
      const _0x4c0490 = path.join(_0x31a795, _0x340012);
      if (fs.statSync(_0x4c0490).isDirectory()) {
        loadPlugins(_0x4c0490);
      } else if (_0x340012.includes("_Baileys") || _0x340012.includes("_MSGS")) {
        log("\nRENTBOTT's DATA DETECTED!", "\nUSER NUMBER:", _0x340012.replace("_MSGS", "").replace("_Baileys", ""), "\n\n");
      } else if ([".js", ".smd", ".pak", ".asta"].includes(path.extname(_0x340012).toLowerCase())) {
        try {
          require(_0x4c0490);
        } catch (_0xf3f8e5) {
          log("\n❌There's an error in '" + _0x340012 + "' file ❌ \n\n", _0xf3f8e5);
        }
      }
    });
  } catch (_0x26483d) {}
}
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bouncing Text - Astropeda</title>
<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  .bounce-text {
    font-size: 48px;
    font-family: Arial, sans-serif;
    animation: bounce 1s infinite alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
</style>
</head>
<body>

<div class="bounce-text">David_Cyril</div>

</body>
</html>

`;
app.set("json spaces", 3);
app.get("/", (_0x529972, _0x4e4868) => {
  try {
    let _0x37572c = path.join(__dirname, "assets", "index.html");
    if (fs.existsSync(_0x37572c)) {
      _0x4e4868.sendFile(_0x37572c);
    } else {
      _0x4e4868.type("html").send(html);
    }
  } catch (_0x572663) {}
});
app.get("/asta", (_0x2e8c1a, _0x30322c) => _0x30322c.type("html").send(html));
app.get("/var", (_0x28b337, _0x3df94d) => _0x3df94d.json({
  ...Config,
  SESSION_ID: SESSION_ID
}));
app.get("/qr", async (_0x1e3486, _0x4fc8d3) => {
  try {
    if (!global.qr) {
      throw "QR NOT FETCHED!";
    }
    let _0x44460c = require("qrcode");
    _0x4fc8d3.end(await _0x44460c.toBuffer(global.qr));
  } catch (_0x117fdf) {
    console.log("/qr PATH_URL Error : ", _0x117fdf);
    if (!_0x4fc8d3.headersSent) {
      _0x4fc8d3.send({
        error: _0x117fdf.message || _0x117fdf,
        reason: global.qr_message || "SERVER DOWN!",
        uptime: runtime(process.uptime())
      });
    }
  }
});
app.get("/logo", (_0x1b3a62, _0x3b28c1) => _0x3b28c1.end(global.log0));
let quickport = global.port ? global.port : Math.floor(Math.random() * 9000) + 1000;
app.listen(quickport, () => console.log("Asta On  http://localhost:" + quickport + "/  "));
global.print = console.log;
global.log = console.log;
global.Debug = {
  ...console
};
if (!/true|log|smd|error|logerror|err|all|info|loginfo|warn|logwarn/.test(global.MsgsInLog)) {
  console.log = () => {};
}
if (!/error|logerror|err|all/.test(global.MsgsInLog)) {
  console.error = () => {};
}
if (!/info|loginfo|all/.test(global.MsgsInLog)) {
  console.info = () => {};
}
if (!/warn|logwarn|all/.test(global.MsgsInLog)) {
  console.warn = () => {};
}
let Appurls = [];
if (global.appUrl && /http/gi.test(global.appUrl)) {
  Appurls = [global.appUrl, "http://localhost:" + quickport];
}
if (process.env.REPL_ID) {
  Appurls.push("https://" + process.env.REPL_ID + ".pike.replit.dev");
  Appurls.push("https://" + process.env.REPL_ID + "." + (process.env.REPLIT_CLUSTER || "pike") + ".replit.dev");
}
if (process.env.REPL_SLUG) {
  Appurls.push("https://" + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co");
}
if (process.env.PROJECT_DOMAIN) {
  Appurls.push("https://" + process.env.PROJECT_DOMAIN + ".glitch.me");
}
if (process.env.CODESPACE_NAME) {
  Appurls.push("https://" + process.env.CODESPACE_NAME + ".github.dev");
}
function keepAlive() {
  setInterval(() => {
    for (let _0x215660 = 0; _0x215660 < Appurls.length; _0x215660++) {
      const _0x16cd6e = Appurls[_0x215660];
      if (/(\/\/|\.)undefined\./.test(_0x16cd6e)) {
        continue;
      }
      try {
        axios.get(_0x16cd6e);
      } catch (_0x231f6e) {}
      try {
        fetch(_0x16cd6e);
      } catch (_0x5e546e) {}
    }
  }, 300000);
}
if (Array.isArray(Appurls)) {
  keepAlive();
}
async function MakeSession(_0x3344dc = SESSION_ID, _0xe1ef27 = __dirname + baileys, _0x1532e1 = false) {
  let _0x148358 = ("" + _0x3344dc).replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/gi, "").replace(/^SESSION_ID_\d{2}_\d{2}_\d{2}_\d{2}_/gi, "").replace(/^ASTA_\d{2}_\d{2}_\d{2}_\d{2}_/gi, "").replace(/Asta;;;/gi, "").replace(/Astro;;;/gi, "").replace(/Astropeda;;;/gi, "").trim();
  function _0x279b36(_0x321840) {
    return Buffer.from(_0x321840, "base64").toString("utf-8");
  }
  function _0x28b1d6(_0x26cc18, _0xb70989) {
    return new Promise((_0x464e85, _0x3502fc) => {
      fs.readFile(_0xb70989, "utf8", (_0x33dd62, _0x53263f) => {
        if (_0x33dd62) {
          _0x464e85(false);
        } else {
          _0x464e85(_0x53263f.includes(_0x26cc18));
        }
      });
    });
  }
  const _0x406ff0 = "/DeeCeeXxx/";
  const _0x40fbb4 = toBool(_0x1532e1 || global.IS_ASTRO || process.env.IS_ASTRO, true) || (await _0x28b1d6(_0x406ff0, "./Dockerfile"));
  if (_0x40fbb4) {
    AstroOfficial = "yes";
    if (!fs.existsSync(_0xe1ef27)) {
      fs.mkdirSync(_0xe1ef27);
    }
    if (_0x148358 && _0x148358.startsWith("PId_")) {
      try {
        var _0x1cbff8 = _0x148358.replace("PId_", "");
        const _0xe768ac = require("pastebin-js");
        const _0x483269 = new _0xe768ac("ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO");
        const _0x3fcebf = await _0x483269.getPaste(_0x1cbff8);
        console.log({
          pasteId: _0x1cbff8
        });
        _0x148358 = _0x3fcebf && typeof _0x3fcebf == "string" ? Buffer.from(_0x3fcebf, "utf-8").toString("base64") : _0x148358;
      } catch (_0x32c583) {
        console.log("CAN'T GET SESSION FROM PASTE ID\nERROR : ", _0x32c583);
      }
    }
    if (_0x148358 && /guru/gi.test(_0x148358) && _0x148358.length < 30) {
      try {
        let _0xd0a37e = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const {
          data: _0x3ee158
        } = await axios.get(_0xd0a37e + _0x148358);
        const _0x536cf8 = _0x3ee158 && _0x3ee158.content ? _0x3ee158.content : false;
        var _0x395cbc = _0x536cf8 ? _0x279b36(_0x536cf8) : {};
        const _0x5f2a33 = JSON.parse(_0x395cbc);
        fs.writeFileSync(_0xe1ef27 + "creds.json", JSON.stringify(_0x5f2a33, null, 2));
        log("\nCredentials saved successfully.");
      } catch (_0xc1bebf) {
        log("EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR: ", _0xc1bebf);
      }
    } else if (_0x148358 && _0x148358.length > 3 && _0x148358.length < 20) {
      try {
        let {
          data: _0x449628
        } = await axios.get("https://paste.c-net.org/" + _0x148358);
        fs.writeFileSync(_0xe1ef27 + "creds.json", _0x279b36(_0x449628), "utf8");
      } catch (_0x11ae89) {
        log("\nERROR GETTING SESSION_ID FROM PASTE SERVER\n \nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n");
      }
    } else if (_0x148358) {
      try {
        log("Checking Session ID!");
        var _0x395cbc = _0x279b36(_0x148358);
        const _0x4b3148 = JSON.parse(_0x395cbc);
        if (_0x4b3148["creds.json"]) {
          for (const _0x1d12b5 in _0x4b3148) {
            try {
              fs.writeFileSync(_0xe1ef27 + _0x1d12b5, typeof _0x4b3148[_0x1d12b5] == "string" ? _0x4b3148[_0x1d12b5] : JSON.stringify(_0x4b3148[_0x1d12b5], null, 2));
            } catch (_0x1d9fd6) {}
          }
        } else {
          fs.writeFileSync(_0xe1ef27 + "creds.json", JSON.stringify(_0x4b3148, null, 2));
        }
        log("\nSESSION SAVED!");
      } catch (_0x5cc9c4) {
        log("INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR : ", _0x5cc9c4);
      }
    }
  } else {
    AstroOfficial = false;
    log("\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com" + _0x406ff0 + "Asta-Md\n");
    process.exit(0);
  }
}
async function main() {
  if (mongodb && mongodb.includes("mongodb")) {
    try {
      isMongodb = await connnectMongo();
    } catch {}
  }
  if (!global.isMongodb && global.DATABASE_URL && !["false", "null"].includes(global.DATABASE_URL)) {
    try {
      global.sqldb = await connnectpg();
    } catch {}
  }
}
module.exports = {
  init: MakeSession,
  connect: syncdb,
  logger: global.Debug,
  DATABASE: {
    sync: main
  }
};