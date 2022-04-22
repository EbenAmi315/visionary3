const Discord = require("discord.js");
const moment = require("moment");
const momentduration = require("moment-duration-format");

exports.run = async (bot, message, args) => {

  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const cse = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`⭐ ${bot.user.username} İstatistik`)
    .setThumbnail(bot.user.avatarURL())
    .setFooter(":copyright: Visionary 2022 Tüm Hakları Saklıdır!", bot.user.avatarURL())

    .setDescription(
      `✴  **Botun Yapımcısı**\n**• \`Android#6525\`**\n \n**:eight_pointed_black_star:  Toplam Kullanıcı:** __` +
        bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
        `\n__**✴  Toplam Sunucu:** __` +
        bot.guilds.cache.size.toLocaleString() +
        `\n__**✴  Toplam Kanal:** __` +
        bot.channels.cache.size.toLocaleString() +
        `__\n \n` +
        `✴  **Bellek Kullanımı: **__` +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        ` MB__\n` +
        `✴   **Çalışma Süresi: **__${seksizaman}__\n \n` +
        `✴  **Discord.JS Sürüm:** __v` +
        Discord.version +
        `__`
    )

  return message.channel.send({ embeds: [cse] })
};

exports.conf = {
  aliases: ["b", "statistics",'istatistik']
};

exports.help = {
  name: "botbilgi"
}