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
.setLabel("Genel ")
.setEmoji("⚙️")
.setCustomId("genel")
let buton3 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("Koruma")
.setEmoji("🛡")
.setCustomId("koruma")
let buton4 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("AnaSayfa")
.setEmoji("🏠")
.setCustomId("anasayfa")
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
.addField("・`🛡 Koruma ` ↷",
"> Butonuna tıklayarak **Koruma Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`🏠 Anasayfa` ↷",
"> Butonuna tıklayarak bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

message.channel.send({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3, buton4]})]}).then(async msg => {

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
**${prefix}say** Sunucunuzdaki toplam üye sayısını Insan ve bot olarak 2 ayrı sekilde de belirtir.
**${prefix}sil <miktar>** Mesajları Silmeye Yarar
**${prefix}oylama** Oylama Yaparsınız
**${prefix}küfürengel** Küfür Engel Sistemini Gösterir

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "🛠️ Moderasyon", embeds: [moderasyon], components: [new MessageActionRow({ components: [buton4]})]})

}

if(button.customId === "eğlence") {

let eğlence = new MessageEmbed()
.setAuthor(`${client.user.username} Eğlence Komutları`, client.user.avatarURL())
.setDescription(`> Botun Eğlence komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}sarıl <@üye>** Etiketlediğiniz Kişiye Sarılırsınız.
**${prefix}oylama** Oylama Yapmanızı Sağlar.
**${prefix}hediye-ver <@üye>** Etiketlediğiniz Kişiye Hediye Verirsiniz.
**${prefix}öp <@üye>** Etiketlediğiniz Kişiyi Öpersiniz
**${prefix}aşkölçer <@üye>** Etiketlediğiniz Kişiyle Aşkınızı Ölçersiniz

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "💎 Eğlence", embeds: [eğlence], components: [new MessageActionRow({ components: [buton4]})]})

}

if(button.customId === "genel") {

let bot = new MessageEmbed()
.setAuthor(`${client.user.username} Sahip Komutları`, client.user.avatarURL())
.setDescription(`> Botun Genel komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}dangerio** Dangerio Hosting İle İlgili Bilgi Alırsınız! <3
**${prefix}botbilgi** Botun Üyeleri ve Sunucuları Hakkında bilgi alırsınız.
**${prefix}yapımcım** Botun Yapımcılarını Gösterir
**${prefix}nuke** Kanalı Silip Yeniden açar
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "⚙️ Bot", embeds: [bot], components: [new MessageActionRow({ components: [buton4]})]})

}
if(button.customId === "koruma") {

let koruma = new MessageEmbed()
.setAuthor(`${client.user.username} Koruma Komutları`, client.user.avatarURL())
.setDescription(`> Botun Koruma komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}ÇOK YAKINDA!**
**${prefix}ÇOK YAKINDA!**
**${prefix}ÇOK YAKINDA!**
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "🛡 Koruma", embeds: [koruma], components: [new MessageActionRow({ components: [buton4]})]})

}

if(button.customId === "anasayfa") {

msg.edit({content: ":house: Ana Sayfa", embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3, buton4]})]})

}

button.deferUpdate();
})

collector.on("end", async button => {

msg.edit({content: "Button click Timeout", embeds: [embed], components: [new MessageActionRow({ components: [buton5]})]})

        })
    })
};
module.exports.conf = {
  aliases: ['help']
};
module.exports.help = {
  name: "yardım"
};