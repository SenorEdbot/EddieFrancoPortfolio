<template>
  <v-toolbar fixed class="light-green darken-2">
    <v-toolbar-title class="mr-4">

      <router-link
        class="home"
        tag="span"
        :to="{ name: 'home' }">
        Eddie Franco
      </router-link>

    </v-toolbar-title>
    <v-toolbar-items>

      <v-btn flat dark
      :to="{ name: 'portfolio' }">
        Portfolio
      </v-btn>

      <v-btn flat dark
      :to="{ name: 'contact' }">
        Contact
      </v-btn>

    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{ name: 'register' }">
        Sign Up
      </v-btn>

      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{ name: 'login' }">
        Login
      </v-btn>

      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Logout
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    async logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }

}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gold;
}
</style>
