const config = require("../config/config.json")

function checkRole(interaction, roleKey) {

const roleId = config.roles[roleKey]

if (!roleId) return true

if (!interaction.member.roles.cache.has(roleId)) {

interaction.reply({
content: "❌ ماعندك صلاحيه",
ephemeral: true
})

return false
}

return true

}

module.exports = checkRole