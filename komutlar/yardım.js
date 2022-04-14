const Command = require('/komutlar');
const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'yardım',
            isSlash: false,
            isMessage: true,
        });
    }

    messageRun({ message }) {
        const rowr = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("yrdm")
                    .setPlaceholder("Yardım")
                    .addOptions([
                        {
                            label: `Genel`,
                            description: `Bot içerisindeki genel komutlar`,
                            value: 'option',
                        },
                        {
                            label: "Moderasyon",
                            description: "Bot içerisindeki moderasyon komutları",
                            value: "option-2"
                        },
                        {
                            label: "Eğlence",
                            description: "Bot içerisindeki eğlence komutları",
                            value: "option-3"
                        },
                    ])
            )

        const embed = new MessageEmbed()
            .setDescription(`genel komutlar buraya`)
            .setColor("RANDOM")
            .setAuthor({ name: "Codare", url: "https://codare.fun" })

        const embed2 = new MessageEmbed()
            .setDescription("moderasyon komutları buraya")
            .setColor("RANDOM")
            .setAuthor({ name: "Codare", url: "https://codare.fun" })

        const embed3 = new MessageEmbed()
            .setDescription("eğlence komutları buraya")
            .setColor("RANDOM")
            .setAuthor({ name: "Codare", url: "https://codare.fun" })

        const filter = i => i.customId === 'yrdm' && i.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
            let choice = i.values[0]
            if (choice === 'option') {
                await i.reply({ embeds: [embed], ephemeral: true });
            } else if(choice === "option-2") {
                await i.reply({ embeds: [embed2], ephemeral: true });
            } else if(choice === "option-3") {
                await i.reply({ embeds: [embed3], ephemeral: true })
            }
        });

        collector.on('end', collected => {});


        message.channel.send({ content: `${message.client.user.username} Yardım Menüsü (Menü 15 saniye sonra işlevini kaybedecektir)`, components: [rowr] })
    }
};