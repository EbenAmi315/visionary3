const {MessageEmbed, MessageActionRow, MessageButtons, Permissions} = require('discord.js');
const ms = require("ms");

module.exports = {
  name:"timeout",
  description: "Bot ile kullanıcılara timeout atabilirsiniz.",
  type: "CHAT_INPUT",
  options: [
    {
      name:"kullanıcı",
      description:"Hedef Kullanıcı.",
      type: 6,
      required: true
    },
    {
      name:"süre",
      description:"Hedef Süre: 1d, 1h, 1m",
      type: 3,
      required: true
    },
    {
      name:"sebep",
      description:"Bir Sebep Belirt.",
      type: 3
    }
  ],

 run: async(client, interaction) => {
  
   let user = interaction.options.getUser("kullanıcı")
   let sure = interaction.options.getString("süre")
   let seb = interaction.options.getString("sebep") || "Sebep Girilmemiş."
   
   const g = new MessageEmbed()
   .setDescription("<:hayir:948649220355801108> geçerli bir **süre** belirt. Örn/ 1d, 1h, 1m")
   
  let süre = ms(sure)
 let uye = interaction.guild.members.cache.get(user.id)
 
 const r = new MessageEmbed()
 .setDescription("<:hayir:948649220355801108> Yöneticilere **zaman aşımı** uygulayamassın.")
 
 
 
const {Permissions} = require("discord.js")

const bot = interaction.guild.members.cache.get(client.user.id)

if(!bot.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({content: "<:hayir:948649220355801108> Beni kullanabilmek için **Yönetici** yetkisi lazım.", ephemeral: true})



if(!uye.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({content: "<:hayir:948649220355801108> Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkin lazım.", ephemeral: true})
 
  if(uye.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({content: "Yöneticilere zamanaşımı uygulayamazsın", ephemeral: true})
  
  if(!ms(sure)) return interaction.reply({embeds: [g], ephemerla: true})
   
   let member = interaction.guild.members.cache.get(user.id)
   
   const h = new MessageEmbed()
   .setDescription(`\`\`${user.tag}\`\`, \`\`${seb}\`\` sebebi ile \`\`${sure}\`\` süre boyunca susturuldu.`)
   
   member.timeout(süre, seb)
   interaction.reply({embeds: [h]})
   
 }
  
  
  
  
}