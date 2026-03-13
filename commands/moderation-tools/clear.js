const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("clear")
.setDescription("حذف رسائل")
.addIntegerOption(option =>
option.setName("amount")
.setDescription("عدد الرسائل")
.setRequired(true)),

async execute(interaction){

if(!checkRole(interaction,"clear")) return

const amount = interaction.options.getInteger("amount")

await interaction.channel.bulkDelete(amount)

interaction.reply({
content:` تم حذف ${amount} رسالة`,
ephemeral:true
})

}
}