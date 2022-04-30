const client = require("../index");
client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`)
const sunucu = client.guilds.cache.size.toLocaleString()
const kullanıcı = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()

 var oyun = [
       `Visionary 2022 Büyüyoruz!`,
       `Yeni Ortak! ✬ mexelynd#1881`,
       `Visionary Şu an ${sunucu} sunucuda`,
       `Visionary ${kullanıcı} Kullanıcıya Hizmet Veriyor`,
      `Dangerio Hosting Hep Güçlü Sunucularıyla discord.gg/4Xpwwz6pgN`];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 5 * 2500);
});