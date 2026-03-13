const sendLog = require("../systems/logs")

module.exports = {

name:"guildMemberAdd",

execute(member,client){

sendLog(
client,
"Member Joined",
`User: ${member.user.tag}`
)

}

}