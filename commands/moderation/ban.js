const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")

module.exports = {
data: new SlashCommandBuilder()
.setName("ban")
.setDescription("تبنيد عضو")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true))
.addStringOption(option =>
option.setName("reason")
.setDescription("السبب")),

async execute(interaction) {

if (!checkRole(interaction,"ban")) return

const user = interaction.options.getUser("user")
const reason = interaction.options.getString("reason") || "No reason"

const member = interaction.guild.members.cache.get(user.id)

if (!member) return interaction.reply("❌ الشخص غير موجود")

await member.ban({ reason })

interaction.reply(`✅ تم حظر ${user.tag}`)
}
}