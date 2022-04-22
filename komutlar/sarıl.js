const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let kisi = message.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return message.reply("Kime Sarılacağım Yazman Gerek 😥");

  if (kisi.id === message.author.id) return message.reply("Çok Üzgünüm ama Kendine Sarılamassın!");
 
    const embed = new Discord.MessageEmbed()
      .setDescription("<@"+kisi.id+">, <@" + message.author.id + "> Sana Sarılmak İstiyor 💏 💘💗💖💕💟💞💝💓❤")
      .setColor("RED")
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/737347015251460156/747779132422881290/tenor.gif?width=163&height=147");
    message.channel.send({content: "<@"+kisi.id+">", embeds: [embed]});

};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sarıl"
};