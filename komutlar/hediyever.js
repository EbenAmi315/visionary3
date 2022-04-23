const Discord = require('discord.js');

exports.run = (client, message, params) => {

const hediyeci = message.mentions.users.first() 
if (!hediyeci) return message.channel.send("Kime Hediye Alıyoruz?")

  //Dcs Ekibi

      const hediye = new Discord.MessageEmbed()
    .setDescription(`${hediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
    .setColor("RANDOM")
    .setTimestamp()
    .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")
    message.channel.send({embeds: [hediye]})
};
exports.conf = {
  aliases: ["hediye","h-v","hv"]
};
//Dcs Ekibi
exports.help = {
  name: 'hediye-ver'
};