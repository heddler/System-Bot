module.exports = {

name: "interactionCreate",

async execute(interaction,client){

if(!interaction.isChatInputCommand()) return

const command = client.commands.get(interaction.commandName)

if(!command) return

try{

await command.execute(interaction,client)

}catch(error){

console.error(error)

interaction.reply({
content:"❌ حصل خطأ",
ephemeral:true
})

}

}

}