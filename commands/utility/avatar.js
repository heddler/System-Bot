const { SlashCommandBuilder } = require("discord.js")

module.exports = {

data: new SlashCommandBuilder()
.setName("avatar")
.setDescription("صورة الشخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")),

async execute(interaction){

const user = interaction.options.getUser("user") || interaction.user

interaction.reply(user.displayAvatarURL({ size:1024 }))

}

}