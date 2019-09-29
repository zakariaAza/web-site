<template>
  <nav>
<!-- Toolbar (set up of the text)-->
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title class="black--text ml-8">Society</v-toolbar-title>
      </router-link>
      <v-toolbar-items >
        <v-btn text class="ml-12">Aperçu</v-btn>
        <v-btn text to="/metier">Notre Métier</v-btn>
        <v-btn text to="/equipe" >Notre equipe</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
         <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
<!-- Menu (suscribe/ sign in)-->
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
            <v-btn text to="/subcribe">Subscribe</v-btn>
            <v-btn text to="/signin">Sign in</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      </template>
    </v-toolbar>
<!-- navigation-drawer -->
    <v-navigation-drawer app v-model="drawer" fixed>
     <v-card class="mx-auto" max-width="300" tile>
      <v-list >
        <v-subheader >Menu</v-subheader>
      </v-list>
    </v-card>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      LoginMenu: [
        { text: 'Suscribe' },
        { text: 'Sign in' }
      ]
    }
  }
}
</script>
