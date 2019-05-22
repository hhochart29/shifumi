<template>
  <div>
    Stats:<br>
    gagné : {{ winNb }}<br>
    perdu : {{ lossNb }}<br>
    égalité : {{ drawNb }}<br>
    Nombre total de partie : {{ totalGames }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'stats',
  computed: {
    ...mapGetters({
      lastResults: 'lastResults'
    }),
    winNb () { return this.lastResults.filter(el => el.result === 1).length },
    lossNb () { return this.lastResults.filter(el => el.result === -1).length },
    drawNb () { return this.lastResults.filter(el => el.result === 0).length },
    totalGames () { return this.lastResults.length }
  }
}
</script>
