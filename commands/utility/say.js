const { SlashCommandBuilder } = require("discord.js")

module.exports = {

data: new SlashCommandBuilder()
.setName("say")
.setDescription("إرسال رسالة")
.addStringOption(option =>
option.setName("text")
.setDescription("الرساله")
.setRequired(true)
),

async execute(interaction){

const text = interaction.options.getString("text")

await interaction.channel.send(text)

interaction.reply({
content:"✅ تم الإرسال",
ephemeral:true
})

}

}