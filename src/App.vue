<template>
  <v-app>
    <v-content>
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
