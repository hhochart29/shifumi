<template>
  <div id="app">

    <picker />
    <results-list />
    <stats />
  </div>
</template>

<script>
import resultsList from '@/components/resultsList'
import picker from '@/components/picker'
import stats from '@/components/stats'

export default {
  name: 'app',
  components: {
    resultsList,
    picker,
    stats
  }
}
</script>
