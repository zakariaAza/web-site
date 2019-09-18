<template>
  <v-app>
    <v-content>
      <router-view/>
      <AppFooter/>
    </v-content>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: { AppFooter },
  data: () => ({
    //
  })
}
</script>
