<template>
  <nav>
<!-- Toolbar (set up of the text)-->
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title>Society</v-toolbar-title>
      <v-toolbar-items v-for="title in TextItems" :key="title">
        <v-btn text >
          {{title.text}}
        </v-btn>
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
        <v-list-item v-for="choice in LoginMenu" :key="choice" >
            <v-list-item-title>{{ choice.text }}</v-list-item-title>
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
      TextItems: [
        { text: '' },
        { text: 'Aperçu' },
        { text: 'Notre métier' },
        { text: 'Notre équipe' },
        { text: 'Contact' }
      ],
      LoginMenu: [
        { text: 'Suscribe' },
        { text: 'Sign in' }
      ]
    }
  }
}
</script>
