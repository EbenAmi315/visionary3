const Discord = require("discord.js");
let owners = ["171324416393871360", ""] //örnek: ["id1","id2"]
const util = require("util");

module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) {
      return;
    }
  
    const toEval = args.slice(0).join(" ");
  
    try {
      var evaled = clean(await eval(toEval));
      if (evaled.match(new RegExp(`${client.token}`, "g"))) evaled;
  
      message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
    } catch (err) {
      message.channel.send(`\`\`\`js\n${err}\`\`\``);
    }
  
    function clean(text)  {
      if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
      text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
    }
  };
  
module.exports.conf = {
  aliases: []
  
};

module.exports.help = {
  name: "eval",
  guildonly: true,
  guildPermission: 1

}; 