const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("unlock")
.setDescription("فتح الروم"),

async execute(interaction){

if(!checkRole(interaction,"lock")) return

await interaction.channel.permissionOverwrites.edit(
interaction.guild.roles.everyone,
{ SendMessages:true }
)

interaction.reply("🔓 تم فتح الروم")

}

}