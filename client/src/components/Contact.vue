<template>
<v-layout>
  <v-flex xs8 offset-xs2>
    <panel title="Contact">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="25"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="reason"
          :rules="[v => !!v || 'Reason is required']"
          label="Reason for contacting"
          required
        ></v-text-field>

        <div class="danger-alert" v-html="error" />

        <v-btn
          :disabled="!valid"
          @click="submit"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import ContactService from '@/services/ContactService'
import Panel from '@/components/Panel'

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    reason: '',
    error: null
  }),

  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        try {
          const response = await ContactService.contact({
            name: this.name,
            email: this.email,
            reason: this.reason
          })
          this.$store.dispatch('setContactEmail', response.data.contactEmail)
          alert('Form Submitted successfully.')
          this.$router.push({
            name: 'home'
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
