const { SlashCommandBuilder } = require("discord.js")
const checkRole = require("../../systems/permissionCheck")
const warnings = require("../../systems/warnings")

module.exports = {

data: new SlashCommandBuilder()
.setName("clearwarnings")
.setDescription("حذف تحذيرات شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true)
),

async execute(interaction){

if(!checkRole(interaction,"warn")) return

const user = interaction.options.getUser("user")

warnings.clearWarnings(user.id)

interaction.reply(` تم حذف تحذيرات ${user.tag}`)

}

}