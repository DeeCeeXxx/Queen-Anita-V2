const {
    smd,
    tlang,
    prefix,
    Config,
    sleep,
    astroJson,
    smdBuffer
  } = require("../lib");
  const axios = require("axios");
  smd({
    cmdname: "stickersearch",
    alias: ["sticsearch"],
    category: "search",
    use: "[text]",
    info: "Searches Stickers"
  }, async (_0x4cc234, _0xa151c7) => {
    try {
      const {
        generateSticker: _0x5a889c
      } = require("../lib");
      if (!_0xa151c7) {
        return _0x4cc234.reply("Sorry you did not give any search term!");
      }
      const _0x1f4c84 = await axios.get("https://g.tenor.com/v1/search?q=" + _0xa151c7 + "&key=LIVDSRZULELA&limit=8").catch(() => {});
      if (!_0x1f4c84.data || !_0x1f4c84.data.results || !_0x1f4c84.data.results[0]) {
        return _0x4cc234.reply("*Could not find!*");
      }
      let _0x43fcbc = _0x1f4c84.data.results.length > 5 ? 5 : _0x1f4c84.data.results.length;
      for (let _0x48da09 = 0; _0x48da09 < _0x43fcbc; _0x48da09++) {
        let _0x2a4632 = await smdBuffer(_0x1f4c84.data.results?.[_0x48da09]?.media[0]?.mp4?.url);
        let _0x1c1454 = {
          pack: Config.packname,
          author: Config.author,
          type: "full",
          quality: 1
        };
        if (_0x2a4632) {
          _0x5a889c(_0x4cc234, _0x2a4632, _0x1c1454);
        }
      }
    } catch (_0x3f900e) {
      _0x4cc234.error(_0x3f900e + "\n\nCommand: stickersearch", _0x3f900e, "*Could not find*");
    }
  });