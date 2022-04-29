const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
  .setDescription('Oyuncular Şehri')
  .setColor(0x00ffff)
  .addField("**》 Yapımcım 《**", `<@171324416393871360>`)
  .addField("**》 Ortağım 《**", `<@815209107887751179>`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Developed by AVNNN',
  usage: 'yapımcım'
}