const ffmpeg = require("fluent-ffmpeg");
const {
  randomBytes
} = require("crypto");
const fs = require("fs");
const {
  getHttpStream,
  toBuffer
} = require("@whiskeysockets/baileys");
const sharp = require("sharp");
const {
  spawn
} = require("child_process");
const path = require("path");
const {
  fromBuffer
} = require("file-type");
const {
  tmpdir
} = require("os");
const ff = require("fluent-ffmpeg");
const webp = require("node-webpmux");
async function toGif(_0x1804d0) {
  try {
    const _0x10bdc6 = "./" + randomBytes(3).toString("hex") + ".webp";
    const _0x59babe = "./" + randomBytes(3).toString("hex") + ".gif";
    fs.writeFileSync(_0x10bdc6, _0x1804d0.toString("binary"), "binary");
    const _0x15e75a = await new Promise(_0x55c0d1 => {
      spawn("convert", [_0x10bdc6, _0x59babe]).on("error", _0x138ca1 => {
        throw _0x138ca1;
      }).on("exit", () => _0x55c0d1(_0x59babe));
    });
    let _0x42f096 = fs.readFileSync(_0x15e75a);
    try {
      fs.unlinkSync(_0x10bdc6);
    } catch {}
    try {
      fs.unlinkSync(_0x59babe);
    } catch {}
    return _0x42f096;
  } catch (_0x47109b) {
    console.log(_0x47109b);
  }
}
async function toMp4(_0x1d5caf) {
  try {
    let _0x531e29 = "./" + randomBytes(3).toString("hex") + ".gif";
    const _0x17da12 = fs.existsSync(_0x1d5caf) ? _0x1d5caf : save(_0x1d5caf, _0x531e29);
    const _0x222ca8 = "./" + randomBytes(3).toString("hex") + ".mp4";
    const _0x573d64 = await new Promise(_0x592bf9 => {
      ffmpeg(_0x17da12).outputOptions(["-pix_fmt yuv420p", "-c:v libx264", "-movflags +faststart", "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'"]).toFormat("mp4").noAudio().save(_0x222ca8).on("exit", () => _0x592bf9(_0x222ca8));
    });
    let _0x2b9b13 = await fs.promises.readFile(_0x573d64);
    try {
      fs.unlinkSync(_0x17da12);
    } catch {}
    try {
      fs.unlinkSync(_0x222ca8);
    } catch {}
    return _0x2b9b13;
  } catch (_0x24ee99) {
    console.log(_0x24ee99);
  }
}
const EightD = async _0x78ba44 => {
  const _0x29f51a = "./temp/" + randomBytes(3).toString("hex") + ".mp3";
  _0x78ba44 = Buffer.isBuffer(_0x78ba44) ? save(_0x78ba44, _0x29f51a) : _0x78ba44;
  const _0x25915b = "./temp/" + randomBytes(3).toString("hex") + ".mp3";
  const _0x16290f = await new Promise(_0x4a7887 => {
    ffmpeg(_0x78ba44).audioFilter(["apulsator=hz=0.125"]).audioFrequency(44100).audioChannels(2).audioBitrate("128k").audioCodec("libmp3lame").audioQuality(5).toFormat("mp3").save(_0x25915b).on("end", () => _0x4a7887(_0x25915b));
  });
  return _0x16290f;
};
function save(_0x47b3b7, _0x5a41c3 = "./temp/saveFile.jpg") {
  try {
    fs.writeFileSync(_0x5a41c3, _0x47b3b7.toString("binary"), "binary");
    return _0x5a41c3;
  } catch (_0x48181f) {
    console.log(_0x48181f);
  }
}
const resizeImage = (_0x2037ea, _0x4470a2, _0x42f2ff) => {
  if (!Buffer.isBuffer(_0x2037ea)) {
    throw "Input is not a Buffer";
  }
  return new Promise(async _0x3e6c8a => {
    sharp(_0x2037ea).resize(_0x4470a2, _0x42f2ff, {
      fit: "contain"
    }).toBuffer().then(_0x3e6c8a);
  });
};
const _parseInput = async (_0x242492, _0x537749 = false, _0xbaa34d = "path") => {
  const _0x257fef = await toBuffer(await getHttpStream(_0x242492));
  const _0x113b13 = "./temp/file_" + randomBytes(3).toString("hex") + "." + (_0x537749 ? _0x537749 : (await fromBuffer(_0x257fef)).ext);
  const _0x26a839 = Buffer.isBuffer(_0x242492) ? save(_0x242492, _0x113b13) : fs.existsSync(_0x242492) ? _0x242492 : _0x242492;
  if (_0xbaa34d == "path") {
    return _0x26a839;
  } else if (_0xbaa34d == "buffer") {
    const _0x178c22 = await fs.promises.readFile(_0x26a839);
    try {
      await fs.promises.unlink(_0x26a839);
    } catch (_0x266680) {}
    return _0x178c22;
  }
};
async function imageToWebp(_0x218725) {
  const _0x1e375a = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x23ff16 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".jpg");
  fs.writeFileSync(_0x23ff16, _0x218725);
  await new Promise((_0x48f236, _0x374a61) => {
    ff(_0x23ff16).on("error", _0x374a61).on("end", () => _0x48f236(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat("webp").save(_0x1e375a);
  });
  const _0x110667 = fs.readFileSync(_0x1e375a);
  fs.unlinkSync(_0x1e375a);
  fs.unlinkSync(_0x23ff16);
  return _0x110667;
}
async function videoToWebp(_0x359f57) {
  const _0x54fd5 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x1a1e9b = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
  fs.writeFileSync(_0x1a1e9b, _0x359f57);
  await new Promise((_0x52a5ff, _0x1e1c14) => {
    ff(_0x1a1e9b).on("error", _0x1e1c14).on("end", () => _0x52a5ff(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", "0", "-ss", "00:00:00", "-t", "00:00:05", "-preset", "default", "-an", "-vsync", "0"]).toFormat("webp").save(_0x54fd5);
  });
  const _0x56df2a = fs.readFileSync(_0x54fd5);
  fs.unlinkSync(_0x54fd5);
  fs.unlinkSync(_0x1a1e9b);
  return _0x56df2a;
}
async function writeExifImg(_0x1fd483, _0x483806) {
  let _0xb28c0b = await imageToWebp(_0x1fd483);
  const _0xef911d = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x3aa6e0 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  fs.writeFileSync(_0xef911d, _0xb28c0b);
  if (_0x483806.packname || _0x483806.author) {
    const _0x335b84 = new webp.Image();
    const _0x42a636 = {
      "sticker-pack-id": "QUEEN ANITA",
      "sticker-pack-name": _0x483806.packname,
      "sticker-pack-publisher": _0x483806.author,
      emojis: _0x483806.categories ? _0x483806.categories : [""]
    };
    const _0xcbb12e = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    const _0x6ed7c6 = Buffer.from(JSON.stringify(_0x42a636), "utf-8");
    const _0x306edf = Buffer.concat([_0xcbb12e, _0x6ed7c6]);
    _0x306edf.writeUIntLE(_0x6ed7c6.length, 14, 4);
    await _0x335b84.load(_0xef911d);
    fs.unlinkSync(_0xef911d);
    _0x335b84.exif = _0x306edf;
    await _0x335b84.save(_0x3aa6e0);
    return _0x3aa6e0;
  }
}
async function writeExifVid(_0x45a241, _0x563630) {
  let _0x10dcc8 = await videoToWebp(_0x45a241);
  const _0x32aecd = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x5e9365 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  fs.writeFileSync(_0x32aecd, _0x10dcc8);
  let _0xd0b349;
  let _0x195824;
  try {
    _0xd0b349 = _0x563630.packname;
  } catch (_0x462fe9) {
    _0xd0b349 = "Asta-Md";
  }
  try {
    _0x195824 = _0x563630.author;
  } catch (_0x4e4d69) {
    _0x195824 = "";
  }
  const _0x3b47cc = new webp.Image();
  const _0x568dc0 = {
    "sticker-pack-id": "Asta-Md",
    "sticker-pack-name": _0xd0b349,
    "sticker-pack-publisher": _0x195824,
    emojis: _0x563630.categories ? _0x563630.categories : [""]
  };
  const _0x33d1e4 = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
  const _0x52afb6 = Buffer.from(JSON.stringify(_0x568dc0), "utf-8");
  const _0x5bdc63 = Buffer.concat([_0x33d1e4, _0x52afb6]);
  _0x5bdc63.writeUIntLE(_0x52afb6.length, 14, 4);
  await _0x3b47cc.load(_0x32aecd);
  fs.unlinkSync(_0x32aecd);
  _0x3b47cc.exif = _0x5bdc63;
  await _0x3b47cc.save(_0x5e9365);
  return _0x5e9365;
}
async function writeExifWebp(_0x38a80c, _0x8e963c) {
  const _0x182c66 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0xecd5c0 = path.join(tmpdir(), randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  fs.writeFileSync(_0x182c66, _0x38a80c);
  if (_0x8e963c.packname || _0x8e963c.author) {
    const _0x3f8a74 = new webp.Image();
    const _0x315c40 = {
      "sticker-pack-id": "Asta_Md",
      "sticker-pack-name": _0x8e963c.packname,
      "sticker-pack-publisher": _0x8e963c.author,
      emojis: _0x8e963c.categories ? _0x8e963c.categories : [""]
    };
    const _0x427b1b = await Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    const _0xbfd185 = await Buffer.from(JSON.stringify(_0x315c40), "utf-8");
    const _0x7b29c0 = await Buffer.concat([_0x427b1b, _0xbfd185]);
    await _0x7b29c0.writeUIntLE(_0xbfd185.length, 14, 4);
    await _0x3f8a74.load(_0x182c66);
    fs.unlinkSync(_0x182c66);
    _0x3f8a74.exif = _0x7b29c0;
    await _0x3f8a74.save(_0xecd5c0);
    return _0xecd5c0;
  }
}
module.exports = {
  imageToWebp: imageToWebp,
  videoToWebp: videoToWebp,
  writeExifImg: writeExifImg,
  writeExifVid: writeExifVid,
  writeExifWebp: writeExifWebp,
  toGif: toGif,
  toMp4: toMp4,
  EightD: EightD,
  _parseInput: _parseInput,
  resizeImage: resizeImage
};