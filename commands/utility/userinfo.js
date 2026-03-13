const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {

data: new SlashCommandBuilder()
.setName("userinfo")
.setDescription("معلومات شخص")
.addUserOption(option =>
option.setName("user")
.setDescription("الشخص")
),

async execute(interaction){

const user = interaction.options.getUser("user") || interaction.user
const member = interaction.guild.members.cache.get(user.id)

const embed = new EmbedBuilder()
.setTitle(user.tag)
.setThumbnail(user.displayAvatarURL())
.addFields(
{name:"ID",value:user.id},
{name:"Joined",value:`${member.joinedAt}`}
)

interaction.reply({embeds:[embed]})

}

}