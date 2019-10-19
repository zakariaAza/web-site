<template>
  <v-app class ="app" min-height= "0">
    <v-content min-height= "0">
      <Toolbar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'

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

<style scoped>
  #v-application--wrap{
    min-height: 0;
  }
</style>
