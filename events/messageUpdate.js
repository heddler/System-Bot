const sendLog = require("../systems/logs")

module.exports = {

name:"messageUpdate",

async execute(oldMessage,newMessage,client){

if(oldMessage.author?.bot) return

sendLog(
client,
"Message Edited",
`User: ${oldMessage.author.tag}
Old: ${oldMessage.content}
New: ${newMessage.content}`
)

}

}