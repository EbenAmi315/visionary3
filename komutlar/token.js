const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
  ;
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Token Hazırlanıyor...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Al Sana Token**`).setImage('https://thumbs.gfycat.com/CreepyWeightyBittern-max-1mb.gif'))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'token'
};