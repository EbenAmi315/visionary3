const {SlashCommandBuilder} = require(`@discordjs/builders`)

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`timeout`).setDescription(`Timeouts the member on the server.`)
  .addUserOption((option) => option.setName(`user`).setDescription(`Person who you want to put in timeout.`).setRequired(true))
  .addStringOption((option) => option.setName(`time`).setDescription(`For how much time you want to timeout member.`).setRequired(true))
  .addStringOption((option) => option.setName(`reason`).setDescription(`Reason to put member in timeout.`).setRequired(true)),

  run: async (client, interaction) => {

  if (!interaction.member.roles.cache.has(`912730086954901504`))
  return interaction.followUp({content: `You do not have permission to use this command.`, ephemeral: true});

  const ms = require(`ms`)

  const member = interaction.options.getMember(`user`)
  const reason = interaction.options.getString(`reason`) || null
  const time = ms(interaction.options.getString(`time`))

  if (!time) return interaction.followUp({content: `Given time is not valid, it is necessary that you provide valid time.`})
  const response = await member.timeout(time, reason)

  if (!response) return interaction.followUp({content: `I am sorry but for some reason I am unable to timeout this member.`})

  return interaction.followUp({content: `${member} has been timed out for ${ms(time, {long: true})}.`})

  },
};