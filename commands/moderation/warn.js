const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")
const warnings = require("../../systems/warnings")

module.exports = {

data: new SlashCommandBuilder()
.setName("warn")
.setDescription("تحذير شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true))
.addStringOption(option =>
option.setName("reason")
.setDescription("السبب")
.setRequired(true)),

async execute(interaction){

if(!checkRole(interaction,"warn")) return

const user = interaction.options.getUser("user")
const reason = interaction.options.getString("reason")

warnings.addWarning(user.id, reason)

interaction.reply(`⚠️ تم تحذير ${user.tag}`)

}

}