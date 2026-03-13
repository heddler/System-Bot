const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("kick")
.setDescription("طرد شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true)),

async execute(interaction){

if(!checkRole(interaction,"kick")) return

const user = interaction.options.getUser("user")
const member = interaction.guild.members.cache.get(user.id)

await member.kick()

interaction.reply(`✅ تم طرد ${user.tag}`)

}
}