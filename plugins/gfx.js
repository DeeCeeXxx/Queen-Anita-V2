const {
    smd,
    prefix,
    Config
  } = require("../lib");
  const done = "✳️";
  const rwait = "✳️";
  let GfxFunc = async (_0xe512ac, {
    Void: _0x50b799,
    text: _0x3930d1,
    smd: _0x1fed9f
  }, _0x5ccef2 = true) => {
    try {
      _0x3930d1 += ": ser";
      let _0x478253 = "Example  : *" + (prefix + _0x1fed9f) + "* Asta";
      let _0x12ae56 = "*Separate the text with ':' sign*\n*Example : " + (prefix + _0x1fed9f) + " Asta : Bot*";
      let _0x36f282 = _0x3930d1.split(":")[0];
      let _0x2d2a89 = _0x1fed9f.toLowerCase();
      switch (_0x2d2a89) {
        case "gfx1":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x3226bb = "https://api.caliph.biz.id/api/kaneki?nama=" + encodeURIComponent(_0x36f282) + "&apikey=caliphkey";
          _0xe512ac.send(_0x3226bb, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx2":
          if (!_0x3930d1) {
            throw _0x12ae56;
          }
          if (!_0x3930d1.includes(":")) {
            throw _0x12ae56;
          }
          let [_0x26a726, _0x1e255c] = _0x3930d1.split(":");
          let _0xab3dba = "https://api.caliph.biz.id/api/girlneko?nama=" + encodeURIComponent(_0x26a726.trim()) + "&nama2=" + encodeURIComponent(_0x1e255c.trim()) + "&apikey=caliphkey";
          _0xe512ac.send(_0xab3dba, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx3":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x2dba02 = "https://api.caliph.biz.id/api/rem?nama=" + encodeURIComponent(_0x36f282) + "&apikey=caliphkey";
          _0xe512ac.send(_0x2dba02, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx4":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x2f4148 = "https://api.caliph.biz.id/api/textpro/matrix?text=" + encodeURIComponent(_0x36f282) + "&apikey=caliphkey";
          _0xe512ac.send(_0x2f4148, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx5":
          if (!_0x36f282) {
            throw _0x478253;
          }
          const _0x211bd9 = "https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=" + lolkeysapi + "&text=" + encodeURIComponent(_0x36f282);
          _0xe512ac.send(_0x211bd9, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx6":
          if (!_0x3930d1) {
            throw _0x12ae56;
          }
          if (!_0x3930d1.includes(":")) {
            throw _0x12ae56;
          }
          let [_0x1df0dc, _0x4804be] = _0x3930d1.split`:`;
          const _0x17a27c = "https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=" + lolkeysapi + "&text1=" + encodeURIComponent(_0x1df0dc) + "&text2=" + encodeURIComponent(_0x4804be);
          _0xe512ac.send(_0x17a27c, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx7":
          if (!_0x3930d1) {
            throw _0x12ae56;
          }
          if (!_0x3930d1.includes(":")) {
            throw _0x12ae56;
          }
          let [_0x9244eb, _0x2fa36f] = _0x3930d1.split(":");
          let _0x4b3f59 = "https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=" + lolkeysapi + "&text1=" + encodeURIComponent(_0x9244eb.trim()) + "&text2=" + encodeURIComponent(_0x2fa36f.trim());
          _0xe512ac.send(_0x4b3f59, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx8":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x21a8b0 = "https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=" + lolkeysapi + "&text=" + encodeURIComponent(_0x36f282);
          _0xe512ac.send(_0x21a8b0, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx9":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x4af196 = "https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=" + lolkeysapi + "&text=" + encodeURIComponent(_0x36f282);
          _0xe512ac.send(_0x4af196, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx10":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x4eb041 = "https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=" + lolkeysapi + "&text=" + encodeURIComponent(_0x36f282);
          _0xe512ac.send(_0x4eb041, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx11":
          if (!_0x3930d1) {
            throw _0x12ae56;
          }
          if (!_0x3930d1.includes(":")) {
            throw _0x12ae56;
          }
          let [_0x188286, _0x1db7a9] = _0x3930d1.split(":");
          let _0x28debb = "https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=" + lolkeysapi + "&text1=" + encodeURIComponent(_0x188286.trim()) + "&text2=" + encodeURIComponent(_0x1db7a9.trim());
          _0xe512ac.send(_0x28debb, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx12":
          if (!_0x36f282) {
            throw _0x478253;
          }
          let _0x54a9c8 = "https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=" + lolkeysapi + "&text=" + encodeURIComponent(_0x36f282);
          _0xe512ac.send(_0x54a9c8, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx13":
          if (!_0x3930d1.includes(":")) {
            throw _0x12ae56;
          }
          let [_0x1988c3, _0x4814d9] = _0x3930d1.split(":");
          let _0x4f7a88 = "https://api.caliph.biz.id/api/sadboy?nama=" + encodeURIComponent(_0x1988c3.trim()) + "&nama2=" + encodeURIComponent(_0x4814d9.trim()) + "&apikey=caliphkey";
          _0xe512ac.send(_0x4f7a88, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        case "gfx14":
          if (!_0x3930d1) {
            throw _0x12ae56;
          }
          var [_0x4814f3, _0x32c6ba] = _0x3930d1.split(":");
          let _0x22e137 = "https://api.caliph.biz.id/api/lolimaker?nama=" + encodeURIComponent(_0x4814f3.trim()) + "&nama2=" + encodeURIComponent(_0x32c6ba.trim()) + "&apikey=caliphkey";
          _0xe512ac.send(_0x22e137, {
            caption: Config.caption
          }, "img", _0xe512ac);
          break;
        default:
          break;
      }
    } catch (_0x6096ff) {
      console.log(_0x6096ff);
      if (_0x5ccef2) {
        return _0xe512ac.send("" + _0x6096ff);
      }
    }
  };
  let gfxx = ["gfx1", "gfx2", "gfx3", "gfx4", "gfx5", "gfx6", "gfx7", "gfx8", "gfx9", "gfx10", "gfx11", "gfx12", "gfx13", "gfx14"];
  let lolkeysapi = "GataDios";
  for (let i = 0; i < gfxx.length; i++) {
    smd({
      cmdname: gfxx[i],
      infocmd: "create a gfx logo for text",
      type: "gfx"
    }, async (_0x2a8925, _0x4d7fbd, {
      smd: _0x1a74bb,
      Void: _0x328365
    }) => {
      try {
        GfxFunc(_0x2a8925, {
          text: _0x4d7fbd,
          Void: _0x328365,
          smd: _0x1a74bb
        });
      } catch (_0x2de287) {
        console.log(_0x2de287);
      }
    });
  }
  smd({
    cmdname: "gfx",
    infocmd: "create gfx logo for text",
    type: "gfx"
  }, async (_0x1f82ce, _0x2f534c, {
    smd: _0x123e7d,
    Void: _0x2c219b
  }) => {
    try {
      let _0x2106bc = "*Separate the text with _:_ sign!*\n*Example : " + (prefix + _0x123e7d) + " Asta _:_ Bot*";
      if (!_0x2f534c) {
        let _0x4a015 = "┌───〈 *ɢꜰx ᴍᴇɴᴜ*  〉───◆\n│╭─────────────···▸\n┴│▸\n⬡│▸ " + gfxx.join(" \n⬡│▸ ") + "\n┬│▸\n│╰────────────···▸▸\n└───────────────···▸\n\n\t *USE: " + (prefix + _0x123e7d) + " Rias:Gremory*\n_To get All Results with single Cmd!_\n";
        return await _0x1f82ce.sendUi(_0x1f82ce.chat, {
          caption: _0x4a015
        });
      }
      if (!_0x2f534c.includes(":")) {
        return _0x1f82ce.send(_0x2106bc);
      }
      for (let _0x1a7d08 = 0; _0x1a7d08 < gfxx.length; _0x1a7d08++) {
        GfxFunc(_0x1f82ce, {
          text: _0x2f534c,
          Void: _0x2c219b,
          smd: "gfx" + (_0x1a7d08 + 1)
        }, false);
      }
    } catch (_0x4c39a6) {
      _0x1f82ce.error(_0x4c39a6 + "\n\nCommand: " + _0x123e7d, _0x4c39a6, false);
    }
  });