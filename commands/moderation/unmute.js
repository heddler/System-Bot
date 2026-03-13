const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("unmute")
.setDescription("فك الميوت")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true)
),

async execute(interaction){

if(!checkRole(interaction,"mute")) return

const user = interaction.options.getUser("user")

const member = interaction.guild.members.cache.get(user.id)

await member.timeout(null)

interaction.reply(`🔊 تم فك الميوت عن ${user.tag}`)

}

}