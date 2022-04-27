const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports.run = async (client, message, args) => {

const prefix = "v!"

let buton = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Moderasyon ")
.setEmoji("🛠️")
.setCustomId("moderasyon")
let buton1 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Eğlence")
.setEmoji("💎")
.setCustomId("eğlence")
let buton2 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Bot ")
.setEmoji("⚙️")
.setCustomId("bot")
let buton3 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("AnaSayfa")
.setEmoji("🏠")
.setCustomId("anasayfa")
let buton4 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("Koruma")
.setEmoji("<a:kalkan:968935067613298788>")
.setCustomId("koruma")

let buton5 = new MessageButton()
.setStyle("DANGER")
.setLabel("Süre Doldu")
.setDisabled(true)
.setCustomId("süre doldu")

let embed = new MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setDescription(`> Botun komutları hakkında bilgi almak için istediğiniz seçeneğin butonuna tıklayın!`)
.addField("・`🛠️ Moderasyon` ↷",
"> Butonuna tıklayarak **Moderasyon Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`💎 Eğlence` ↷",
"> Butonuna tıklayarak **Eğlence Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`⚙️ Bot` ↷",
"> Butonuna tıklayarak **Bot Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`🏠 Anasayfa` ↷",
"> Butonuna tıklayarak bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

message.channel.send({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]}).then(async msg => {

const filter = x => x.user.id === message.author.id
let collector = msg.createMessageComponentCollector({ filter, time: 300000 })

collector.on("collect", async button => {
if(button.customId === "moderasyon") {

let moderasyon = new MessageEmbed()
.setAuthor(`${client.user.username} Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`> Botun moderasyon komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}ban <@üye>** Üyeyi banlarsınız.
**${prefix}kick <@üye> <Sebebi Belirtiniz> ** Üyeyi kicklersiniz.
**${prefix}sunucubilgi** Sunucu hakkında bilgi alırsınız.
**${prefix}say** Sunucunuzdaki toplam üye sayısını Insan ve bot olarak 2 ayrı sekilde de belirtir. Komutun işlevi kısaca budur

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "🛠️ Moderasyon", embeds: [moderasyon], components: [new MessageActionRow({ components: [buton3]})]})

}

if(button.customId === "kullanıcı") {

let eğlence = new MessageEmbed()
.setAuthor(`${client.user.username} Eğlence Komutları`, client.user.avatarURL())
.setDescription(`> Botun kullanıcı komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}sarıl <@üye>** Etiketlediğiniz Kişiye Sarılırsınız.
**${prefix}oylama** Oylama Yapmanızı Sağlar.
**${prefix}hediye-ver <@üye>** Etiketlediğiniz Kişiye Hediye Verirsiniz.

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "💎 Eğlence", embeds: [eğlence], components: [new MessageActionRow({ components: [buton3]})]})

}

if(button.customId === "bot") {

let bot = new MessageEmbed()
.setAuthor(`${client.user.username} Sahip Komutları`, client.user.avatarURL())
.setDescription(`> Bot Sahibinin komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}reboot** Bot sahibi Bota Reboot Atmasına Yarar.
**${prefix}eval** Botun sahibi komutları denemesine yarar.
**${prefix}istatistik** Botun Sistemi Hakkında bilgi alırsınız.
**${prefix}botbilgi** Botun Üyeleri ve Sunucuları Hakkında bilgi alırsınız.


`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "⚙️ Bot", embeds: [bot], components: [new MessageActionRow({ components: [buton3]})]})

}
if(button.customId === "koruma") {

let koruma = new MessageEmbed()
.setAuthor(`${client.user.username} Eğlence Komutları`, client.user.avatarURL())
.setDescription(`> Botun kullanıcı komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}sarıl <@üye>** Etiketlediğiniz Kişiye Sarılırsınız.
**${prefix}oylama** Oylama Yapmanızı Sağlar.
**${prefix}hediye-ver <@üye>** Etiketlediğiniz Kişiye Hediye Verirsiniz.

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "<a:kalkan:968935067613298788> Koruma", embeds: [koruma], components: [new MessageActionRow({ components: [buton4]})]})

}

if(button.customId === "anasayfa") {

msg.edit({content: ":house: Ana Sayfa", embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})

}

button.deferUpdate();
})

collector.on("end", async button => {

msg.edit({content: "Button click Timeout", embeds: [embed], components: [new MessageActionRow({ components: [buton4]})]})

        })
    })
};
module.exports.conf = {
  aliases: []
};
module.exports.help = {
  name: "yardım"
};