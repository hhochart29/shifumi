<template>
  <div>
    <h1>Liste des résultats</h1>
    <ul>
      <li
        v-for="(result, index) in lastResults"
        :key="`${result}-${index}`"
      >Vous avez joué {{ result.playerAction.name }} contre {{ result.computerAction.name }} ... Vous avez donc {{ result.result === 1 ? 'Gagné' : result.result === 0 ? 'Match nul' : 'Perdu'}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'results-list',
  computed: {
    ...mapGetters({
      lastResults: 'lastResults'
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Dank Mono';
  font-weight: bold;
}
</style>
