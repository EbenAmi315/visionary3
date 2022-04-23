const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const prefix = ayarlar.prefix;
const token = process.env.TOKEN
const db = require ('quick.db');
const Discord = require ('discord.js');

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