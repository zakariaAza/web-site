<template>
<v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn text class="black--text ml-12" to="/">HOME</v-btn>
        <v-btn text class="black--text" to="/metier">ABOUT US</v-btn>
        <v-btn text class="black--text" to="/equipe" >TEAM</v-btn>
        <v-btn text class="black--text" to="/contact">CONTACT</v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
DCA Consulting Corporation is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws.      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  .app{
    max-height: 0px;
  }
</style>
