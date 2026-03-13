const sendLog = require("../systems/logs")

module.exports = {

name:"guildMemberRemove",

execute(member,client){

sendLog(
client,
"Member Left",
`User: ${member.user.tag}`
)

}

}