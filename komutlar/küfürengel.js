const Discord = require("discord.js");
const db = require("orio.db");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content: "<a:carpi:963791744464465940> Yetersiz Yetki Gereken => YÖNETİCİ" }).catch(e => {})

    if (!args[0] || !["aç", "kapat"].includes(args[0])){
      const ce = new Discord.MessageEmbed()
      .setTitle("LÜTFEN KOMUTU DOĞRU KULLAN")
      .setColor("RED")
      .addField("Sadece Belirli Bir Kanalda Açmak İçin", "`v!küfür-engel aç #KANAL`")
      .addField("Tüm Sunucuda Açmak İçin", "`v!küfür-engel aç`")
      .addField("Sistemi Belirli Bir Kanalda Kapatmak İçin", "`v!küfür-engel kapat #KANAL`")
      .addField("Tüm Sunucuda Kapatmak İçin", "`v!küfür-engel kapat`")
      message.channel.send({embeds: [ce]}).catch(e => {})
      }
  
  if(args[0] === "aç"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.set("cd2."+cc.id+message.guild.id, "Kanal")
      message.channel.send({content: "**<#"+cc.id+"> İsimli Kanalda Küfür Engelleme Sistemi Açıldı! <a:tik:963791746003763230>**" }).catch(e => {})
    } else {
      db.set("cd1."+message.guild.id, "Sunucu")
      message.channel.send({content: "**Küfür Engelleme Sistemi Tüm Sunucuda Açıldı!<a:tik:963791746003763230>**" }).catch(e => {})
    }
  }
  
   if(args[0] === "kapat"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.delete("cd2."+cc.id+message.guild.id)
      message.channel.send({content: "**<#"+cc.id+"> İsimli Kanalda Küfür Engelleme Sistemi Kapatıldı!<a:tik:963791746003763230>**" }).catch(e => {})
    } else {
      db.delete("cd1."+message.guild.id)
      message.channel.send({content: "**Küfür Engelleme Sistemi Tüm Sunucuda Kapatıldı!<a:tik:963791746003763230>**" }).catch(e => {})
    }
  }
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "küfür-engel"
};