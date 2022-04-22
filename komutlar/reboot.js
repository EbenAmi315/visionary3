const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
if(message.author.id !== "171324416393871360") return message.channel.send("Sahibim Değilsin Bu Komutu Kullanamazsın!")
const embed = new Discord.MessageEmbed()
.setTitle('Reboot')
.setDescription("Şu an "+ client.user.username + " bot'u yeniden başlatmak üzeresin.")
.addField('Şu anki Ping Değeri:', '**'+client.ws.ping+'** ms!')
.addField('__SEÇENEKLER__', '**devam**')
.setFooter({ text: client.user.username, iconURL: client.user.avatarURL })
.setTimestamp()
.setColor('RED')
message.channel.send({ embeds: [embed] })

.then(() => {
  const filter = m => m.content.includes('devam');
  message.channel.awaitMessages({ filter: filter, max: 1 })

  .then((collected) => {
      message.channel.send("**Bot yeniden başlatılıyor...**").then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send('Yeniden başlatma işlemi iptal edildi.');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yb', 'rb','reboot',],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};