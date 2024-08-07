let { smd, prefix, Config } = require(lib_dir);
const fetch = require('node-fetch');

async function textToLogoGenerator(message, textProUrl, text1, text2 = "ser", serviceType = "textpro", retryOnFail = true) {
  let mumakerResponse = {};
  let apiResponse = {};
  let url = /1|ephoto|ephoto360/gi.test(serviceType) ? `https://ephoto360.com/${textProUrl}.html` :
           /2|potoxy|photooxy/gi.test(serviceType) ? `https://photooxy.com/${textProUrl}.html` :
           /3|enphoto|en360/gi.test(serviceType) ? `https://en.ephoto360.com/${textProUrl}.html` :
           `https://textpro.me/${textProUrl}.html`;

  try {
    const { textpro } = require('mumaker');
    if (text1) {
      mumakerResponse = await textpro(url, [text1, text2]);
    }

    let captionContext = {} || { ...(await message.bot.contextInfo('Text to Logo', `Hello ${message.senderName}`)) };
    return await message.bot.sendMessage(message.jid, {
      image: { url: mumakerResponse.image },
      caption: Config.caption,
      contextInfo: captionContext
    }, { messageId: message.bot.messageId() });
  } catch (error) {
    try {
      let apiUrl = `${global.api_smd}/api/maker?text1=${text1}&text2=${text2}&url=${url}`;
      apiResponse = await fetchJson(apiUrl);

      if ((!apiResponse || !apiResponse.status || !apiResponse.img) && retryOnFail) {
        return message.error(`${error}\nWebinfo: ${apiResponse.img || apiResponse}\n\nfileName: textToLogoGenerator->s.js`, error);
      }

      await message.bot.sendMessage(message.jid, { image: { url: apiResponse.img } }, { messageId: message.bot.messageId() });
    } catch (err) {
      let imageUrl = mumakerResponse && mumakerResponse.image ? mumakerResponse.image :
                     apiResponse && apiResponse.img ? apiResponse.img : false;

      if (retryOnFail) {
        message.error(`${error}\n\nAPI Error: ${err}\n\nfileName: textToLogoGenerator->s.js`, error, (imageUrl ? `Here we go\n\n${imageUrl}` : "Error, Request Denied!").trim());
      }
    }
  }
}

async function fetchJson(url) {
  const response = await fetch(url);
  return await response.json();
}
   
smd(
  {
    cmdname: "glow",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      if (!match)
        return message.reply(`*_Example : ${prefix + cmdName} David_*`);
      await require(lib_dir).textToLogoGenerator(
        message,
        "hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74",
        match,
        "ser",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//-----------------------------------------------------------------------------------
smd(
  {
    cmdname: "glitch",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      if (!match)
        return message.reply(`*_Example : ${prefix + cmdName} David_*`);
      return await textToLogoGenerator(
        message,
        "tao-hieu-ung-chu-digital-glitch-truc-tuyen-941",
        match,
        "asta",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//-----------------------------------------------------------------------------------
smd(
  {
    cmdname: "pixel",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      if (!match)
        return message.reply(`*_Example : ${prefix + cmdName} Astro_*`);
      return await textToLogoGenerator(
        message,
        "tao-hieu-ung-chu-pixel-glitch-truc-tuyen-940",
        match,
        "asta",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);

//--------------------------------------------------------------------------------------
smd(
  {
    cmdname: "grafiti",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      if (!match)
        return message.reply(`*_Example : ${prefix + cmdName} Astro_*`);
      return await textToLogoGenerator(
        message,
        "tao-hieu-ung-chu-graffiti-duong-pho-an-tuong-online-795",
        match,
        "asta",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);

//-------------------------------------------------------------------------------
smd(
  {
    cmdname: "grafiti2",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      if (!match)
        return message.reply(`*_Example : ${prefix + cmdName} David_*`);
      return await textToLogoGenerator(
        message,
        "hieu-ung-chu/chu-graffiti-online-mau-8-182",
        match,
        "asta",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);

//-------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
smd(
  {
    cmdname: "grafiti3",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      //if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      return await textToLogoGenerator(
        message,
        "tao-hieu-ung-chu-graffiti-sieu-ngau-online-794",
        text1,
        text2
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//================================================================================================
smd(
  {
    cmdname: "grafiti4",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      //if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text1)
        return await message.reply(`*_Example : ${prefix + cmdName} text1_*`);
      return await textToLogoGenerator(
        message,
        "hieu-ung-chu/tao-cover-graffiti-online-181",
        text1,
        text2 || "ser",
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//================================================================================================

//-----------------------------------------------------------------------------------

smd(
  {
    cmdname: "gradient",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      // if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      await textToLogoGenerator(
        message,
        "tao-logo-gradient-3d-truc-tuyen-501",
        text1,
        text2,
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//-----------------------------------------------------------------------------------

smd(
  {
    cmdname: "wtone",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      // if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      await textToLogoGenerator(
        message,
        "tao-logo-chu-truc-tuyen-499",
        text1,
        text2,
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);

//-----------------------------------------------------------------------------------
//---------------------------------------------------------------------------
smd(
  {
    cmdname: "phub",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      // if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      await textToLogoGenerator(
        message,
        "tao-logo-phong-cach-pornhub-612",
        text1,
        text2,
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);

//-----------------------------------------------------------------------------------
smd(
  {
    cmdname: "avenger",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      //if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      return await textToLogoGenerator(
        message,
        "tao-logo-3d-phong-cach-avengers-445",
        text1,
        text2,
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
//-----------------------------------------------------------------------------------
smd(
  {
    cmdname: "marvel",
    type: "deeapsea",
    info: "Some text to image feature with various styles.",
    filename: __filename,
  },
  async (message, match, { cmdName }) => {
    try {
      let text1 = match ? match.split(";")[0] : "";
      let text2 = match ? match.split(";")[1] : "";
      if (!text2 || !text1)
        return await message.reply(
          `*_Example : ${prefix + cmdName} text1;text2_*`
        );
      return await textToLogoGenerator(
        message,
        "tao-logo-phong-cach-marvel-419",
        text1,
        text2,
        "1"
      );
    } catch (e) {
      return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
    }
  }
);
smd({
     cmdname: "sea",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x24125a, _0x4f77c0, {
     cmdName: _0x2d0eda
   }) => {
     try {
       if (!_0x4f77c0) {
         return _0x24125a.reply("*_Example : " + (prefix + _0x2d0eda) + " Astro_*");
       }
       return await textToLogoGenerator(_0x24125a, "create-3d-deep-sea-metal-text-effect-online-1053", _0x4f77c0);
     } catch (_0x82c892) {
       return await _0x24125a.error(_0x82c892 + "\n\ncmdName: " + _0x2d0eda, _0x82c892);
     }
   });
   smd({
     cmdname: "horror",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x22e0c1, _0x4b2154, {
     cmdName: _0x3f34e1
   }) => {
     try {
       if (!_0x4b2154) {
         return _0x22e0c1.reply("*_Example : " + (prefix + _0x3f34e1) + " David_*");
       }
       return await textToLogoGenerator(_0x22e0c1, "horror-blood-text-effect-online-883", _0x4b2154);
     } catch (_0x327e65) {
       return await _0x22e0c1.error(_0x327e65 + "\n\ncmdName: " + _0x3f34e1, _0x327e65);
     }
   });
   smd({
     cmdname: "whitebear",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x42806c, _0x1d8c69, {
     cmdName: _0x20d4b4
   }) => {
     try {
       if (!_0x1d8c69) {
         return _0x42806c.reply("*_Example : " + (prefix + _0x20d4b4) + " David_*");
       }
       return await textToLogoGenerator(_0x42806c, "online-black-and-white-bear-mascot-logo-creation-1012", _0x1d8c69);
     } catch (_0x2e7f76) {
       return await _0x42806c.error(_0x2e7f76 + "\n\ncmdName: " + _0x20d4b4, _0x2e7f76);
     }
   });
   smd({
     cmdname: "joker",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x25bc1d, _0x216b18, {
     cmdName: _0x67b214
   }) => {
     try {
       if (!_0x216b18) {
         return _0x25bc1d.reply("*_Example : " + (prefix + _0x67b214) + " David_*");
       }
       return await textToLogoGenerator(_0x25bc1d, "create-logo-joker-online-934", _0x216b18);
     } catch (_0x4906be) {
       return await _0x25bc1d.error(_0x4906be + "\n\ncmdName: " + _0x67b214, _0x4906be);
     }
   });
   smd({
     cmdname: "metallic",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x209bcb, _0x550f0a, {
     cmdName: _0x92ce9a
   }) => {
     try {
       if (!_0x550f0a) {
         return _0x209bcb.reply("*_Example : " + (prefix + _0x92ce9a) + " David_*");
       }
       return await textToLogoGenerator(_0x209bcb, "create-a-metallic-text-effect-free-online-1041", _0x550f0a);
     } catch (_0x462544) {
       return await _0x209bcb.error(_0x462544 + "\n\ncmdName: " + _0x92ce9a, _0x462544);
     }
   });
   smd({
     cmdname: "steel",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x287ddf, _0x2bf771, {
     cmdName: _0x23d32d
   }) => {
     try {
       if (!match) {
         return _0x287ddf.reply("*_Example : " + (prefix + _0x23d32d) + " David_*");
       }
       return await textToLogoGenerator(_0x287ddf, "steel-text-effect-online-921", match);
     } catch (_0x2017d3) {
       return await _0x287ddf.error(_0x2017d3 + "\n\ncmdName: " + _0x23d32d, _0x2017d3);
     }
   });
   smd({
     cmdname: "harrypotter",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x1658cc, _0x217edf, {
     cmdName: _0x1f1d94
   }) => {
     try {
       if (!_0x217edf) {
         return _0x1658cc.reply("*_Example : " + (prefix + _0x1f1d94) + " David_*");
       }
       return await textToLogoGenerator(_0x1658cc, "create-harry-potter-text-effect-online-1025", _0x217edf);
     } catch (_0x5a7364) {
       return await _0x1658cc.error(_0x5a7364 + "\n\ncmdName: " + _0x1f1d94, _0x5a7364);
     }
   });
   smd({
     cmdname: "underwater",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x4db464, _0x2be604, {
     cmdName: _0x46bb33
   }) => {
     try {
       if (!_0x2be604) {
         return _0x4db464.reply("*_Example : " + (prefix + _0x46bb33) + " David_*");
       }
       return await textToLogoGenerator(_0x4db464, "3d-underwater-text-effect-generator-online-1013", _0x2be604);
     } catch (_0x3a28cb) {
       return await _0x4db464.error(_0x3a28cb + "\n\ncmdName: " + _0x46bb33, _0x3a28cb);
     }
   });
   smd({
     cmdname: "luxury",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x507353, _0x2e2993, {
     cmdName: _0x4b0f74
   }) => {
     try {
       if (!_0x2e2993) {
         return _0x507353.reply("*_Example : " + (prefix + _0x4b0f74) + " David_*");
       }
       return await textToLogoGenerator(_0x507353, "3d-luxury-gold-text-effect-online-1003", _0x2e2993);
     } catch (_0x518394) {
       return await _0x507353.error(_0x518394 + "\n\ncmdName: " + _0x4b0f74, _0x518394);
     }
   });
   smd({
     cmdname: "glue",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x106fc0, _0x9fed0e, {
     cmdName: _0x5b5c5c
   }) => {
     try {
       if (!_0x9fed0e) {
         return _0x106fc0.reply("*_Example : " + (prefix + _0x5b5c5c) + " David_*");
       }
       return await textToLogoGenerator(_0x106fc0, "create-3d-glue-text-effect-with-realistic-style-986", _0x9fed0e);
     } catch (_0x266ed5) {
       return await _0x106fc0.error(_0x266ed5 + "\n\ncmdName: " + _0x5b5c5c, _0x266ed5);
     }
   });
   smd({
     cmdname: "fabric",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x2c5e4d, _0x54dc94, {
     cmdName: _0x201030
   }) => {
     try {
       if (!_0x54dc94) {
         return _0x2c5e4d.reply("*_Example : " + (prefix + _0x201030) + " David_*");
       }
       return await textToLogoGenerator(_0x2c5e4d, "fabric-text-effect-online-964", _0x54dc94);
     } catch (_0xee07bf) {
       return await _0x2c5e4d.error(_0xee07bf + "\n\ncmdName: " + _0x201030, _0xee07bf);
     }
   });
   smd({
     cmdname: "toxic",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0xb24628, _0x1daf45, {
     cmdName: _0x317c2e
   }) => {
     try {
       if (!_0x1daf45) {
         return _0xb24628.reply("*_Example : " + (prefix + _0x317c2e) + " David_*");
       }
       return await textToLogoGenerator(_0xb24628, "toxic-text-effect-online-901", _0x1daf45);
     } catch (_0x2a3ccf) {
       return await _0xb24628.error(_0x2a3ccf + "\n\ncmdName: " + _0x317c2e, _0x2a3ccf);
     }
   });
   smd({
     cmdname: "ancient",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x19ea9c, _0x2712a3, {
     cmdName: _0x3da883
   }) => {
     try {
       if (!_0x2712a3) {
         return _0x19ea9c.reply("*_Example : " + (prefix + _0x3da883) + " David_*");
       }
       return await textToLogoGenerator(_0x19ea9c, "3d-golden-ancient-text-effect-online-free-1060", _0x2712a3);
     } catch (_0x34eacf) {
       return await _0x19ea9c.error(_0x34eacf + "\n\ncmdName: " + _0x3da883, _0x34eacf);
     }
   });
   smd({
     cmdname: "cloud",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x3580cc, _0x4759ef, {
     cmdName: _0x25c70f
   }) => {
     try {
       if (!_0x4759ef) {
         return _0x3580cc.reply("*_Example : " + (prefix + _0x25c70f) + " David_*");
       }
       return await textToLogoGenerator(_0x3580cc, "create-a-cloud-text-effect-on-the-sky-online-1004", _0x4759ef);
     } catch (_0xf4188b) {
       return await _0x3580cc.error(_0xf4188b + "\n\ncmdName: " + _0x25c70f, _0xf4188b);
     }
   });
   smd({
     cmdname: "transformer",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x33543a, _0x550c65, {
     cmdName: _0x5932cf
   }) => {
     try {
       if (!_0x550c65) {
         return _0x33543a.reply("*_Example : " + (prefix + _0x5932cf) + " David_*");
       }
       return await textToLogoGenerator(_0x33543a, "create-a-transformer-text-effect-online-1035", _0x550c65);
     } catch (_0x1cc1e5) {
       return await _0x33543a.error(_0x1cc1e5 + "\n\ncmdName: " + _0x5932cf, _0x1cc1e5);
     }
   });
   smd({
     cmdname: "thunder",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x177d36, _0x30ff16, {
     cmdName: _0x51912b
   }) => {
     try {
       if (!_0x30ff16) {
         return _0x177d36.reply("*_Example : " + (prefix + _0x51912b) + " Davido_*");
       }
       return await textToLogoGenerator(_0x177d36, "online-thunder-text-effect-generator-1031", _0x30ff16);
     } catch (_0x40c4a4) {
       return await _0x177d36.error(_0x40c4a4 + "\n\ncmdName: " + _0x51912b, _0x40c4a4);
     }
   });
   smd({
     cmdname: "scifi",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x1c1874, _0x2049f9, {
     cmdName: _0x5462f4
   }) => {
     try {
       if (!_0x2049f9) {
         return _0x1c1874.reply("*_Example : " + (prefix + _0x5462f4) + " David_*");
       }
       return await textToLogoGenerator(_0x1c1874, "create-3d-sci-fi-text-effect-online-1050", _0x2049f9);
     } catch (_0x3c5966) {
       return await _0x1c1874.error(_0x3c5966 + "\n\ncmdName: " + _0x5462f4, _0x3c5966);
     }
   });
   smd({
     cmdname: "sand",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x435d39, _0x3c787b, {
     cmdName: _0x4839f1
   }) => {
     try {
       if (!_0x3c787b) {
         return _0x435d39.reply("*_Example : " + (prefix + _0x4839f1) + " David_*");
       }
       return await textToLogoGenerator(_0x435d39, "write-in-sand-summer-beach-free-online-991", _0x3c787b);
     } catch (_0x576498) {
       return await _0x435d39.error(_0x576498 + "\n\ncmdName: " + _0x4839f1, _0x576498);
     }
   });
   smd({
     cmdname: "rainbow",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x273636, _0x44fbfa, {
     cmdName: _0xf45ca4
   }) => {
     try {
       if (!_0x44fbfa) {
         return _0x273636.reply("*_Example : " + (prefix + _0xf45ca4) + " David*");
       }
       return await textToLogoGenerator(_0x273636, "3d-rainbow-color-calligraphy-text-effect-1049", _0x44fbfa);
     } catch (_0x16cb64) {
       return await _0x273636.error(_0x16cb64 + "\n\ncmdName: " + _0xf45ca4, _0x16cb64);
     }
   });
   smd({
     cmdname: "pencil",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0xf01fbd, _0x152a11, {
     cmdName: _0x3bd3be
   }) => {
     try {
       if (!_0x152a11) {
         return _0xf01fbd.reply("*_Example : " + (prefix + _0x3bd3be) + " David_*");
       }
       return await textToLogoGenerator(_0xf01fbd, "create-a-sketch-text-effect-online-1044", _0x152a11);
     } catch (_0x234892) {
       return await _0xf01fbd.error(_0x234892 + "\n\ncmdName: " + _0x3bd3be, _0x234892);
     }
   });
   smd({
     cmdname: "neon",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x260877, _0x1b1b16, {
     cmdName: _0x3fd4bb
   }) => {
     try {
       if (!_0x1b1b16) {
         return _0x260877.reply("*_Example : " + (prefix + _0x3fd4bb) + " David_*");
       }
       return await textToLogoGenerator(_0x260877, "create-3d-neon-light-text-effect-online-1028", _0x1b1b16);
     } catch (_0x26693d) {
       return await _0x260877.error(_0x26693d + "\n\ncmdName: " + _0x3fd4bb, _0x26693d);
     }
   });
   smd({
     cmdname: "magma",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x4d2f55, _0x49d874, {
     cmdName: _0x4f01f0
   }) => {
     try {
       if (!_0x49d874) {
         return _0x4d2f55.reply("*_Example : " + (prefix + _0x4f01f0) + " David_*");
       }
       return await textToLogoGenerator(_0x4d2f55, "create-a-magma-hot-text-effect-online-1030", _0x49d874);
     } catch (_0x508ab4) {
       return await _0x4d2f55.error(_0x508ab4 + "\n\ncmdName: " + _0x4f01f0, _0x508ab4);
     }
   });
   smd({
     cmdname: "leaves",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x356d68, _0x474228, {
     cmdName: _0x31efdc
   }) => {
     try {
       if (!_0x474228) {
         return _0x356d68.reply("*_Example : " + (prefix + _0x31efdc) + " David_*");
       }
       return await textToLogoGenerator(_0x356d68, "natural-leaves-text-effect-931", _0x474228);
     } catch (_0x351398) {
       return await _0x356d68.error(_0x351398 + "\n\ncmdName: " + _0x31efdc, _0x351398);
     }
   });
   smd({
     cmdname: "discovery",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x5840f6, _0x1526fa, {
     cmdName: _0x12cadb
   }) => {
     try {
       if (!_0x1526fa) {
         return _0x5840f6.reply("*_Example : " + (prefix + _0x12cadb) + " David_*");
       }
       return await textToLogoGenerator(_0x5840f6, "create-space-text-effects-online-free-1042", _0x1526fa);
     } catch (_0x3bfc3b) {
       return await _0x5840f6.error(_0x3bfc3b + "\n\ncmdName: " + _0x12cadb, _0x3bfc3b);
     }
   });
   smd({
     cmdname: "christmas",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x2b9514, _0x537b5d, {
     cmdName: _0x5b77bc
   }) => {
     try {
       if (!_0x537b5d) {
         return _0x2b9514.reply("*_Example : " + (prefix + _0x5b77bc) + " David_*");
       }
       return await textToLogoGenerator(_0x2b9514, "christmas-tree-text-effect-online-free-1057", _0x537b5d);
     } catch (_0x2bb3a8) {
       return await _0x2b9514.error(_0x2bb3a8 + "\n\ncmdName: " + _0x5b77bc, _0x2bb3a8);
     }
   });
   smd({
     cmdname: "candy",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x4a4e04, _0x195908, {
     cmdName: _0x53545f
   }) => {
     try {
       if (!_0x195908) {
         return _0x4a4e04.reply("*_Example : " + (prefix + _0x53545f) + " David_*");
       }
       return await textToLogoGenerator(_0x4a4e04, "create-christmas-candy-cane-text-effect-1056", _0x195908);
     } catch (_0x31f91a) {
       return await _0x4a4e04.error(_0x31f91a + "\n\ncmdName: " + _0x53545f, _0x31f91a);
     }
   });
   smd({
     cmdname: "1917",
     type: "deepsea",
     info: "Some text to image feature with various styles.",
     filename: __filename
   }, async (_0x20b5a4, _0xde1750, {
     cmdName: _0x3f5e61
   }) => {
     try {
       if (!_0xde1750) {
         return _0x20b5a4.reply("*_Example : " + (prefix + _0x3f5e61) + " David_*");
       }
       return await textToLogoGenerator(_0x20b5a4, "1917-style-text-effect-online-980", _0xde1750);
     } catch (_0x1ff89b) {
       return await _0x20b5a4.error(_0x1ff89b + "\n\ncmdName: " + _0x3f5e61, _0x1ff89b);
     }
   });
   