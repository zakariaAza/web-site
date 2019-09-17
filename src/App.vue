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

export default {
  name: 'App',
  components: { Toolbar },
  data: () => ({
    //
  })
}
</script>
