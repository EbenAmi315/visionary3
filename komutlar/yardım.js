// Botumuzda kullanacağımız embed ve button gibi şeyler için gerekli olanları buraya çağırıyoruz.
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    help:{
        name:"yardım"
    },
    conf:{
        aliases:['help']
    },
    async run(client,interaction) {

         /*
         Botumuz için yardım sekmesi oluşturacağız. Yardım komutu sayfalı olması için uğraşacağız.
         Bu yüzden buttonları da kullanacağız.
         */

         // Butonlarımızı oluşturuyoruz.
         const yardim = new MessageActionRow()
         .addComponents(
             new MessageButton()
                 .setCustomId('yardim')
                 .setLabel('Yardım Sekmesi')
                 .setEmoji('ℹ️')
                 .setStyle('PRIMARY'),
         );
         const yardim2 = new MessageActionRow()
         .addComponents(
             new MessageButton()
                 .setCustomId('diger')
                 .setLabel('Diğer Bilgiler')
                 .setEmoji('✅')
                 .setStyle('SECONDARY'),
         );

         const embed = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle('Visionary | Yardım')
         .setDescription(`Merhaba ${interaction.author}`);

     await interaction.channel.send({ ephemeral: true, embeds: [embed], components: [yardim,yardim2] });
     // Butonu kimin kullanabileceğini ayarlıyoruz. Burada ben sadece komutu kullanan kişi olarak ayarladım.

     const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 600000 });

collector.on('collect', async i => {
    if(i.user.id === interaction.author){
    if (i.customId === 'yardim') {
        const embed2 = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle('Visionary | Yardım')
         .setDescription(`Merhaba len ${interaction.member.user}`);
        await i.update({ embeds : [embed2], components: [yardim2] });
    }else if (i.customId === 'diger') {
        const embed2 = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle('Visionary | Yardım')
         .setDescription(`Merhaba len ${interaction.member.user}`);
        await i.update({ embeds : [embed2], components: [yardim] });
    }
}else{
    await i.reply({ content: `Bu butonu sen kullanamazsın!`, ephemeral: true });
}
});

collector.on('end', collected => interaction.editReply({components:[]}));

 

        },
};