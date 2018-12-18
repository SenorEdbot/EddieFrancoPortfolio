<template>
  <div>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <panel title="Portfolio">
          <portfolio-card />
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import Panel from '@/components/Panel'

export default {
  components: {
    PortfolioCard,
    Panel
  }
}
</script>

<style scoped>
.cardImage {
  width: 100%;
}
</style>
