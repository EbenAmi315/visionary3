
const Discord = require('discord.js');
const prettyMilliseconds = require("pretty-ms");

module.exports = {

name: "istatistik", 

description: ":sparkles: Botunuzun İstatistiğini sıralar", 

 options: [], 

run: async (client, interaction) => {

const Discord = require("discord.js")
const moment = require("moment") 
moment.locale("tr") 
const embed = new Discord.MessageEmbed() 
.setAuthor(`${client.user.username} İstatistikler.`, client.user.avatarURL({size: 1024}))
.setColor("#FF0000") 
.addField("**Oluşturulma Tarihi:**", `\n${client.user.createdAt}`)
.addField("**Ram Kullanma Oranı:**", `\n**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** MB`)
.addField("**Bot Kurucusu:**", `\n<@171324416393871360> & <@898890569051422720>`)
.addField("**Kütüphane**", `\nDiscordJS`)
.addField("**Sunucu:**", `\n${client.guilds.cache.size}`)
.addField("**Üye:**", `\n${client.guilds.cache.reduce((a,b)=> a + b.memberCount, 0)}`)
.addField("**Ping**", `\n${client.ws.ping}ms`)
.addField("**Aktiflik**", `\n**${prettyMilliseconds(client.uptime)}**`)
.setFooter("Visionary | Copyright © 2022 Tüm Hakları Saklıdır", client.user.displayAvatarURL())

interaction.reply({

 embeds: [embed]

})}}