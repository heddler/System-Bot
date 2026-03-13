const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("slowmode")
.setDescription("تغيير السلو مود")
.addIntegerOption(option =>
option.setName("seconds")
.setDescription("عدد الثواني")
.setRequired(true)
),

async execute(interaction){

if(!checkRole(interaction,"slowmode")) return

const seconds = interaction.options.getInteger("seconds")

await interaction.channel.setRateLimitPerUser(seconds)

interaction.reply(`🐢 تم ضبط السلو مود إلى ${seconds} ثانية`)

}

}