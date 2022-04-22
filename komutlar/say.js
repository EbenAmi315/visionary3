const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
    const members = message.guild.members.cache


    const embed = new Discord.MessageEmbed()
    .addField('Sunucunun üye istatistiği', "Toplam üye sayısı "+ `${message.guild.memberCount}` + `\n İnsan olan üye sayısı: ` + `${members.filter(member => !member.user.bot).size}` + '\n Bot olan üye sayısı: ' + `${members.filter(member => member.user.bot).size}`)
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "say"
};