const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const prefix = ayarlar.prefix;
const token = process.env.TOKEN
const db = require ('quick.db');
const Discord = require('discord.js');
const msg = require('message-js');
const moment = require("moment");
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

if(!token){
  console.log("Bu Proje Glitch Özel Uyarlanmıştır .env Dosyasına Discord Bot Tokeninizi Yazınız!")
} else { 
client.login(token).catch(e => {
  console.log("Projeye Yazılan Token Hatalı veya Discord Botunuzun Intentleri Kapalı!")
})
}



const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);



{
const { MessageButton, MessageActionRow } = require("discord.js")
const edb = require("croxydb")
client.on("interactionCreate", async interaction => {
if (!interaction.isButton()) return;

let user = edb.get(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`) 

if(interaction.customId == "evet_oylama") {
if(!user) {
edb.add(`oylamaEVET_${interaction.message.id}`, 1)

let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"

let evet = new MessageButton()
.setStyle("SUCCESS")
.setLabel(`(${dataEvet}) Evet`)
.setCustomId("evet_oylama")
let hayır = new MessageButton()
.setStyle("DANGER")
.setLabel(`(${dataHayır}) Hayır`)
.setCustomId("hayır_oylama")

interaction.message.edit({components: [new MessageActionRow({ components:  [evet, hayır] })]})

edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
}

interaction.deferUpdate();
}

if(interaction.customId == "hayır_oylama") {
if(!user) {
edb.add(`oylamaHAYIR_${interaction.message.id}`, 1)

let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"

let evet = new MessageButton()
.setStyle("SUCCESS")
.setLabel(`(${dataEvet}) Evet`)
.setCustomId("evet_oylama")
let hayır = new MessageButton()
.setStyle("DANGER")
.setLabel(`(${dataHayır}) Hayır`)
.setCustomId("hayır_oylama")

interaction.message.edit({ components: [new MessageActionRow({ components:  [evet, hayır] })] })

edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
}

interaction.deferUpdate();
}

})
}


    client.on("messageCreate", async message => {

     if (message.author.bot) return;
      if (!message.guild) return;
      if (message.content.includes(`.afk`)) return;
    
      if (await db.fetch(`afk_${message.author.id}`)) {
        db.delete(`afk_${message.author.id}`);
        db.delete(`afk_süre_${message.author.id}`);
        message
          .channel.send(`${client.emojis.cache.get(ayarlar.mavitik)} Afk sistemi sıfırlandı`)
          .then((msg) => setTimeout(() => msg.delete(), 6000));
      }
    
      var USER = message.mentions.users.first();
      if (!USER) return;
      var REASON = await db.fetch(`afk_${USER.id}`);
    
      if (REASON) {
        let süre = await db.fetch(`afk_süre_${USER.id}`);
        let timeObj = ms(Date.now() - süre);
        if (db.has(`üyelikk_${USER.id}`)) {
          message.delete();
          const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
    
            .setDescription(
              `${client.emojis.cache.get(ayarlar.maviyildiz)} \`${USER.tag}\` Adlı Gold üyeyi rahatsız edemezsiniz. ${client.emojis.cache.get(ayarlar.maviyildiz)}\nAFK süresi: \`${timeObj.hours}\`** saat** \`${timeObj.minutes}\`** dakika** \`${timeObj.seconds}\` ** saniye**\nSebep:\n\`${REASON}\``
            );
    
          message.channel.send({embeds:[embed]}).then((msg) => setTimeout(() => msg.delete(), 6000));
        } else
          message.channel
            .send(
              `\`${USER.tag}\` kullanıcısı AFK\nAFK süresi: \`${timeObj.hours}\`** saat** \`${timeObj.minutes}\`** dakika** \`${timeObj.seconds}\` ** saniye**\nSebep:\n\`${REASON}\` `
            )
            .then((msg) => setTimeout(() => msg.delete(), 6000));
      }
    });

    client.on("messageCreate", (message) => { 
  
    const xdxd1 = message.author.id
      const goldUyeler1 = db.has(`üyelikk_${message.author.id}`)
      const goldUyeler = goldUyeler1
      if(db.has(`üyelikk_${message.author.id}`)  && (!db.has(`goldbildirim.${message.author.id}`) || (db.get(`goldbildirim.${message.author.id}`) + (1 * 60 * 60 * 1000)) < Date.now())) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${client.emojis.cache.get(ayarlar.gold)}Sıkı Durun Bir Gold Üye Belirdi <@${message.author.id}>`)
        .setColor('GOLD');
        message.channel.send({embeds:[embed]}).then((msg) => setTimeout(() => msg.delete(), 5000));
        db.set(`goldbildirim.${message.author.id}`, Date.now());
    };
  });

client.on("messageCreate", async msg => {
      const request = require("node-superfetch");
      const db = require("quick.db");
        if (db.has(`lvll_${msg.guild.id}`) === true) {
          let memberChannel = await db.fetch(`sk_${msg.guild.id}`);
          
          let level =  await db.fetch(`seviye_${msg.author.id + msg.guild.id}`)
          
          if (msg.channel.type === "dm") return;
          if (msg.author.bot) return;
    
          if (msg.content.length > 40) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 4);
          }
          if (msg.content.length > 35) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 4);
          }
          if (msg.content.length > 30) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 3);
          }
          if (msg.content.length > 25) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 3);
          }
          if (msg.content.length > 20) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 2);
          }
          if (msg.content.length > 15) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 2);
          }
          if (msg.content.length > 10) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
          }
          if (msg.content.length < 5) {
            db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
          }
          if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
            db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);
            if (memberChannel) {
              if (db.has(`üyelikk_${msg.author.id}`)) {
                msg.guild.channels
                  .cache.get(memberChannel)
                  .send(
                    `${client.emojis.cache.get(ayarlar.maviyildiz)} Kral <@${
                      msg.author.id
                    }>, Seviye atladın ve \`${db.fetch(
                      `seviye_${msg.author.id + msg.guild.id}`
                    )}\` seviye oldun!`
                  );
              } else
                msg.guild.channels
                  .cache.get(memberChannel)
                  .send(
                    `Tebrik ederim <@${
                      msg.author.id
                    }>! Seviye atladın ve \`${db.fetch(
                      `seviye_${msg.author.id + msg.guild.id}`
                    )}\` seviye oldun!`
                  );
            } else if (db.has(`üyelikk_${msg.author.id}`)) {
              msg.channel.send(
                `${client.emojis.cache.get(ayarlar.maviyildiz)} Kral <@${
                  msg.author.id
                }>, Seviye atladın ve \`${db.fetch(
                  `seviye_${msg.author.id + msg.guild.id}`
                )}\` seviye oldun!`
              );
            } else
              msg.channel.send(
                `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve \`${db.fetch(
                  `seviye_${msg.author.id + msg.guild.id}`
                )}\` seviye oldun!`
              );
    
            db.delete(`puancik_${msg.author.id + msg.guild.id}`);
          }
        } else return;
    });

client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == 'acik') {    
  if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {

                  return msg.reply(
                     `Aleyküm Selam kardeşim, Hoşgeldin ${client.emojis.cache.get(ayarlar.yildiz)}`)
          } catch(err) {
          }
      }
    }if(!i) return;
  });