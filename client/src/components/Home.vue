<template>
  <v-layout>
    <v-flex xs8 center class="content">
      <panel title="My Story">
        <h1>Edward Franco</h1>
        <v-img d-flex :src="profileImage" class="profileImage" />
          <p id="p1">I had an opportunity to move to Denver, CO to ensure I could be closer to the job market upon completing school. My credits from Kansas Wesleyan did not transfer properly and would have required an additional 4 years of school to complete my Bachelor of Computer Science at any other University, even though I had 59 current credits. During this time I worked for a Moving Company. Starting as a labor employee and working my way up to supervisor I was exposed to the Payroll Process as well as the Scheduling. I was able to build spreadsheets and forms to complete essential functions that were being doing by hand for my boss.</p>
          <p id="p2">These 'beginner' spreadsheets as I would call them in comparison to the current system I've written for Black Belt Movers were things such as an Hours Log and a Clock In/Out System for the movers. My boss' boss saw the new spreadsheets and how things were being done and requested I work in the office as a Reservationist and work into an IT role as I proved a need for one.</p>
          <p id="p3">That was 2 years ago when I started in the 'corporate office' as it is referred to at Black Belt. Since then I have updated the entire system to be completely paperless and operating solely through Google Apps Suite. This includes the 'Booking Ticket' form that is filled out anytime a phone call is taken, a Time Clock System for the Office, monitoring the build and maintaining a WordPress website, as well as automated Reconcile Spreadsheets that pull data from 10+ separate spreadsheets.</p>
          <p id="p4">I am looking forward to being able to market myself as well as increase my skillset 100 times over. "If I know one thing it is that I know nothing", has been a piece of advise I try to take to heart when it comes to programming. I look forward to having a career where programming is my entire focus, rather than multi-tasking multiple roles in a smaller corporate office setting.</p>
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
