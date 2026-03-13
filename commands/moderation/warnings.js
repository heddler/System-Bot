const { SlashCommandBuilder } = require("discord.js")
const warnings = require("../../systems/warnings")

module.exports = {

data: new SlashCommandBuilder()
.setName("warnings")
.setDescription("عرض تحذيرات شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
.setRequired(true)
),

async execute(interaction){

const user = interaction.options.getUser("user")

const userWarnings = warnings.getWarnings(user.id)

if(userWarnings.length === 0)
return interaction.reply("لا يوجد تحذيرات")

interaction.reply(userWarnings.join("\n"))

}

}