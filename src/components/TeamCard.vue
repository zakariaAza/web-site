<template>
<v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="250">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>

export default {
  data () {
    return {
      team: [
        { name: 'Le Parisiens zeubi', role: 'Web developer', avatar: 'mbappe.jpg' },
        { name: 'Liverpool c la d', role: 'Graphic designer', avatar: 'mosalah.jpg' },
        { name: 'Come on Chelsea', role: 'Web developer', avatar: 'ninja.png' }
      ]
    }
  }
}
</script>
