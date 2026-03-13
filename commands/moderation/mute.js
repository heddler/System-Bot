const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {

data: new SlashCommandBuilder()
.setName("mute")
.setDescription("إسكات شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true)
)
.addStringOption(option =>
option.setName("reason")
.setDescription("السبب")
),

async execute(interaction){

if(!checkRole(interaction,"mute")) return

const user = interaction.options.getUser("user")
const reason = interaction.options.getString("reason") || "No reason"

const member = interaction.guild.members.cache.get(user.id)

await member.timeout(10 * 60 * 1000, reason)

interaction.reply(`🔇 تم اعطاء ميوت ${user.tag}`)

}

}