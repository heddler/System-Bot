const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("lock")
.setDescription("قفل الروم"),

async execute(interaction){

if(!checkRole(interaction,"lock")) return

await interaction.channel.permissionOverwrites.edit(
interaction.guild.roles.everyone,
{ SendMessages:false }
)

interaction.reply("🔒 تم قفل الروم")

}

}