<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
        name="vue-tracker-form"
        autocomplete="off">
          <v-text-field
            type="email"
            label="Email"
            v-model="email" />
          <br />
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            autocomplete="new-password" />
        </form>
        <br />
        <div class="danger-alert" v-html="error" />
        <v-btn
          class="light-green darken-2"
          dark
          @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
