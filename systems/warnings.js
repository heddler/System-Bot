const warnings = {}

module.exports = {

addWarning(userId, reason){

if(!warnings[userId]) warnings[userId] = []

warnings[userId].push(reason)

},

getWarnings(userId){

return warnings[userId] || []

},

clearWarnings(userId){

warnings[userId] = []

}

}