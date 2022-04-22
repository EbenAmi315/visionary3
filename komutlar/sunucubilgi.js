const Discord = require('discord.js')
const moment = require('moment')
require("moment-duration-format")

    exports.run = async(client, message, args) => {
        // Let tanımları
        let sunucuikon = message.guild.iconURL({dynamic: true})
        let zaman= new Date().getTime() - message.guild.createdAt.getTime()

        // Zaman
        const kurulus = moment.duration(zaman).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 

        message.channel.createInvite().then(inv => {
            const bilgi = new Discord.MessageEmbed()
            .setDescription(`
                **Sunucu İsmi - \`${message.guild.name}\`
                Sunucu Kurucusu - <@${message.guild.ownerId}>
                Sunucudaki Üye Sayısı - \`${message.guild.memberCount}\`
                Sunucudaki Rol Sayısı - \`${message.guild.roles.cache.size || "Rol Yok"}\`
                Sunucudaki Kanal Sayısı - \`${message.guild.channels.cache.size}\`
                Sunucu Açılalı - \`${kurulus} Olmuş\`
                Sunucu İD'si - \`${message.guild.id}\`
                Sunucunun Avatar Linki - [Tıkla](${sunucuikon})
                Sunucunun Davet Linki - ${inv.url}**`)
                .setColor('BLUE')
                .setTimestamp()
                .setThumbnail(sunucuikon)
                .setTitle(`**Sunucu Bilgi**`)
  message.channel.send({embeds: [bilgi]})
        })
    }

exports.conf = {

    aliases: ["sunucubilgi"]
}

exports.help = {
    name: 'sunucu-bilgi'
}