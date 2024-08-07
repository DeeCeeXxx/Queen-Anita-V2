const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs-extra");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const Jimp = require("jimp");
const fetch = require("node-fetch");
const {
  getBuffer,
  fetchJson,
  runtime,
  isUrl,
  GIFBufferToVideoBuffer
} = require("./serialized");
let sides = "*";
const {
  tlang,
  TelegraPh,
  dare,
  truth,
  random_question
} = require("./scraper");
const {
  bot_
} = require("./schemes");
const Config = require("../config.js");
let caption = Config.caption || "";
const {
  Innertube,
  UniversalCache,
  Utils
} = require("youtubei.js");
const {
  existsSync,
  mkdirSync,
  createWriteStream
} = require("fs");
let yt = {};
yt.getInfo = async (_0x3c2895, _0x49e43c = {}) => {
  try {
    if (!global.AstroOfficial) {
      return;
    }
    const _0x3f4543 = await Innertube.create({
      cache: new UniversalCache(false),
      generate_session_locally: true
    });
    let _0x538e69 = await _0x3f4543.getInfo(_0x3c2895, _0x49e43c);
    let _0x1cb8d4 = [];
    for (let _0x21836a = 0; _0x21836a < _0x538e69.streaming_data.formats.length; _0x21836a++) {
      await _0x1cb8d4.push(_0x538e69.streaming_data.formats[_0x21836a].quality_label);
    }
    let _0x3ea204 = _0x1cb8d4.includes("360p") ? "360p" : "best";
    let _0x3296e8 = {
      status: true,
      title: _0x538e69.basic_info.title,
      id: _0x538e69.basic_info.id,
      quality: _0x1cb8d4,
      pref_Quality: _0x3ea204,
      duration: _0x538e69.basic_info.duration,
      description: _0x538e69.basic_info.short_description,
      keywords: _0x538e69.basic_info.keywords,
      thumbnail: _0x538e69.basic_info.thumbnail[0].url,
      author: _0x538e69.basic_info.author,
      views: _0x538e69.basic_info.view_count,
      likes: _0x538e69.basic_info.like_count,
      category: _0x538e69.basic_info.category,
      channel: _0x538e69.basic_info.channel,
      basic_info: _0x538e69
    };
    return _0x3296e8;
  } catch (_0x39b819) {
    console.log("./lib/asta/yt.getInfo()\n", _0x39b819.message);
    return {
      status: false
    };
  }
};
yt.download = async (_0x1ea0cb, _0x5c75ae = {
  type: "video",
  quality: "best",
  format: "mp4"
}) => {
  try {
    if (!global.AstroOfficial) {
      return;
    }
    const _0x47c128 = await Innertube.create({
      cache: new UniversalCache(false),
      generate_session_locally: true
    });
    let _0x2d2cde = _0x5c75ae.type ? _0x5c75ae.type : "video";
    let _0x12faa2 = _0x2d2cde === "audio" ? "best" : _0x5c75ae.quality ? _0x5c75ae.quality : "best";
    let _0x52ce78 = _0x5c75ae.format ? _0x5c75ae.format : "mp4";
    const _0xdd017a = await _0x47c128.download(_0x1ea0cb, {
      type: _0x2d2cde,
      quality: _0x12faa2,
      format: _0x52ce78
    });
    const _0x150898 = "./temp";
    if (!existsSync(_0x150898)) {
      mkdirSync(_0x150898);
    }
    let _0x35b4d2 = _0x2d2cde === "video" ? "mp4" : "m4a";
    let _0x3991fc = _0x150898 + "/Asta-Md " + _0x1ea0cb + "." + _0x35b4d2;
    var _0x1dcf9 = createWriteStream(_0x3991fc);
    for await (const _0x32868e of Utils.streamToIterable(_0xdd017a)) {
      _0x1dcf9.write(_0x32868e);
    }
    return _0x3991fc;
  } catch (_0x26244e) {
    console.log("./lib/asta/yt.dowanload()\n", _0x26244e.message);
    return false;
  }
};
async function sendAnimeReaction(_0x5c448a, _0x46face = "punch", _0x50961f = "", _0x426154 = "") {
  try {
    var _0x1b5aac = await fetchJson("https://api.waifu.pics/sfw/" + _0x46face);
    const _0x55f096 = await axios.get(_0x1b5aac.url, {
      responseType: "arraybuffer"
    });
    const _0x43f098 = Buffer.from(_0x55f096.data, "utf-8");
    let _0x5b40dd = _0x5c448a.mentionedJid ? _0x5c448a.mentionedJid[0] : _0x5c448a.quoted ? _0x5c448a.quoted.sender : false;
    let _0x21964f = await GIFBufferToVideoBuffer(_0x43f098);
    let _0x51f2b9 = _0x5b40dd ? sides + "@" + _0x5c448a.sender.split("@")[0] + " " + _0x50961f + " @" + _0x5b40dd.split("@")[0] + sides : sides + "@" + _0x5c448a.sender.split("@")[0] + " " + _0x426154 + sides;
    if (_0x5b40dd) {
      return await _0x5c448a.bot.sendMessage(_0x5c448a.chat, {
        video: _0x21964f,
        gifPlayback: true,
        mentions: [_0x5b40dd, _0x5c448a.sender],
        caption: _0x51f2b9
      }, {
        quoted: _0x5c448a,
        messageId: _0x5c448a.bot.messageId()
      });
    } else {
      return await _0x5c448a.bot.sendMessage(_0x5c448a.chat, {
        video: _0x21964f,
        gifPlayback: true,
        mentions: [_0x5c448a.sender],
        caption: _0x51f2b9
      }, {
        quoted: _0x5c448a,
        messageId: _0x5c448a.bot.messageId()
      });
    }
  } catch (_0x1b7c90) {
    return await _0x5c448a.error(_0x1b7c90 + "\nERROR AT : /lib/asta.js/sendAnimeReaction()\n\ncommand: " + _0x46face);
  }
}
async function sendGImages(_0x4a189d, _0x4eee7c, _0x205b7c = caption, _0x1caf0d = "") {
  try {
    let _0x5a7b69 = require("async-g-i-s");
    let _0x13a23e = await _0x5a7b69(_0x4eee7c);
    let _0x56c98f = _0x13a23e[Math.floor(Math.random() * _0x13a23e.length)].url;
    let _0xd91af3 = {
      image: {
        url: _0x56c98f
      },
      caption: _0x205b7c,
      contextInfo: {
        externalAdReply: {
          title: tlang().title,
          body: _0x1caf0d,
          thumbnail: log0,
          mediaType: 1,
          mediaUrl: gurl,
          sourceUrl: gurl
        }
      }
    };
    return await _0x4a189d.bot.sendMessage(_0x4a189d.chat, _0xd91af3, {
      quoted: _0x4a189d,
      messageId: _0x4a189d.bot.messageId()
    });
  } catch (_0x36d8e7) {
    await _0x4a189d.error(_0x36d8e7);
    return console.log("./lib/asta.js/sendGImages()\n", _0x36d8e7);
  }
}
async function AudioToBlackVideo(_0x2bac4d, _0x568b06) {
  try {
    try {
      fs.unlinkSync(_0x568b06);
    } catch (_0x1ca356) {}
    const _0x4b7070 = "ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 " + _0x2bac4d;
    const {
      stdout: _0x356d80
    } = await exec(_0x4b7070);
    const _0x4ffac3 = parseFloat(_0x356d80);
    let _0x222ae6 = "./temp/blackScreen.mp4";
    try {
      fs.unlinkSync(_0x222ae6);
    } catch (_0x526371) {}
    const _0x32b4ee = "ffmpeg -f lavfi -i color=c=black:s=1280x720:d=" + _0x4ffac3 + " -vf \"format=yuv420p\" " + _0x222ae6;
    await exec(_0x32b4ee);
    const _0x332e3c = "ffmpeg -i " + _0x222ae6 + " -i " + _0x2bac4d + " -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 " + _0x568b06;
    await exec(_0x332e3c);
    console.log("Audio converted to black screen video successfully!");
    return {
      result: true
    };
  } catch (_0x4971e7) {
    console.error("./lib/Aviator.js/AudioToBlackVideo()\n", _0x4971e7);
    return {
      result: false
    };
  }
}
async function textToLogoGenerator(_0x371218, _0x4f590d = "", _0x13a1c2 = "", _0x11339e = "ser", _0x2091c1 = "textpro", _0x1bd248 = true) {
  let _0x19543f = {};
  let _0x1d4467 = {};
  let _0x44b219 = /1|ephoto|ephoto360/gi.test(_0x2091c1) ? "https://ephoto360.com/" + _0x4f590d + ".html" : /2|potoxy|photooxy/gi.test(_0x2091c1) ? "https://photooxy.com/" + _0x4f590d + ".html" : /3|enphoto|en360/gi.test(_0x2091c1) ? "https://en.ephoto360.com/" + _0x4f590d + ".html" : "https://textpro.me/" + _0x4f590d + ".html";
  try {
    const {
      textpro: _0x4cf419
    } = require("mumaker");
    if (_0x13a1c2) {
      _0x19543f = await _0x4cf419(_0x44b219, [_0x13a1c2, _0x11339e]);
    }
    let _0x339d4a = {} || {
      ...(await _0x371218.bot.contextInfo("ᴛᴇxᴛ ᴛᴏ ʟᴏɢᴏ", "Hello " + _0x371218.senderName))
    };
    return await _0x371218.bot.sendMessage(_0x371218.jid, {
      image: {
        url: _0x19543f.image
      },
      caption: caption,
      contextInfo: _0x339d4a
    }, {
      messageId: _0x371218.bot.messageId()
    });
  } catch (_0x4845d6) {
    try {
      let _0x4a65d4 = global.api_smd + ("/api/maker?text1=" + _0x13a1c2 + "&text2=" + _0x11339e + "&url=" + _0x44b219);
      _0x1d4467 = await fetchJson(_0x4a65d4);
      if ((!_0x1d4467 || !_0x1d4467.status || !_0x1d4467.img) && _0x1bd248) {
        return _0x371218.error(_0x4845d6 + "\nWebinfo:" + (_0x1d4467.img || _0x1d4467) + "\n\nfileName: textToLogoGenerator->s.js", _0x4845d6);
      }
      await _0x371218.bot.sendMessage(_0x371218.jid, {
        image: {
          url: _0x1d4467.img
        }
      }, {
        messageId: _0x371218.bot.messageId()
      });
    } catch (_0x549deb) {
      let _0xa9ebc6 = _0x19543f && _0x19543f.image ? _0x19543f.image : _0x1d4467 && _0x1d4467.img ? _0x1d4467.img : false;
      if (_0x1bd248) {
        _0x371218.error(_0x4845d6 + "\n\nAPI Error : " + _0x549deb + "\n\nfileName: textToLogoGenerator->s.js", _0x4845d6, (_0xa9ebc6 ? "Here we go\n\n" + _0xa9ebc6 : "Error, Request Denied!").trim());
      }
    }
  }
}
async function photoEditor(_0x17796b, _0x343213 = "ad", _0xf62b7f = "", _0xe1eb47 = true) {
  let _0xc6e0fc = ["imageMessage"];
  try {
    let _0x430f77 = _0xc6e0fc.includes(_0x17796b.mtype) ? _0x17796b : _0x17796b.reply_message;
    if (!_0x430f77 || !_0xc6e0fc.includes(_0x430f77?.mtype || "null")) {
      return await _0x17796b.send("*_Uhh Dear, Reply to an image_*");
    }
    let _0x2de3c4 = await _0x17796b.bot.downloadAndSaveMediaMessage(_0x430f77);
    let _0x9a4084 = await TelegraPh(_0x2de3c4);
    try {
      fs.unlinkSync(_0x2de3c4);
    } catch (_0x408f7d) {}
    return await _0x17796b.bot.sendMessage(_0x17796b.chat, {
      image: {
        url: "https://api.popcat.xyz/" + _0x343213 + "?image=" + _0x9a4084
      },
      caption: _0xf62b7f
    }, {
      quoted: _0x17796b,
      messageId: _0x17796b.bot.messageId()
    });
  } catch (_0x23ac28) {
    if (_0xe1eb47) {
      await _0x17796b.error(_0x23ac28 + "\n\ncommand: " + _0x343213 + "\nfileName: photoEditor->s.js", _0x23ac28);
    }
  }
}
async function plugins(_0x2e788f, _0x4280e5, _0x76cd91 = "", _0x1c4e25 = "") {
  let _0x3d202e = "";
  try {
    let _0x2d5c25 = (await bot_.findOne({
      id: "bot_" + _0x2e788f.user
    })) || (await bot_.new({
      id: "bot_" + _0x2e788f.user
    }));
    let _0x188cac = _0x2d5c25.plugins;
    if (_0x4280e5.toLowerCase() === "install") {
      let _0x541ac2 = "";
      for (let _0x347ccf of isUrl(_0x76cd91)) {
        var _0x5b08b6 = new URL(_0x347ccf.replace(/[_*]+$/, ""));
        _0x5b08b6 = _0x5b08b6.href.includes("raw") ? _0x5b08b6.href : _0x5b08b6.href + "/raw";
        const {
          data: _0x152c5d
        } = await axios.get(_0x5b08b6);
        let _0x79382e = /pattern: ["'](.*)["'],/g.exec(_0x152c5d) || /cmdname: ["'](.*)["'],/g.exec(_0x152c5d) || /name: ["'](.*)["'],/g.exec(_0x152c5d);
        if (!_0x79382e) {
          _0x3d202e += "*gist not found:* _" + _0x5b08b6 + "_ \n";
          continue;
        }
        let _0x4cfa49 = _0x79382e[1].split(" ")[0] || Math.random().toString(36).slice(-5);
        let _0x147cc6 = _0x4cfa49.replace(/[^A-Za-z]/g, "");
        if (_0x541ac2.includes(_0x147cc6)) {
          continue;
        } else {
          _0x541ac2 = _0x541ac2 + "[\"" + _0x147cc6 + "\"] ";
        }
        if (_0x188cac[_0x147cc6]) {
          _0x3d202e += "*Plugin _'" + _0x147cc6 + "'_ already installed!*\n";
          continue;
        }
        let _0x28bcbb = _0x1c4e25 + "/" + _0x147cc6 + ".smd";
        await fs.writeFileSync(_0x28bcbb, _0x152c5d, "utf8");
        try {
          require(_0x28bcbb);
        } catch (_0x7243e7) {
          fs.unlinkSync(_0x28bcbb);
          _0x3d202e += "*Invalid :* _" + _0x5b08b6 + "_\n ```" + _0x7243e7 + "```\n\n ";
          continue;
        }
        if (!_0x188cac[_0x147cc6]) {
          _0x188cac[_0x147cc6] = _0x5b08b6;
          await bot_.updateOne({
            id: "bot_" + _0x2e788f.user
          }, {
            plugins: _0x188cac
          });
          _0x3d202e += "*Plugin _'" + _0x147cc6 + "'_ Succesfully installed!*\n";
        }
      }
    } else if (_0x4280e5.toLowerCase() === "remove") {
      if (_0x76cd91 === "all") {
        let _0x15e8b6 = "";
        for (const _0x1b15fa in _0x188cac) {
          try {
            fs.unlinkSync(_0x1c4e25 + "/" + _0x1b15fa + ".smd");
            _0x15e8b6 = "" + _0x15e8b6 + _0x1b15fa + ",";
          } catch (_0x5b48c7) {
            console.log("❌ " + _0x1b15fa + " ❌ NOT BE REMOVED", _0x5b48c7);
          }
        }
        await bot_.updateOne({
          id: "bot_" + _0x2e788f.user
        }, {
          plugins: {}
        });
        _0x3d202e = "*External plugins " + (_0x15e8b6 ? _0x15e8b6 : "all") + " removed!!!*";
      } else {
        try {
          if (_0x188cac[_0x76cd91]) {
            try {
              fs.unlinkSync(_0x1c4e25 + "/" + _0x76cd91 + ".smd");
            } catch {}
            delete _0x188cac[_0x76cd91];
            await bot_.updateOne({
              id: "bot_" + _0x2e788f.user
            }, {
              plugins: _0x188cac
            });
            _0x3d202e += "*Plugin _'" + _0x76cd91 + "'_ Succesfully removed!*";
          } else {
            _0x3d202e += "*_plugin not exist in " + Config.botname + "_*";
          }
        } catch (_0x133006) {
          console.log("Error while removing plugins \n ", _0x133006);
        }
      }
    } else if (_0x4280e5.toLowerCase() === "plugins") {
      if (_0x76cd91) {
        _0x3d202e = _0x188cac[_0x76cd91] ? "*_" + _0x76cd91 + ":_* " + _0x188cac[_0x76cd91] : false;
      } else {
        for (const _0x261bce in _0x188cac) {
          _0x3d202e += "*" + (_0x261bce + 1) + ":* " + _0x261bce + " \n*Url:* " + _0x188cac[_0x261bce] + "\n\n";
        }
      }
    }
    return _0x3d202e;
  } catch (_0x4a88ef) {
    console.log("Plugins : ", _0x4a88ef);
    return (_0x3d202e + " \n\nError: " + _0x4a88ef).trim();
  }
}
async function updateProfilePicture(_0x222037, _0x288358, _0x356e2d, _0x42b490 = "pp") {
  try {
    if (_0x42b490 === "pp" || _0x42b490 === "gpp") {
      let _0x25ce47 = await _0x222037.bot.downloadAndSaveMediaMessage(_0x356e2d);
      await _0x222037.bot.updateProfilePicture(_0x288358, {
        url: _0x25ce47
      });
    } else {
      async function _0x2e4ae1(_0x2fed3e) {
        const _0x451493 = await Jimp.read(_0x2fed3e);
        const _0x160ea5 = _0x451493.getWidth();
        const _0x130adc = _0x451493.getHeight();
        const _0xa030b1 = _0x451493.crop(0, 0, _0x160ea5, _0x130adc);
        return {
          img: await _0xa030b1.scaleToFit(324, 720).getBufferAsync(Jimp.MIME_JPEG),
          preview: await _0xa030b1.normalize().getBufferAsync(Jimp.MIME_JPEG)
        };
      }
      try {
        const _0x44a93d = await _0x356e2d.download();
        const {
          query: _0xb7b2b0
        } = _0x222037.bot;
        const {
          preview: _0x27ac1a
        } = await _0x2e4ae1(_0x44a93d);
        await _0xb7b2b0({
          tag: "iq",
          attrs: {
            to: _0x288358,
            type: "set",
            xmlns: "w:profile:picture"
          },
          content: [{
            tag: "picture",
            attrs: {
              type: "image"
            },
            content: _0x27ac1a
          }]
        });
      } catch (_0x242917) {
        let _0x463b86 = await _0x222037.bot.downloadAndSaveMediaMessage(_0x356e2d);
        await _0x222037.bot.updateProfilePicture(_0x288358, {
          url: _0x463b86
        });
        return await _0x222037.error(_0x242917 + " \n\ncommand: update pp", _0x242917, false);
      }
    }
    return await _0x222037.reply("*_Profile icon updated Succesfully!!_*");
  } catch (_0x24cb69) {
    return await _0x222037.error(_0x24cb69 + " \n\ncommand: " + (_0x42b490 ? _0x42b490 : "pp"), _0x24cb69);
  }
}
async function forwardMessage(_0x56dbe1, _0x5eaf75, _0x561de2 = "") {
  let _0x48c6f4 = _0x5eaf75.quoted.mtype;
  let _0x3af25e;
  if (_0x48c6f4 === "videoMessage" && _0x561de2 === "ptv") {
    _0x3af25e = {
      ptvMessage: {
        ..._0x5eaf75.quoted
      }
    };
  } else if (_0x48c6f4 === "videoMessage") {
    _0x3af25e = {
      videoMessage: {
        ..._0x5eaf75.quoted
      }
    };
  } else if (_0x48c6f4 === "imageMessage") {
    _0x3af25e = {
      imageMessage: {
        ..._0x5eaf75.quoted
      }
    };
  } else if (_0x48c6f4 === "audioMessage") {
    _0x3af25e = {
      audioMessage: {
        ..._0x5eaf75.quoted
      }
    };
  } else if (_0x48c6f4 === "documentMessage") {
    _0x3af25e = {
      documentMessage: {
        ..._0x5eaf75.quoted
      }
    };
  } else if (_0x48c6f4 === "conversation" || _0x48c6f4 === "extendedTextMessage") {
    return await _0x5eaf75.send(_0x5eaf75.quoted.text, {}, "", _0x5eaf75, _0x56dbe1);
  }
  if (_0x3af25e) {
    try {
      await Suhail.bot.relayMessage(_0x56dbe1, _0x3af25e, {
        messageId: _0x5eaf75.key.id
      });
    } catch (_0x27920e) {
      console.log("Error in " + _0x561de2 + "-cmd in forwardMessage \n", _0x27920e);
      if (_0x561de2 === "ptv" || _0x561de2 === "save") {
        await _0x5eaf75.error(_0x27920e);
      }
    }
  }
}
async function generateSticker(_0x43a996, _0x5c979b, _0x116cae = {
  pack: Config.packname,
  author: Config.author
}, _0x5b1252 = true) {
  try {
    const {
      Sticker: _0x92981e,
      createSticker: _0x1a1a97,
      StickerTypes: _0x5f17c1
    } = require("wa-sticker-formatter");
    let _0x54c67c = new _0x92981e(_0x5c979b, {
      ..._0x116cae
    });
    return await _0x43a996.bot.sendMessage(_0x43a996.chat, {
      sticker: await _0x54c67c.toBuffer()
    }, {
      quoted: _0x43a996,
      messageId: _0x43a996.bot.messageId()
    });
  } catch (_0x32ee71) {
    if (_0x5b1252) {
      await _0x43a996.error(_0x32ee71 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
async function getRandom(_0xf0461b = ".jpg", _0x48110d = 10000) {
  return "" + Math.floor(Math.random() * _0x48110d) + _0xf0461b;
}
async function randomeFunfacts(_0x1be35e) {
  try {
    if (_0x1be35e === "question") {
      return await random_question();
    } else if (_0x1be35e === "truth") {
      return await truth();
    } else if (_0x1be35e === "dare") {
      return await dare();
    } else if (_0x1be35e === "joke") {
      const _0x4fe671 = await (await fetch("https://official-joke-api.appspot.com/random_joke")).json();
      return "*Joke :* " + _0x4fe671.setup + "\n*Punchline:*  " + _0x4fe671.punchline;
    } else if (_0x1be35e === "joke2") {
      const _0x1cc76d = await (await fetch("https://v2.jokeapi.dev/joke/Any?type=single")).json();
      return "*joke :* " + _0x1cc76d.joke;
    } else if (_0x1be35e === "fact") {
      const {
        data: _0x202058
      } = await axios.get("https://nekos.life/api/v2/fact");
      return "*Fact:* " + _0x202058.fact;
    } else if (_0x1be35e === "quotes") {
      const {
        data: _0x6d4253
      } = await axios.get("https://favqs.com/api/qotd");
      return "╔════◇\n║ *🎗️Content:* " + _0x6d4253.quote.body + "\n║ *👤Author:* " + _0x6d4253.quote.author + "\n║\n╚════════════╝";
    }
  } catch (_0x1147af) {
    msg.error(_0x1147af);
    console.log("./lib/asta.js/randomeFunfacts()\n", _0x1147af);
  }
}
async function audioEditor(_0x1ef339, _0x567a0f = "bass", _0x730356 = "") {
  if (!_0x1ef339.quoted) {
    return await _0x1ef339.send("*_Uhh Dear, Reply to audio!!!_*");
  }
  let _0x1e4c20 = _0x1ef339.quoted.mtype || _0x1ef339.mtype;
  if (!/audio/.test(_0x1e4c20)) {
    return await _0x1ef339.send("*_Reply to the audio you want to change with_*", {}, "", _0x730356);
  }
  try {
    let _0x3497f6 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    if (/bass/.test(_0x567a0f)) {
      _0x3497f6 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    }
    if (/blown/.test(_0x567a0f)) {
      _0x3497f6 = "-af acrusher=.1:1:64:0:log";
    }
    if (/deep/.test(_0x567a0f)) {
      _0x3497f6 = "-af atempo=4/4,asetrate=44500*2/3";
    }
    if (/earrape/.test(_0x567a0f)) {
      _0x3497f6 = "-af volume=12";
    }
    if (/fast/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a \"atempo=1.63,asetrate=44100\"";
    }
    if (/fat/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a \"atempo=1.6,asetrate=22100\"";
    }
    if (/nightcore/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a atempo=1.06,asetrate=44100*1.25";
    }
    if (/reverse/.test(_0x567a0f)) {
      _0x3497f6 = "-filter_complex \"areverse\"";
    }
    if (/robot/.test(_0x567a0f)) {
      _0x3497f6 = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
    }
    if (/slow/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a \"atempo=0.7,asetrate=44100\"";
    }
    if (/smooth/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
    }
    if (/tupai/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a \"atempo=0.5,asetrate=65100\"";
    }
    let _0x25e2bd = await _0x1ef339.bot.downloadAndSaveMediaMessage(_0x1ef339.quoted);
    let _0x58830b = "temp/" + (_0x1ef339.sender.slice(6) + _0x567a0f) + ".mp3";
    exec("ffmpeg -i " + _0x25e2bd + " " + _0x3497f6 + " " + _0x58830b, async (_0x43e1ec, _0x22acc9, _0x3cea68) => {
      try {
        fs.unlinkSync(_0x25e2bd);
      } catch {}
      ;
      if (_0x43e1ec) {
        return _0x1ef339.error(_0x43e1ec);
      } else {
        let _0x11bfca = fs.readFileSync(_0x58830b);
        try {
          fs.unlinkSync(_0x58830b);
        } catch {}
        ;
        var _0xfba2a2 = {
          ...(await _0x1ef339.bot.contextInfo("Hellow " + _0x1ef339.senderName + " 🤍", "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆"))
        };
        return _0x1ef339.bot.sendMessage(_0x1ef339.chat, {
          audio: _0x11bfca,
          mimetype: "audio/mpeg",
          ptt: /ptt|voice/.test(_0x1ef339.test || "") ? true : false,
          contextInfo: _0xfba2a2
        }, {
          quoted: _0x1ef339,
          messageId: _0x1ef339.bot.messageId()
        });
      }
    });
  } catch (_0x48606a) {
    await _0x1ef339.error(_0x48606a + "\n\ncmdName : " + _0x567a0f + "\n");
    return console.log("./lib/asta.js/audioEditor()\n", _0x48606a);
  }
}
async function send(_0x38fbe8, _0x3e1faf, _0x38564b = {
  packname: "",
  author: "Asta-Md"
}, _0x1ab511 = "", _0x207bd9 = "", _0x4627ba = "") {
  if (!_0x3e1faf || !_0x38fbe8) {
    return;
  }
  try {
    let _0x269470 = _0x4627ba ? _0x4627ba : _0x38fbe8.chat;
    return await _0x38fbe8.send(_0x3e1faf, _0x38564b, _0x1ab511, _0x207bd9, _0x269470);
  } catch (_0x164757) {
    console.log("./lib/asta.js/send()\n", _0x164757);
  }
}
async function react(_0x460a9b, _0x131f21, _0x1b76d0 = "") {
  try {
    if (!_0x131f21 || !_0x460a9b) {
      return;
    }
    let _0x153fec = _0x1b76d0 && _0x1b76d0.key ? _0x1b76d0.key : _0x460a9b.key;
    return await _0x460a9b.bot.sendMessage(_0x460a9b.chat, {
      react: {
        text: _0x131f21,
        key: _0x153fec
      }
    }, {
      messageId: _0x460a9b.bot.messageId()
    });
  } catch (_0x102c7a) {
    console.log("./lib/asta.js/react()\n", _0x102c7a);
  }
}
let note = {
  info: "make sure to provide 1st parameter of bot number as {user:botNumber} ,and 2nd as note text|id"
};
note.addnote = async (_0x281c9f, _0x3cf951) => {
  try {
    let _0x8ea776 = (await bot_.findOne({
      id: "bot_" + _0x281c9f.user
    })) || (await bot_.new({
      id: "bot_" + _0x281c9f.user
    }));
    let _0x50de86 = _0x8ea776.notes;
    let _0x890625 = 0;
    while (_0x50de86[_0x890625] !== undefined) {
      _0x890625++;
    }
    _0x50de86[_0x890625] = _0x3cf951;
    await bot_.updateOne({
      id: "bot_" + _0x281c9f.user
    }, {
      notes: _0x50de86
    });
    return {
      status: true,
      id: _0x890625,
      msg: "*New note added at ID: " + _0x890625 + "*"
    };
  } catch (_0x72a11b) {
    console.log("note.addnote ERROR :  ", _0x72a11b);
    return {
      status: false,
      error: _0x72a11b,
      msg: "*Can't add new notes due to error!!*"
    };
  }
};
note.delnote = async (_0x32bcc1, _0x2c426a) => {
  try {
    let _0x3886b5 = (await bot_.findOne({
      id: "bot_" + _0x32bcc1.user
    })) || (await bot_.new({
      id: "bot_" + _0x32bcc1.user
    }));
    let _0x16705b = _0x3886b5.notes;
    let _0x55cb04 = "*Please provide valid note id!*";
    if (_0x16705b[_0x2c426a]) {
      delete _0x16705b[_0x2c426a];
      await bot_.updateOne({
        id: "bot_" + _0x32bcc1.user
      }, {
        notes: _0x16705b
      });
      _0x55cb04 = "*Note with Id:" + _0x2c426a + " deleted successfully!*";
    }
    return {
      status: true,
      msg: _0x55cb04
    };
  } catch (_0x36227d) {
    console.log("note.delnote  ERROR :  ", _0x36227d);
    return {
      status: false,
      error: _0x36227d,
      msg: "*Can't delete notes due to error!!*"
    };
  }
};
note.delallnote = async (_0x3ac5ea, _0x5f348f = "") => {
  try {
    await bot_.updateOne({
      id: "bot_" + _0x3ac5ea.user
    }, {
      notes: {}
    });
    return {
      status: true,
      msg: "*All saved notes deleted from server!*"
    };
  } catch (_0x21ccce) {
    console.log("note.delnote  ERROR :  ", _0x21ccce);
    return {
      status: false,
      error: _0x21ccce,
      msg: "*Request not be proceed, Sorry!*"
    };
  }
};
note.allnotes = async (_0x32ce57, _0x11e475 = "") => {
  try {
    let _0x1ac155 = (await bot_.findOne({
      id: "bot_" + _0x32ce57.user
    })) || (await bot_.new({
      id: "bot_" + _0x32ce57.user
    }));
    let _0x667539 = _0x1ac155.notes;
    let _0x8f5f5e = "*Please provide valid note id!*";
    if (_0x11e475 == "all" || !_0x11e475) {
      let _0x57364e = "";
      for (const _0x532ae3 in _0x667539) {
        _0x57364e += "*NOTE " + _0x532ae3 + ":* " + _0x667539[_0x532ae3] + "\n\n";
      }
      _0x8f5f5e = _0x57364e ? _0x57364e : "*No notes found!*";
    } else if (_0x11e475 && _0x667539[_0x11e475]) {
      _0x8f5f5e = "*Note " + _0x11e475 + ":* " + _0x667539[_0x11e475];
    }
    return {
      status: true,
      msg: _0x8f5f5e
    };
  } catch (_0x162f4d) {
    console.log("note.delnote  ERROR :  ", _0x162f4d);
    return {
      status: false,
      error: _0x162f4d,
      msg: "*Can't delete notes due to error!!*"
    };
  }
};
async function sendWelcome(_0x50ffa3, _0x3417a5 = "", _0x27d774 = "", _0x3fa550 = "", _0x7317df = "msg", _0x495ef9 = false) {
  try {
    if (!global.AstroOfficial) {
      return "Get Ouut";
    }
    if (_0x3417a5) {
      if (_0x50ffa3.isGroup) {
        _0x3417a5 = _0x3417a5.replace(/@gname|&gname/gi, _0x50ffa3.metadata.subject).replace(/@desc|&desc/gi, _0x50ffa3.metadata.desc).replace(/@count|&count/gi, _0x50ffa3.metadata.participants.length);
      }
      let _0x23df3f = _0x3417a5.replace(/@user|&user/gi, "@" + _0x50ffa3.senderNum).replace(/@name|&name/gi, _0x50ffa3.senderName || "_").replace(/@gname|&gname/gi, "").replace(/@desc|&desc/gi, "").replace(/@count|&count/gi, "1").replace(/@pp|&pp|@gpp|&gpp|@context|&context/g, "").replace(/@time|&time/gi, _0x50ffa3.time).replace(/@date|&date/gi, _0x50ffa3.date).replace(/@bot|&bot/gi, "" + Config.botname).replace(/@owner|&owner/gi, "" + Config.ownername).replace(/@caption|&caption/gi, caption).replace(/@gurl|@website|&gurl|&website|@link|&link/gi, gurl).replace(/@myyt|&myyt/gi, "https://github/Astropeda").replace(/@telegram|&telegram/gi, global.telegram || "https://t.me/Astropeda").replace(/@channel|@yt_channel|&channel|&yt_channel/gi, global.YT_PRODUCT || global.YT_CHANNEL || global.YT_PROMOTE || global.YT || "https://github/Astropeda").replace(/@runtime|&runtime|@uptime|&uptime/gi, "" + runtime(process.uptime())).trim();
      try {
        _0x23df3f = _0x23df3f.replace(/@line|&line/gi, (await fetchJson("https://api.popcat.xyz/pickuplines")).pickupline || "");
      } catch (_0x244979) {
        _0x23df3f = _0x23df3f.replace(/@line|&line/gi, "");
      }
      try {
        if (/@quote|&quote/gi.test(_0x23df3f)) {
          let {
            data: _0x4096e3
          } = await axios.get("https://favqs.com/api/qotd");
          if (_0x4096e3 && _0x4096e3.quote) {
            _0x23df3f = _0x23df3f.replace(/@quote|&quote/gi, _0x4096e3.quote.body || "").replace(/@author|&author/gi, _0x4096e3.quote.author || "");
          }
        }
      } catch (_0x131c92) {
        _0x23df3f = _0x23df3f.replace(/@quote|&quote|@author|&author/gi, "");
      }
      if (!_0x7317df || _0x7317df === "msg") {
        try {
          if (typeof _0x3fa550 === "string") {
            _0x3fa550 = _0x3fa550.split(",");
          }
          if (/@user|&user/g.test(_0x3417a5) && !_0x3fa550.includes(_0x50ffa3.sender)) {
            _0x3fa550.push(_0x50ffa3.sender);
          }
        } catch (_0xa27046) {
          console.log("ERROR : ", _0xa27046);
        }
        var _0x3e5cf0 = {
          ...(_0x495ef9 || /@context|&context/g.test(_0x3417a5) ? await _0x50ffa3.bot.contextInfo(Config.botname, _0x50ffa3.pushName) : {}),
          mentionedJid: _0x3fa550
        };
        if (/@pp/g.test(_0x3417a5)) {
          return await _0x50ffa3.send(await _0x50ffa3.getpp(), {
            caption: _0x23df3f,
            mentions: _0x3fa550,
            contextInfo: _0x3e5cf0
          }, "image", _0x27d774);
        } else if (_0x50ffa3.jid && /@gpp/g.test(_0x3417a5)) {
          return await _0x50ffa3.send(await _0x50ffa3.getpp(_0x50ffa3.jid), {
            caption: _0x23df3f,
            mentions: _0x3fa550,
            contextInfo: _0x3e5cf0
          }, "image", _0x27d774);
        } else {
          return await _0x50ffa3.send(_0x23df3f, {
            mentions: _0x3fa550,
            contextInfo: _0x3e5cf0
          }, "asta", _0x27d774);
        }
      } else {
        return _0x23df3f;
      }
    }
  } catch (_0x30453c) {
    console.log("./lib/asta.js/sendWelcome()\n", _0x30453c);
  }
}
async function aitts(_0x33c126, _0x2b48e0 = "", _0x30230a = true) {
  try {
    if (!global.AstroOfficial || global.AstroOfficial !== "yes") {
      return "u bloody, Get out from here!!";
    }
    if (!ELEVENLAB_API_KEY || !ELEVENLAB_API_KEY.length > 8) {
      return _0x33c126.reply("Dear, You Dont Have ELEVENLAB_API_KEY \nCreate ELEVENLAB KEY from below Link \nhttps://elevenlabs.io/\n\nAnd Set it in ELEVENLAB_API_KEY Var\n\n" + caption);
    }
    const _0x1afcdb = ["21m00Tcm4TlvDq8ikWAM", "2EiwWnXFnvU5JabPnv8n", "AZnzlk1XvdvUeBnXmlld", "CYw3kZ02Hs0563khs1Fj", "D38z5RcWu1voky8WS1ja", "EXAVITQu4vr4xnSDxMaL", "ErXwobaYiN019PkySvjV", "GBv7mTt0atIp3Br8iCZE", "IKne3meq5aSn9XLyUdCD", "LcfcDJNUP1GQjkzn1xUU", "MF3mGyEYCl7XYWbV9V6O", "N2lVS1w4EtoT3dr4eOWO", "ODq5zmih8GrVes37Dizd", "SOYHLrjzK2X1ezoPC6cr", "TX3LPaxmHKxFdv7VOQHJ", "ThT5KcBeYPX3keUQqHPh", "TxGEqnHWrfWFTfGW9XjX", "VR6AewLTigWG4xSOukaG", "XB0fDUnXU5powFXDhCwa", "XrExE9yKIg1WjnnlVkGX", "Yko7PKHZNXotIFUBG7I9", "ZQe5CZNOzWyzPSCn5a3c", "Zlb1dXrM653N07WRdFW3", "bVMeCyTHy58xNoL34h3p", "flq6f7yk4E4fJM5XTYuZ", "g5CIjZEefAph4nQFvHAz", "jBpfuIE2acCO8z3wKNLl", "jsCqWAovK2LkecY7zXl4", "oWAxZDx7w5VEj9dCyTzz", "onwK4e9ZLuTAKqWW03F9", "pMsXgVXv3BLzUgSXRplE", "pNInz6obpgDQGcFmaJgB", "piTKgcLEGmPE4e6mEKli", "t0jbNlBVZ17f02VDIeMI", "wViXBPUzp2ZZixB1xQuM", "yoZ06aMxZJJ28mfd3POQ", "z9fAnlkpzviPz146aGWa", "zcAOhNBS3c14rBihAFp1", "zrHiDhphv9ZnVXBqCLjz"];
    const _0x1cf518 = parseInt(aitts_Voice_Id);
    if (!_0x2b48e0 && !_0x33c126.isCreator) {
      return _0x33c126.reply("*Uhh Dear, Please Provide text..!*\n*Example: _.aitts i am " + _0x33c126.pushName + "._*");
    } else if (!_0x2b48e0 && _0x33c126.isCreator || _0x2b48e0 === "setting" || _0x2b48e0 === "info") {
      return _0x33c126.bot.sendMessage(_0x33c126.jid, {
        text: "*Hey " + _0x33c126.pushName + "!.*\n  _Please provide text!_\n  *Example:* _.aitts i am " + _0x33c126.pushName + "._\n\n  *You Currently " + (!isNaN(_0x1cf518) && _0x1cf518 > 0 && _0x1cf518 <= 39 ? "set Voice Id: " + _0x1cf518 + "*\nUpdate" : "not set any Specific Voice*\nAdd Specific") + " Voice: _.addvar AITTS_ID:35/4/32,etc._\n\n\n  *Also use available voices*```\n\n  1: Rachel\n  2: Clyde\n  3: Domi\n  4: Dave\n  5: Fin\n  6: Bella\n  7: Antoni\n  8: Thomas\n  9: Charlie\n  10: Emily\n  11: Elli\n  12: Callum\n  13: Patrick\n  14: Harry\n  15: Liam\n  16: Dorothy\n  17: Josh\n  18: Arnold\n  19: Charlotte\n  20: Matilda\n  21: Matthew\n  22: James\n  23: Joseph\n  24: Jeremy\n  25: Michael\n  26: Ethan\n  27: Gigi\n  28: Freya\n  29: Grace\n  30: Daniel\n  31: Serena\n  32: Adam\n  33: Nicole\n  34: Jessie\n  35: Ryan\n  36: asta\n  37: Glinda\n  38: Giovanni\n  39: Mimi\n  ```" + ("\n\n  *Example:* _.aitts i am " + _0x33c126.pushName + "_:36 \n  *OR:* _.aitts i am " + _0x33c126.pushName + "_:asta     \n\n\n  " + caption).trim()
      }, {
        messageId: _0x33c126.bot.messageId()
      });
    }
    let _0x19e7c5 = _0x2b48e0;
    var _0x30713a = 0 || Math.floor(Math.random() * _0x1afcdb.length);
    let _0x53e63c = false;
    if (!isNaN(_0x1cf518) && _0x1cf518 > 0 && _0x1cf518 < 39) {
      _0x53e63c = true;
      _0x30713a = _0x1cf518;
    }
    if (_0x2b48e0 && _0x2b48e0.includes(":")) {
      let _0x1e4230 = _0x2b48e0.split(":");
      let _0x2d4089 = _0x1e4230[_0x1e4230.length - 1].trim() || "";
      _0x19e7c5 = _0x1e4230.slice(0, _0x1e4230.length - 1).join(":");
      if (_0x2d4089.toLowerCase() === "richel" || _0x2d4089 === "1") {
        _0x30713a = 0;
      } else if (_0x2d4089.toLowerCase() === "clyde" || _0x2d4089 === "2") {
        _0x30713a = 1;
      } else if (_0x2d4089.toLowerCase() === "domi" || _0x2d4089 === "3") {
        _0x30713a = 2;
      } else if (_0x2d4089.toLowerCase() === "dave" || _0x2d4089 === "4") {
        _0x30713a = 3;
      } else if (_0x2d4089.toLowerCase() === "fin" || _0x2d4089 === "5") {
        _0x30713a = 4;
      } else if (_0x2d4089.toLowerCase() === "bella" || _0x2d4089 === "6") {
        _0x30713a = 5;
      } else if (_0x2d4089.toLowerCase() === "antoni" || _0x2d4089 === "7") {
        _0x30713a = 6;
      } else if (_0x2d4089.toLowerCase() === "thomas" || _0x2d4089 === "8") {
        _0x30713a = 7;
      } else if (_0x2d4089.toLowerCase() === "charlie" || _0x2d4089 === "9") {
        _0x30713a = 8;
      } else if (_0x2d4089.toLowerCase() === "emily" || _0x2d4089 === "10") {
        _0x30713a = 9;
      } else if (_0x2d4089.toLowerCase() === "elli" || _0x2d4089 === "11") {
        _0x30713a = 10;
      } else if (_0x2d4089.toLowerCase() === "callum" || _0x2d4089 === "12") {
        _0x30713a = 11;
      } else if (_0x2d4089.toLowerCase() === "patrick" || _0x2d4089 === "13") {
        _0x30713a = 12;
      } else if (_0x2d4089.toLowerCase() === "harry" || _0x2d4089 === "14") {
        _0x30713a = 13;
      } else if (_0x2d4089.toLowerCase() === "liam" || _0x2d4089 === "15") {
        _0x30713a = 14;
      } else if (_0x2d4089.toLowerCase() === "dorothy" || _0x2d4089 === "16") {
        _0x30713a = 15;
      } else if (_0x2d4089.toLowerCase() === "josh" || _0x2d4089 === "17") {
        _0x30713a = 16;
      } else if (_0x2d4089.toLowerCase() === "arnold" || _0x2d4089 === "18") {
        _0x30713a = 17;
      } else if (_0x2d4089.toLowerCase() === "charlotte" || _0x2d4089 === "19") {
        _0x30713a = 18;
      } else if (_0x2d4089.toLowerCase() === "matilda" || _0x2d4089 === "20") {
        _0x30713a = 19;
      } else if (_0x2d4089.toLowerCase() === "matthew" || _0x2d4089 === "21") {
        _0x30713a = 20;
      } else if (_0x2d4089.toLowerCase() === "james" || _0x2d4089 === "22") {
        _0x30713a = 21;
      } else if (_0x2d4089.toLowerCase() === "joseph" || _0x2d4089 === "23") {
        _0x30713a = 22;
      } else if (_0x2d4089.toLowerCase() === "jeremy" || _0x2d4089 === "24") {
        _0x30713a = 23;
      } else if (_0x2d4089.toLowerCase() === "michael" || _0x2d4089 === "25") {
        _0x30713a = 24;
      } else if (_0x2d4089.toLowerCase() === "ethan" || _0x2d4089 === "26") {
        _0x30713a = 25;
      } else if (_0x2d4089.toLowerCase() === "gigi" || _0x2d4089 === "27") {
        _0x30713a = 26;
      } else if (_0x2d4089.toLowerCase() === "freya" || _0x2d4089 === "28") {
        _0x30713a = 27;
      } else if (_0x2d4089.toLowerCase() === "grace" || _0x2d4089 === "29") {
        _0x30713a = 28;
      } else if (_0x2d4089.toLowerCase() === "daniel" || _0x2d4089 === "30") {
        _0x30713a = 29;
      } else if (_0x2d4089.toLowerCase() === "serena" || _0x2d4089 === "31") {
        _0x30713a = 30;
      } else if (_0x2d4089.toLowerCase() === "adam" || _0x2d4089 === "32") {
        _0x30713a = 31;
      } else if (_0x2d4089.toLowerCase() === "nicole" || _0x2d4089 === "33") {
        _0x30713a = 32;
      } else if (_0x2d4089.toLowerCase() === "jessie" || _0x2d4089 === "34") {
        _0x30713a = 33;
      } else if (_0x2d4089.toLowerCase() === "ryan" || _0x2d4089 === "35") {
        _0x30713a = 34;
      } else if (_0x2d4089.toLowerCase() === "asta" || _0x2d4089 === "36") {
        _0x30713a = 35;
      } else if (_0x2d4089.toLowerCase() === "glinda" || _0x2d4089 === "37") {
        _0x30713a = 36;
      } else if (_0x2d4089.toLowerCase() === "giovanni" || _0x2d4089 === "38") {
        _0x30713a = 37;
      } else if (_0x2d4089.toLowerCase() === "mimi" || _0x2d4089 === "39") {
        _0x30713a = 38;
      } else {
        _0x19e7c5 = _0x2b48e0;
        _0x30713a = _0x30713a;
      }
    }
    const _0x36112b = {
      method: "POST",
      url: "https://api.elevenlabs.io/v1/text-to-speech/" + _0x1afcdb[_0x30713a],
      headers: {
        accept: "audio/mpeg",
        "content-type": "application/json",
        "xi-api-key": "" + ELEVENLAB_API_KEY
      },
      data: {
        text: _0x19e7c5
      },
      responseType: "arraybuffer"
    };
    const {
      data: _0x43f81b
    } = await axios.request(_0x36112b);
    if (!_0x43f81b) {
      return await _0x33c126.send("*_Request not be proceed!_*");
    }
    await _0x33c126.sendMessage(_0x33c126.from, {
      audio: _0x43f81b,
      mimetype: "audio/mpeg",
      ptt: true
    }, {
      quoted: _0x33c126,
      messageId: _0x33c126.bot.messageId()
    });
  } catch (_0x54e32c) {
    if (_0x30230a) {
      await _0x33c126.error(_0x54e32c + "\n\ncommand: aitts", _0x54e32c);
    }
  }
}
let setMention = {
  mention: false
};
setMention.status = async (_0x280219, _0x510e3f = false) => {
  try {
    setMention.mention = false;
    let _0x375d7b = (await bot_.findOne({
      id: "bot_" + _0x280219.user
    })) || (await bot_.new({
      id: "bot_" + _0x280219.user
    }));
    let _0x297ec2 = _0x375d7b.mention || {};
    if (_0x510e3f) {
      if (_0x297ec2.status) {
        return await _0x280219.reply("_Mention Already Enabled!_");
      }
      _0x297ec2.status = true;
      await bot_.updateOne({
        id: "bot_" + _0x280219.user
      }, {
        mention: _0x297ec2
      });
      return await _0x280219.reply("_Mention Enabled!_");
    } else {
      if (!_0x297ec2.status) {
        return await _0x280219.reply("_Mention Already Disabled!_");
      }
      _0x297ec2.status = false;
      await bot_.updateOne({
        id: "bot_" + _0x280219.user
      }, {
        mention: _0x297ec2
      });
      return await _0x280219.reply("_Mention Disabled!_");
    }
  } catch (_0x18fc74) {
    _0x280219.error(_0x18fc74 + "\n\nCommand: mention", _0x18fc74, false);
  }
};
setMention.get = async _0x2cdc1a => {
  try {
    let _0x18ceaf = (await bot_.findOne({
      id: "bot_" + _0x2cdc1a.user
    })) || (await bot_.new({
      id: "bot_" + _0x2cdc1a.user
    }));
    let _0x584f1d = _0x18ceaf.mention || {};
    if (_0x584f1d.get) {
      return await _0x2cdc1a.reply("*Status :* " + (_0x584f1d.status ? "ON" : "OFF") + "\nUse on/off/get/test to enable and disable mention\n\n*Mention Info:* " + _0x584f1d.get);
    } else {
      return await _0x2cdc1a.reply("*You did'nt set mention message yet!*\n*please Check: https://github.com/SuhailTechInfo/Suhail-Md/wiki/mention*");
    }
  } catch (_0x4535a8) {
    _0x2cdc1a.error(_0x4535a8 + "\n\nCommand: mention", _0x4535a8, false);
  }
};
setMention.typesArray = _0x59ae98 => {
  try {
    const _0x55b13f = _0x59ae98.split("\n");
    let _0x4656bb = {
      text: []
    };
    let _0x22e9cc = ["gif", "video", "audio", "image", "sticker"];
    let _0xef10c6 = null;
    for (const _0x55bb42 of _0x55b13f) {
      const _0x1cf682 = _0x55bb42.split(" ");
      if (_0x1cf682.length >= 1) {
        const _0x243ab6 = _0x1cf682.findIndex(_0x75df3c => _0x75df3c.startsWith("type/"));
        if (_0x243ab6 !== -1) {
          _0xef10c6 = _0x1cf682[_0x243ab6].slice(5).toLowerCase();
          let _0x192321 = /asta|smd|message|chat/gi.test(_0xef10c6);
          if (!_0x4656bb[_0x192321 ? "asta" : _0xef10c6]) {
            _0x4656bb[_0x192321 ? "asta" : _0xef10c6] = [];
          }
        }
        const _0x26ebaf = _0x1cf682.filter(_0x1fa91c => _0x1fa91c !== "type/" + _0xef10c6 && _0x1fa91c !== "");
        _0xef10c6 = /asta|smd|message|chat/gi.test(_0xef10c6) ? "asta" : _0xef10c6;
        if (_0x26ebaf.length > 0) {
          if (_0x22e9cc.includes(_0xef10c6)) {
            _0x26ebaf.forEach(_0x23a80a => {
              if (/http/gi.test(_0x23a80a)) {
                _0x4656bb[_0xef10c6].push(_0x23a80a);
              }
            });
          } else if (/react/gi.test(_0xef10c6)) {
            _0x4656bb.react.push(..._0x26ebaf);
          } else {
            _0x4656bb[/asta/gi.test(_0xef10c6) ? "asta" : "text"].push(_0x26ebaf.join(" "));
          }
        }
      }
      _0xef10c6 = null;
    }
    return _0x4656bb || {};
  } catch (_0x5bc7dd) {
    console.log("Error in Mention typesArray\n", _0x5bc7dd);
  }
};
setMention.update = async (_0x526d31, _0x1520b5) => {
  try {
    setMention.mention = false;
    let _0x50fd1f = {
      status: true,
      get: _0x1520b5
    };
    try {
      const _0xb9ae11 = _0x1520b5.match(/\{.*\}/);
      if (_0xb9ae11) {
        const _0x557b75 = _0xb9ae11[0];
        const _0x3b2aa4 = JSON.parse(_0x557b75);
        _0x50fd1f.json = _0x3b2aa4;
        _0x1520b5 = _0x1520b5.replace(/\{.*\}/, "");
      }
    } catch (_0x45cb06) {
      console.log("ERROR mention JSON parse", _0x45cb06);
    }
    _0x50fd1f.text = _0x1520b5;
    _0x50fd1f.type = setMention.typesArray(_0x1520b5) || {};
    await bot_.updateOne({
      id: "bot_" + _0x526d31.user
    }, {
      mention: _0x50fd1f
    });
    return await _0x526d31.send("*Mention updated!*", {
      mentios: [_0x526d31.user]
    });
  } catch (_0x1235b9) {
    _0x526d31.error(_0x1235b9 + "\n\nCommand: mention", _0x1235b9, false);
  }
};
setMention.cmd = async (_0x501ec5, _0x2a1c43 = "") => {
  try {
    let _0x22516b = setMention.mention || false;
    if (!_0x22516b) {
      let _0x380929 = (await bot_.findOne({
        id: "bot_" + _0x501ec5.user
      })) || (await bot_.new({
        id: "bot_" + _0x501ec5.user
      }));
      _0x22516b = _0x380929.mention || false;
      setMention.mention = _0x22516b;
    }
    if (global.AstroOfficial !== "yes") {
      return;
    }
    if (_0x2a1c43 === "get" || _0x2a1c43 === "info" || !_0x2a1c43 && _0x22516b.status && _0x22516b.get) {
      setMention.get(_0x501ec5);
    } else if (!_0x2a1c43) {
      _0x501ec5.reply("_Read wiki to set mention message https://github.com/SuhailTechInfo/Suhail-Md/wiki/mention_", {}, "smd");
    } else if (["off", "deact", "disable", "false"].includes(_0x2a1c43.toLowerCase() || _0x2a1c43)) {
      setMention.status(_0x501ec5, false);
    } else if (["on", "act", "enable", "true", "active"].includes(_0x2a1c43.toLowerCase() || _0x2a1c43)) {
      setMention.status(_0x501ec5, true);
    } else if (["check", "test", "me"].includes(_0x2a1c43.toLowerCase() || _0x2a1c43)) {
      setMention.check(_0x501ec5, _0x2a1c43, true);
    } else {
      setMention.update(_0x501ec5, _0x2a1c43);
    }
  } catch (_0x278867) {
    console.log("ERROR IN MENTION CMD \n ", _0x278867);
  }
};
setMention.randome = _0x464e51 => {
  try {
    const _0x47aeca = Object.keys(_0x464e51 || {});
    if (_0x47aeca.length > 1) {
      const _0x2589e6 = _0x47aeca[Math.floor(Math.random() * (_0x47aeca.length - 1)) + 1];
      const _0x3755b9 = _0x464e51[_0x2589e6];
      if (_0x3755b9 && _0x3755b9.length > 0) {
        const _0x281c61 = Math.floor(Math.random() * _0x3755b9.length);
        return {
          type: _0x2589e6,
          url: _0x3755b9[_0x281c61]
        };
      }
    }
    if (_0x464e51 && _0x464e51.text) {
      return {
        url: _0x464e51.text.join(" ") || "",
        type: "smd"
      };
    } else {
      return undefined;
    }
  } catch (_0x21a02a) {
    console.log(_0x21a02a);
  }
};
global.mentionasta = process.env.MENTIONSUHAIL || true;
setMention.check = async (_0x373988, _0x3c756b = "", _0xde3e80 = false) => {
  try {
    const _0x313fc4 = _0xde3e80 || _0x373988.mentionedJid.includes(_0x373988.user) || _0x3c756b.includes("@" + _0x373988.user.split("@")[0]) || global.mentionasta && (_0x373988.mentionedJid.includes("@2348039607375@s.whatsapp.net") || _0x373988.mentionedJid.includes("@2349027862116@s.whatsapp.net") || /@2348039607375|@2349027862116/g.test(_0x3c756b));
    if (_0x313fc4) {
      if (global.AstroOfficial !== "yes") {
        return;
      }
      let _0x5f58a2 = setMention.mention || false;
      if (!_0x5f58a2) {
        let _0x30a79a = (await bot_.findOne({
          id: "bot_" + _0x373988.user
        })) || (await bot_.new({
          id: "bot_" + _0x373988.user
        }));
        _0x5f58a2 = _0x30a79a.mention || false;
        setMention.mention = _0x5f58a2;
      }
      if (typeof _0x5f58a2 !== "object" || !_0x5f58a2 || !_0x5f58a2.status) {
        return;
      }
      const _0x4f16eb = setMention.randome(_0x5f58a2.type);
      if (_0x4f16eb) {
        let _0x4a0e2b = _0x4f16eb.type;
        const _0x445c8c = {};
        if (_0x4f16eb.type === "gif") {
          _0x4a0e2b = "video";
          _0x445c8c = {
            gifPlayback: true
          };
        }
        try {
          const _0x24fb8e = {
            ..._0x5f58a2.json,
            ..._0x445c8c
          };
          if (_0x24fb8e.contextInfo && _0x24fb8e.contextInfo.externalAdReply && _0x24fb8e.contextInfo.externalAdReply.thumbnail) {
            _0x24fb8e.contextInfo.externalAdReply.thumbnail = (await getBuffer(_0x24fb8e.contextInfo.externalAdReply.thumbnail)) || log0;
          }
          await _0x373988.send(_0x4f16eb.url, _0x24fb8e, _0x4a0e2b, _0x373988);
        } catch (_0x37d7fa) {
          console.log("Error Sending ContextInfo in mention ", _0x37d7fa);
          try {
            _0x373988.send(_0x4f16eb.url, {
              ..._0x445c8c
            }, _0x4a0e2b, _0x373988);
          } catch (_0x112900) {}
        }
      }
    }
  } catch (_0x20c76e) {
    console.log("Error in Mention Check\n", _0x20c76e);
  }
};
let mention = setMention;
let setFilter = {
  filter: false
};
setFilter.set = async (_0x7cffc5, _0x172f0c = "") => {
  try {
    if (!_0x172f0c) {
      return _0x7cffc5.send("*Use " + prefix + "filter word:reply_text!*");
    }
    let [_0x27ba2d, _0x116d5b] = _0x172f0c.split(":").map(_0x40b25d => _0x40b25d.trim());
    if (!_0x27ba2d || !_0x116d5b) {
      return _0x7cffc5.send("*Use " + prefix + "filter " + (_0x27ba2d || "word") + ": " + (_0x116d5b || "reply_text") + "!*");
    }
    let _0x17fc2c = (await bot_.findOne({
      id: "bot_" + _0x7cffc5.user
    })) || (await bot_.new({
      id: "bot_" + _0x7cffc5.user
    }));
    let _0x5dd7ac = _0x17fc2c.filter || {};
    _0x5dd7ac[_0x27ba2d] = _0x116d5b;
    setFilter.filter = _0x5dd7ac;
    let _0x24a4a0 = await bot_.updateOne({
      id: "bot_" + _0x7cffc5.user
    }, {
      filter: _0x5dd7ac
    });
    _0x7cffc5.send("*Successfully set filter to '" + _0x27ba2d + "'!*");
  } catch (_0x152f1f) {
    _0x7cffc5.error(_0x152f1f + "\n\nCommand:filter", _0x152f1f, "_Can't set filter!_");
  }
};
setFilter.stop = async (_0x103724, _0xc4e239 = "") => {
  try {
    if (!_0xc4e239) {
      return _0x103724.send("*Provide a word that set in filter!*\n*Use " + prefix + "flist to get list of filtered words!*");
    }
    let _0xc0b98a = (await bot_.findOne({
      id: "bot_" + _0x103724.user
    })) || (await bot_.new({
      id: "bot_" + _0x103724.user
    }));
    let _0x23f901 = _0xc0b98a.filter || {};
    if (!_0x23f901[_0xc4e239]) {
      return _0x103724.reply("*Given Word ('" + _0xc4e239 + "') not set to any filter!*");
    }
    delete _0x23f901[_0xc4e239];
    setFilter.filter = _0x23f901;
    await bot_.updateOne({
      id: "bot_" + _0x103724.user
    }, {
      filter: _0x23f901
    });
    _0x103724.reply("*_Filter word '" + _0xc4e239 + "' deleted!_*");
  } catch (_0x153068) {
    _0x103724.error(_0x153068 + "\n\nCommand:fstop", _0x153068, "*Can't delete filter!*");
  }
};
setFilter.list = async (_0xdb3bd0, _0x43f090 = "") => {
  try {
    let _0xda9bc2 = (await bot_.findOne({
      id: "bot_" + _0xdb3bd0.user
    })) || (await bot_.new({
      id: "bot_" + _0xdb3bd0.user
    }));
    let _0x31a8d4 = _0xda9bc2.filter || {};
    let _0x55d089 = Object.entries(_0x31a8d4).map(([_0x3b1bef, _0x597ecb]) => _0x3b1bef + " : " + _0x597ecb).join("\n");
    if (_0xda9bc2.filter && _0x55d089) {
      _0xdb3bd0.reply("*[LIST OF FILTERED WORDS]*\n\n" + _0x55d089);
    } else {
      _0xdb3bd0.reply("*_You didn't set any filter!_*");
    }
  } catch (_0x213cc9) {
    _0xdb3bd0.error(_0x213cc9 + "\n\nCommand:flist", _0x213cc9, false);
  }
};
setFilter.check = async (_0x26e5fd, _0x1061b1 = "") => {
  try {
    let _0x148446 = setFilter.filter || false;
    if (!_0x148446) {
      let _0x577104 = (await bot_.findOne({
        id: "bot_" + _0x26e5fd.user
      })) || (await bot_.new({
        id: "bot_" + _0x26e5fd.user
      }));
      _0x148446 = _0x577104.filter || {};
      setFilter.filter = _0x577104.filter || {};
    }
    if (_0x148446[_0x1061b1]) {
      _0x26e5fd.reply(_0x148446[_0x1061b1], {}, "smd", _0x26e5fd);
    }
  } catch (_0x5ce3b) {
    console.log(_0x5ce3b);
  }
};
let filter = setFilter;
module.exports = {
  yt: yt,
  sendAnimeReaction: sendAnimeReaction,
  sendGImages: sendGImages,
  AudioToBlackVideo: AudioToBlackVideo,
  textToLogoGenerator: textToLogoGenerator,
  photoEditor: photoEditor,
  updateProfilePicture: updateProfilePicture,
  randomeFunfacts: randomeFunfacts,
  plugins: plugins,
  getRandom: getRandom,
  generateSticker: generateSticker,
  forwardMessage: forwardMessage,
  audioEditor: audioEditor,
  send: send,
  react: react,
  note: note,
  sendWelcome: sendWelcome,
  aitts: aitts,
  mention: mention,
  filter: filter
};