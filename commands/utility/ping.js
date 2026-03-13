const { SlashCommandBuilder } = require("discord.js")

module.exports = {

data: new SlashCommandBuilder()
.setName("ping")
.setDescription("سرعة البوت"),

async execute(interaction){

interaction.reply(`🏓 ${interaction.client.ws.ping}ms`)

}

}