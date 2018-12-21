<template>
  <v-layout>
    <v-flex xs8 center class="content">
      <panel title="My Story">
        <h1>Edward Franco</h1>
        <v-img d-inline-flex :src="profileImage" class="profileImage" />
        <p class="d-inline-flex">I started my advanced education in my hometown of Salina, KS at Kansas Wesleyan University. After two years, small-town fever and the strenuous lifestyle of a student-athlete inspired me to seek a change in scenery. However, I learned the 59 Computer Science credits i accumulated at Wesleyan would not transfer to other schools properly. In an effort to position myself closer to a rich job market, I seized an opportunity to move to Denver, CO. Black Belt Movers brought me on as a mover in early 2015. Within a year, I had advanced to Driver, Supervisor, and Trainer. Currently, I am leveraging my Computer Science background with BBM as an IT Manager.</p>
        <p class="d-inline-flex">My roles as an IT Manager expanded from managing current systems into optimizing all the current systems in place. BBM is a Google Suite shop, I utilized this knowledge when optimizing systems. I have optimized and am overseeing the following internal programs: Time Clock system, Current Project Dashboard (CPD), Appointment Schedules system, payroll reconcile system and most importantly, the company's proprietary move scheduling tool and process. Stepping outside of our systems, I oversaw the build and currently manage our website. Additionally, I manage and report all data related to upcoming moves, completed moves, incoming calls, estimates, and final payroll figures.</p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import profileImage from '@/assets/me.jpg'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      profileImage: profileImage
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.profileImage{
  width: 13%;
  border-radius: 50%;
}
.content {
  margin: 0 auto;
}
</style>
