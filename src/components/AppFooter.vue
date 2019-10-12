<template>
<div >
  <v-app  elevation id="inspire">
    <v-footer  color="grey darken-3" padless  class="justify-center pl-0" inset app>
      <v-row justify="center" no-gutters >
        <v-btn v-for="(link,idx) in links" :key="idx" color="white" text class="my-2">
          <v-icon class="ma-1">{{link.idx}}</v-icon>
          {{ link.idx }}
        </v-btn  >
        <v-btn color="white" class="ma-2" icon v-for="(icon,idx) in social_media" :key="'A'+ idx">
          <v-icon>{{icon.idx}}</v-icon>
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
        { text1: 'Contactez-nous', icon1: 'mdi-email' }
      ],
      social_media: [
        { icon2: 'mdi-twitter' },
        { icon3: 'mdi-instagram' },
        { icon4: 'mdi-facebook' }
      ]
    }
  }
}
</script>
