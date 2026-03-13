const { REST, Routes } = require("discord.js")
const fs = require("fs")
const config = require("./config/config.json")

const commands = []

const folders = fs.readdirSync("./commands")

for (const folder of folders) {

const commandFiles = fs
.readdirSync(`./commands/${folder}`)
.filter(file => file.endsWith(".js"))

for (const file of commandFiles) {

const command = require(`./commands/${folder}/${file}`)

commands.push(command.data.toJSON())

}

}

const rest = new REST({ version: "10" }).setToken(config.token)

;(async () => {

try {

console.log("🔄 Refreshing Slash Commands...")

await rest.put(
Routes.applicationGuildCommands(config.clientId, config.guildId),
{ body: commands }
)

console.log("✅ Slash Commands Loaded")

} catch (error) {

console.error(error)

}

})()