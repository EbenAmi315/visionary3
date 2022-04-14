const { MessageEmbed } = require("discord.js") 
const ms = require("ms")
exports.run = async(client, message, args) => {
    const prefix = client.db.get(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    if (!args[0]) {
        const slowmodeError2 = new MessageEmbed()
            .setDescription(`Lütfen Geçerli Bir Zaman Yaz!\n\nZaman Kavramları - h(saat), m(dakika), s(saniye)\n(Örnek -  ${prefix}slowmode 5s)`)
            .setColor('RED')
        return message.channel.send({ embeds: [slowmodeError2] })
    }
    const currentSlowmode = message.channel.rateLimitPerUser
    const reason = args[1] ? args.slice(1).join(" ") : 'Sebep Yok!'

    if (args[0] === 'off') {
        if (currentSlowmode === 0) {
            const slowmodeOfferror = new MessageEmbed()
                .setDescription(`Yavaş Mod Zaten Kapalı!`)
                .setColor('RED')
            return message.channel.send({ embeds: [slowmodeOfferror] })
        }
        message.channel.setRateLimitPerUser(0, reason)
        const slowmodeOff = new MessageEmbed()
            .setDescription(`Yavaş Mod Kapatıldı!`)
            .setColor('BLUE')

        return message.channel.send({embeds: [slowmodeOff]})
    }

    const time = ms(args[0]) / 1000
    const slowmodeError3 = new MessageEmbed()
        .setDescription(`Lütfen Geçerli Bir Zaman Yaz!\n\nZaman Kavramları - h(saat), m(dakika), s(saniye)\n(Örnek -  ${prefix}slowmode 5s)`)
        .setColor('RED')
    if (isNaN(time)) {
        return message.channel.send({embeds: [slowmodeError3]})
    }

    if (time > 21600000) {
        const slowmodeError4 = new MessageEmbed()
            .setDescription(`Yavaş Mod En Fazla 6 Saat Olabilir!`)
            .setColor('RED')

        return message.channel.send({embeds: [slowmodeError4]})
    }

    if (currentSlowmode === time) {
        const slowmodeError5 = new MessageEmbed()
            .setDescription(`Yavaş Mod Zaten Ayarlanmış |  ${args[0]}`)
            .setColor('RED')
        return message.channel.send({embeds: [slowmodeError5]})
    }

    let slowmode = await message.channel.setRateLimitPerUser(time, reason)
    let afterSlowmode = message.channel.rateLimitPerUser
    if (afterSlowmode > 0) {
        const embed = new MessageEmbed()
            .setTitle(`Yavaş Mod Ayarlandı!`)
            .addField(`Yavaş Mod Süresi`, args[0])
            .addField(`Sebep`, reason)
            .setColor('BLUE')

        return message.channel.send({ embeds: [embed] })
    } else if (afterSlowmode === 0) {
        return message.channel.send({ embeds: [slowmodeError3] })
    }


}
exports.conf = {
    aliases: []
}
exports.help = {
    name: 'slowmode'
}