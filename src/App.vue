<template>
  <v-app app class ="app" min-height= "0" wrap>
    <v-content min-height= "0">
      <Toolbar/>
      <router-view></router-view>
    </v-content>
<<<<<<< HEAD
      <!-- <AppFooter/> -->

=======
    <v-content>
    </v-content>
>>>>>>> Profil: Add/Remove project
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
<<<<<<< HEAD
// import AppFooter from './components/AppFooter'
=======
>>>>>>> Profil: Add/Remove project

export default {
  components: { Toolbar },
  data: () => ({
    //
  })
}
</script>

<style scoped>
  .app{
    position: relative;
    color: black;
    font-size: 20px;
    min-height: 0vh;
  }
</style>

<style>
  #v-application--wrap{
    min-height: 0;
  }
  .content{
    padding: 0px;
  }
</style>
