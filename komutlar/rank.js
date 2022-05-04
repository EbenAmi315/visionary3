const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const cdb = require("orio.db");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let seyit = cdb.get(`level_${user.id}`) || 0;
  let hyperion = cdb.get(`exp_${user.id}`) || 0;
  let asunack = Math.floor(Math.pow(seyit / 0.1, 2));

  let herkes = cdb.all().filter(i => i.ID.startsWith("exp_")).sort((a, b) => b.data - a.data);
  let seviye = herkes.map(x => x.ID).indexOf(`exp_${user.id}`) + 1;


  const card = new canvacord.Rank()          //burdan sonrasını canvacordun docsuna bakarak güzelleştirebilirsiniz.
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(seviye)
    .setLevel(seyit)
    .setCurrentXP(hyperion)
    .setRequiredXP(asunack)
    .setStatus(user.presence?.status || "online")
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();
  
  return message.channel.send({ files: [new MessageAttachment(img, "rank.png")]});
};

exports.conf = {
  aliases: ['seviye']
};

module.exports.help = {
  name: "rank"
};