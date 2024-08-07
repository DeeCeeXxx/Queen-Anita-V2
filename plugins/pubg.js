let { smd, textToLogoGenerator, prefix } = require(lib_dir);
let pubg = {
  type: "pubg",
  info: "create pubg text logo.",
  filename: __filename,
};
let singleText = async (message, match, { cmdName }) => {
  try {
    let logo = {
      pubg1:
        "tao-cover-game-pubg-anh-bia-game-playerunknown-s-battlegrounds-401",
      pubg2: "tao-anh-bia-cover-facebook-game-pubg-407",
      pubg3: "tao-logo-pubg-truc-tuyen-mien-phi-714",
      pubg4: "tao-logo-mascot-pubg-online-sieu-ngau-716",
      pubg5: "tao-logo-pubg-truc-tuyen-nhieu-mau-sac-717",
      pubg6: "tao-logo-pubg-phong-cach-chibi-online-721",
    };
    if (!match) return message.reply(`*_Example : ${prefix + cmdName} Astro_*`);
    return await textToLogoGenerator(
      message,
      logo[cmdName],
      match,
      "asta",
      "1"
    );
  } catch (e) {
    return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
  }
};
//----------------------------------------------------------------------------------
for (cmd of ["pubg1", "pubg2", "pubg3", "pubg4", "pubg5", "pubg6"]) {
  smd({ cmdname: cmd, ...pubg }, singleText);
}
smd({ cmdname: "pubg7", ...pubg }, async (message, match, { cmdName }) => {
  try {
    let text1 = match ? match.split(";")[0] : "";
    let text2 = match ? match.split(";")[1] : "";
    if (!text2 || !text1)
      return await message.reply(
        `*_Example : ${prefix + cmdName} text1;text2_*`
      );
    return await textToLogoGenerator(
      message,
      "tao-logo-pubg-truc-tuyen-phong-cach-den-trang-715",
      text1,
      text2,
      "1"
    );
  } catch (e) {
    return await message.error(`${e}\n\ncmdName: ${cmdName}`, e);
  }
});
