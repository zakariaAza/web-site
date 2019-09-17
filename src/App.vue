/* eslint-disable vue/no-unused-components */
<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <AppFooter/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: { Toolbar, AppFooter },
  data: () => ({
    //
  })
}
</script>
