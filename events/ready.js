const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`.bgRed)
    client.user.setActivity(`Umut Bayraktar ♥ Code Share`)
});
