<template>
<v-layout wrap class="pt-10" >
      <v-flex xs12 md4 >
        <card class="v-card-profile">
          <v-avatar slot="offset" class="ml-10 d-block" size="200">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class=" text-xs-center">
            <h2 class="pt-10 ml-5 black--text">WELCOME on your profile page !</h2>
            <h1 class="pt-5 ml-5 card-title font-weight-light">Name profile</h1><br>
            <p class="ml-5 card-description font-weight-light text">
              <v-icon>
                mdi-map
              </v-icon>
                Country
              </p>
          </v-card-text>
        </card>
      </v-flex>
    </v-layout>

</template>

<script>
export default {
  //
}
</script>

<style scoped>
</style>
