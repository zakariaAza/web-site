<template>
  <nav>
    <v-toolbar>
       <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title>Society</v-toolbar-title>
      <v-toolbar-items v-for="title in TextItems" :key="title.text" >
        <v-btn text>{{title.text}}</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ on }">
         <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="choice in LoginMenu" :key="choice">
            <v-list-item-title>{{ choice.text }}</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-menu>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
     <v-card class="mx-auto" max-width="300" tile>
      <v-list >
        <v-subheader >Menu</v-subheader>
        <v-list-item-group v-model="links" color="primary">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon medium >{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
      ],
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard' },
        { icon: 'mdi-folder', text: 'My Projects' },
        { icon: 'mdi-account', text: 'Team' }
      ]
    }
  }
}
</script>
