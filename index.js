const { Client, GatewayIntentBits, Collection } = require("discord.js")
const config = require("./config/config.json")

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
})

client.commands = new Collection()
require("./handlers/commandHandler")(client)
require("./handlers/eventHandler")(client)

client.login(config.token)