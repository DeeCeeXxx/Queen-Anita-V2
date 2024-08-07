const { plugins, smd, Config } = require("../lib");
let s_ser = true;

// Restart command
smd(
 {
   cmdname: "restart",
   info: "To restart bot",
   type: "tools",
   fromMe: s_ser,
   filename: __filename,
 },
 async (cld) => {
   const { exec } = require("child_process");
   cld.reply("Restarting");
   exec("pm2 restart all");
 }
);

// ShutDown command
smd(
  {
    cmdname: "shutdown",
    info: "To shutdown bot",
    type: "tools",
    fromMe: s_ser,
    filename: __filename,
  },
  async (cld) => {
    const { exec } = require("child_process");
    cld.reply("Shutting down");
    exec("pm2 stop all");
  }
 );

// Installed plugins command
smd(
 {
   cmdname: "plugins",
   alias: ["plugin"],
   type: "owner",
   info: "Shows list of all externally installed modules",
   fromMe: s_ser,
   filename: __filename,
   use: "<name>",
 },
 async (cld, pluginName) => {
   try {
     let installedPlugins = await plugins(cld, "plugins", pluginName);
     return await cld.send(
       !installedPlugins
         ? "*_There's no plugin install in " + Config.botname + "_*"
         : !pluginName
         ? "*All Installed Modules are:-*\n\n" + installedPlugins
         : installedPlugins
     );
   } catch (err) {
     cld.error(err + " \n\ncmdName plugins\n");
   }
 }
);

// Remove plugin command
smd(
 {
   pattern: "uninstall",
   alias: ["remove"],
   type: "owner",
   info: "removes external modules.",
   fromMe: s_ser,
   filename: __filename,
   use: "<plugin name>",
 },
 async (cld, pluginName) => {
   if (!pluginName) {
     return await cld.reply("*_Uhh Please, Provide Me Plugin Name_*");
   }
   if (pluginName === "alls") {
     return await cld.reply(await plugins("remove", "all", __dirname));
   }
   try {
     await cld.send(
       await plugins(cld, "remove", pluginName, __dirname),
       {},
       "",
       cld
     );
   } catch {}
 }
);

// Install plugin command
smd(
 {
   cmdname: "install",
   type: "owner",
   info: "Installs external modules..",
   fromMe: s_ser,
   filename: __filename,
   use: "<gist url>",
 },
 async (cld, pluginUrl) => {
   let url = pluginUrl
     ? pluginUrl
     : cld.quoted
     ? cld.quoted.text
     : "";
   if (!url.toLowerCase().includes("https")) {
     return await cld.send("*_Uhh Please, Provide Me Plugin Url_*");
   }
   await cld.reply(await plugins(cld, "install", url, __dirname));
 }
);