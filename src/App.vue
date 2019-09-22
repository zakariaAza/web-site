<template>
  <v-app>
    <v-content>
      <Toolbar/>
        <router-view></router-view>
      <AppFooter/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import AppFooter from './components/AppFooter'

export default {
  components: { AppFooter, Toolbar },
  data: () => ({
    //
  })
}
</script>
