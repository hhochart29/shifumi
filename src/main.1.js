import Db from 'database'

export default {
  async getAvailableUsers () {
    const users = await Db.query('SELECT * FROM users WHERE occupied = FALSE')

    for (let i = 0; i < users.length; i++) {
      const groups = await this.getUserGroups(users[i])
      const formatedGroups = this.formatGroups(groups)
      users[i].groups = formatedGroups
    }

    return users
  },

  async getUserGroups ({ id }) {
    return Db.query(`SELECT * FROM groups WHERE userId = ${id}`)
  },

  formatGroups (groups) {
    return groups.map(group => {
      const name = group.name.replace('"', '\'')
      return { ...group, name }
    })
  }

}