<template>
  <div class="actions-container">
    <div
      v-for="(action, index) in actions"
      :key="`${action}-${index}`"
      @click="play(action)"
    >{{ action.name }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'picker',
  data: () => ({
    actions: [
      {
        name: 'Pierre'
      },
      {
        name: 'Feuille'
      },
      {
        name: 'Ciseau'
      }
    ],
    result: {}
  }),
  methods: {
    ...mapActions({
      setResults: 'setResults'
    }),
    play (playerAction) {
      let computerAction = this.getRandomPlay()

      this.getResult(playerAction, computerAction)
      let lastResult = {
        playerAction,
        computerAction,
        result: this.result
      }

      // pushing it to the store
      this.setResults(lastResult)
    },
    getRandomPlay () {
      return this.actions[Math.floor(Math.random() * this.actions.length)]
    },
    getResult (playerAction, computerAction) {
      if (playerAction === computerAction) {
        this.result = 0
      } else {
        switch (playerAction.name) {
          case 'Feuille':
            this.result = computerAction.name === 'Pierre' ? 1 : -1
            break
          case 'Ciseau':
            this.result = computerAction.name === 'Feuille' ? 1 : -1
            break
          case 'Pierre':
            this.result = computerAction.name === 'Ciseau' ? 1 : -1
            break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.actions-container {
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    background-color: indigo;
    color: white;
    text-transform: uppercase;
    font-family: 'Pragmata Pro';
    padding: 15px;
    width: 200px;
    text-align: center;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
