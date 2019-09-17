<template>
<div id="footer" >
  <v-app  elevation id="inspire">
    <v-footer  color="grey darken-3" padless >
      <v-row justify="center" no-gutters >
        <v-btn v-for="link in links" :key="link" color="white" text class="my-2">
          {{ link.text }}
        </v-btn>
        <v-col class="grey darken-2 py-4 text-center white--text"  cols="12" >
          {{ new Date().getFullYear() }} — <strong>Society</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { text: 'Home' },
        { text: 'About us' },
        { text: 'Team' },
        { text: 'Services' },
        { text: 'Contact' }
      ]
    }
  }
}
</script>

<style >
#footer {
      position:fixed;
      width:100%;
      height:100px;
      bottom:0px;
}
</style>
