const sendLog = require("../systems/logs")

module.exports = {

name:"messageDelete",

async execute(message,client){

if(message.author?.bot) return

sendLog(
client,
"Message Deleted",
`User: ${message.author.tag}\nMessage: ${message.content}`
)

}

}