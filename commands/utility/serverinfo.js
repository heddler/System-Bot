const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("معلومات السيرفر"),

  async execute(interaction) {
    const guild = interaction.guild

    // جلب Owner
    const owner = await guild.fetchOwner()

    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL())
      .addFields(
        { name: "Server ID", value: guild.id },
        { name: "Owner", value: `${owner.user.tag}` },
        { name: "Members", value: `${guild.memberCount}` },
        { name: "Created", value: `${guild.createdAt.toDateString()}` }
      )
      .setColor("Blue")
      .setTimestamp()

    interaction.reply({ embeds: [embed] })
  }
}