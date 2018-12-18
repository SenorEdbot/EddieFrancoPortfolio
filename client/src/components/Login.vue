<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
        <br />
        <div class="danger-alert" v-html="error" />
        <v-btn
          class="light-green darken-2"
          dark
          @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
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
