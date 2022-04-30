const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let kisi = message.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return message.reply("Kime öpeceğini Yazman Gerek 😥");

  if (kisi.id === message.author.id) return message.reply("Çok Üzgünüm ama Kendini Öpemezsin");
 
    const embed = new Discord.MessageEmbed()
      .setDescription("<@"+kisi.id+">, <@" + message.author.id + "> Seni öpmek İstiyor  💘💗💖💕💟💞💝💓❤")
      .setColor("RED")
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/966832831974223962/969962804599717918/8Sbz.gif");
    message.channel.send({content: "<@"+kisi.id+">", embeds: [embed]});

};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "öp"
};