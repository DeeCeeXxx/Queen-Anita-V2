var commands = [];
function cmd(_0x440d05, _0x57163d) {
  var _0x6094e7 = _0x440d05;
  _0x6094e7.function = _0x57163d;
  if (!_0x6094e7.pattern && _0x440d05.cmdname) {
    _0x6094e7.pattern = _0x440d05.cmdname;
  }
  if (!_0x6094e7.alias) {
    _0x6094e7.alias = [];
  }
  if (!_0x6094e7.dontAddCommandList) {
    _0x6094e7.dontAddCommandList = false;
  }
  if (!_0x6094e7.desc) {
    _0x6094e7.desc = _0x440d05.info ? _0x440d05.info : "";
  }
  if (!_0x6094e7.fromMe) {
    _0x6094e7.fromMe = false;
  }
  if (!_0x6094e7.category) {
    _0x6094e7.category = _0x440d05.type ? _0x440d05.type : "misc";
  }
  _0x6094e7.info = _0x6094e7.desc;
  _0x6094e7.type = _0x6094e7.category;
  if (!_0x6094e7.use) {
    _0x6094e7.use = "";
  }
  if (!_0x6094e7.filename) {
    _0x6094e7.filename = "Not Provided";
  }
  commands.push(_0x6094e7);
  return _0x6094e7;
}
const Module = {
  export: cmd
};
module.exports = {
  cmd: cmd,
  amd: cmd,
  AddCommand: cmd,
  Function: cmd,
  Module: Module,
  smd: cmd,
  commands: commands,
  bot: cmd
};