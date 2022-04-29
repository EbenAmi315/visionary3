const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Yapımcılarım!')
  .setDescription('**》 Yapımcım 《 ** <@171324416393871360> \n **》 Ortağım 《 **<@815209107887751179>')
  .setColor("RANDOM")
  message.channel.send({embeds: [embed]})
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
};