const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({content: "`Bu komutu kullanmak için **YÖNETİCİ** yetkisine sahip olmalısın!`"});
let csc = message.channel
  
 message.channel.clone({ name: csc.name, permissions: csc.withPermissions, topic: csc.topic, bitrate: this.bitrate })
  message.channel.delete();
  
};
module.exports.conf = {
aliases:[]
};
module.exports.help = {
  name: 'nuke'
};