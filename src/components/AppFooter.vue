<template>
<div >
  <v-app  elevation id="inspire">
    <v-footer  color="grey darken-3" padless  class="justify-center pl-0" inset app >
      <v-row justify="center" no-gutters >
        <v-btn v-for="link in links" :key="link" color="white" text class="my-2">
          <v-icon class="ma-1">{{link.icon}}</v-icon>
          {{ link.text }}
        </v-btn  >
        <v-btn color="white" class="ma-2" icon v-for="icon in social_media" :key="icon">
          <v-icon>{{icon.icon}}</v-icon>
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
        { text: 'Page principale', icon: 'mdi-home' },
        { text: 'Contactez-nous', icon: 'mdi-email' }
      ],
      social_media: [
        { icon: 'mdi-twitter' },
        { icon: 'mdi-instagram' },
        { icon: 'mdi-facebook' }
      ]
    }
  }
}
</script>
