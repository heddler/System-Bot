const { EmbedBuilder } = require("discord.js")
const config = require("../config/config.json")

async function sendLog(client,title,description){

const channel = client.channels.cache.get(config.logChannel)

if(!channel) return

const embed = new EmbedBuilder()
.setTitle(title)
.setDescription(description)
.setColor("Red")
.setTimestamp()

channel.send({embeds:[embed]})

}

module.exports = sendLog