const { smd, isUrl, Config } = require("../lib/index");
import("node-fetch")
  .then((_0x58577b) => {
    const _0x31382c = _0x58577b.default;
    smd(
      {
        pattern: "drive",
        alias: ["mdrive", "gdrive"],
        desc: "google drive downloader",
        type: "downloader",
        use: "<URL>",
      },
      async (_0x29f880, _0x547438) => {
        try {
          _0x547438 = isUrl(_0x547438 || _0x29f880.reply_text);
          if (!_0x547438 || !_0x547438[0]) {
            return await _0x29f880.send(
              "*Example : mdrive https://drive.google.com/file/d/15Vl6Df8GO8Gi3woPG-gOMxLQ-B_fkLaw/view*"
            );
          }
          let _0x225090 = await _0x5aae0a(_0x547438[0], _0x31382c);
          if (!_0x225090) {
            return await _0x29f880.reply("*Not found*");
          }
          let _0x1095a6 = await _0x29f880.send(
            (
              "≡ *GOGGLE DRIVE DOWNLOADER*\n\n▢ *Name:* " +
              _0x225090.fileName +
              "\n▢ *Size:* " +
              _0x332acb(_0x225090.sizeBytes) +
              "\n▢ *Type:* " +
              _0x225090.mimetype +
              "\n\n" +
              Config.caption
            ).trim()
          );
          return await _0x29f880.bot.sendMessage(
            _0x29f880.chat,
            {
              document: {
                url: _0x225090.downloadUrl,
              },
              ..._0x225090,
            },
            {
              quoted: _0x1095a6,
            }
          );
        } catch (_0xf96be8) {
          _0x29f880.error(
            _0xf96be8 + "\n\nCommand drive",
            _0xf96be8,
            _0xf96be8.message || "ERROR!"
          );
        }
      }
    );
    async function _0x5aae0a(_0x5024e5, _0x48ad67) {
      let _0xbbdee3;
      if (!_0x5024e5 || !_0x5024e5.match(/drive\.google/i)) {
        throw "Invalid URL";
      }
      _0xbbdee3 = (_0x5024e5.match(/\/?id=(.+)/i) ||
        _0x5024e5.match(/\/d\/(.*?)\//))[1];
      if (!_0xbbdee3) {
        throw "ID Not Found";
      }
      let _0x261755 = await _0x48ad67(
        "https://drive.google.com/uc?id=" +
          _0xbbdee3 +
          "&authuser=0&export=download",
        {
          method: "post",
          headers: {
            "accept-encoding": "gzip, deflate, br",
            "content-length": 0,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            origin: "https://drive.google.com",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
            "x-client-data": "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
            "x-drive-first-party": "DriveWebUi",
            "x-json-requested": "true",
          },
        }
      );
      let _0x53ad63 = JSON.parse((await _0x261755.text()).slice(4));
      let {
        fileName: _0x1b4935,
        sizeBytes: _0x4e076a,
        downloadUrl: _0xffc830,
      } = _0x53ad63;
      if (!_0xffc830) {
        throw "URL noT Found!";
      }
      let _0x372123 = await _0x48ad67(_0xffc830);
      if (_0x372123.status !== 200) {
        throw "Request Not Completed!";
      }
      return {
        downloadUrl: _0xffc830,
        fileName: _0x1b4935,
        sizeBytes: _0x4e076a,
        mimetype: _0x372123.headers.get("content-type"),
      };
    }
    function _0x332acb(_0x48f64, _0x7e9b21 = 2) {
      if (_0x48f64 === 0) {
        return "0 Bytes";
      }
      const _0x28b761 = 1024;
      const _0x1bb962 = _0x7e9b21 < 0 ? 0 : _0x7e9b21;
      const _0x4f67b4 = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB",
      ];
      const _0x248e71 = Math.floor(Math.log(_0x48f64) / Math.log(_0x28b761));
      return (
        parseFloat(
          (_0x48f64 / Math.pow(_0x28b761, _0x248e71)).toFixed(_0x1bb962)
        ) +
        " " +
        _0x4f67b4[_0x248e71]
      );
    }
  })
  .catch((_0x58a74d) => {
    console.error("Error during dynamic import:", _0x58a74d);
  });
