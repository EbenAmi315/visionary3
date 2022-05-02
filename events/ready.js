const client = require("../index");
client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`)
const sunucu = client.guilds.cache.size.toLocaleString()
const kullanıcı = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()

 var oyun = [
       `Dangerio Hosting Hep Güçlü Sunucularıyla discord.gg/4Xpwwz6pgN`,
       `Visionary Şu an ${sunucu} sunucuda`,
       `Visionary ${kullanıcı} Kullanıcıya Hizmet Veriyor`];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 4 * 5000);
});