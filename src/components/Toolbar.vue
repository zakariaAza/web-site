<template>
  <nav>
<!-- Toolbar (set up of the text)-->

    <v-app-bar app dark
      prominent
      src="https://images.wallpaperscraft.com/image/blue_backgrounds_solid_light_65833_1600x1200.jpg">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon> -->
      <router-link to="/">
        <v-toolbar-title class="white--text ml-8 pt-12" to="/">DCA Consulting</v-toolbar-title>
      </router-link>
      <v-toolbar-items >
        <v-btn text class="ml-12" to="/">Aperçu</v-btn>
        <v-btn text to="/metier">Notre Métier</v-btn>
        <v-btn text to="/equipe" >Notre equipe</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
<!-- Menu (subscribe/ sign in)-->
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon v-if="seen" light class="display-1 ">mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
            <v-btn color="#01579B" text to="/subscribe" >Subscribe</v-btn>
            <v-btn color="#01579B" text to="/signin">Sign in</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      seen: true,
      LoginMenu: [
        { text: 'Subscribe' },
        { text: 'Sign in' }
      ]
    }
  }
}
</script>
