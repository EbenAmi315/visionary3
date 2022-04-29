const client = require("../index");
client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`)
const sunucu = client.guilds.cache.size.toLocaleString()

 var oyun = [
       "Visionary 2022 Büyüyoruz!",
       "Yeni Ortak! ✬ mexelynd#1881",
       `Visionary Şu an ${sunucu} sunucuda`];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 3 * 2500);
});