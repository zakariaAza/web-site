<template>
    <v-layout row wrap class="pb-8 pl-12">
        <v-row justify="space-around">
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="200">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6 md4>
          <v-card outlined  width="350" height="250px">
            <v-card-title class="size blue--text text--darken-4"> <strong> Co-CEO and Web Designer </strong></v-card-title>
            <v-card-text>
                Et hanc quidem praeter oppida multa duae civitates exornant Seleucia opus Seleuci regis, et Claudiopolis quam deduxit coloniam Claudius Caesar. Isaura enim antehac nimium potens, olim subversa ut rebellatrix interneciva aegre vestigia claritudinis pristinae monstrat admodum pauca.
            </v-card-text>
            </v-card>
        </v-flex>
        <v-flex>
          <v-card outlined  width="360" height="250px">
            <v-card-title class="size blue--text text--darken-4"> <strong> Co-CEO and Graphic Designer </strong></v-card-title>
            <v-card-text>
                Et hanc quidem praeter oppida multa duae civitates exornant Seleucia opus Seleuci regis, et Claudiopolis quam deduxit coloniam Claudius Caesar. Isaura enim antehac nimium potens, olim subversa ut rebellatrix interneciva aegre vestigia claritudinis pristinae monstrat admodum pauca.
            </v-card-text>
            </v-card>
        </v-flex>
        <v-flex>
          <v-card outlined  width="350" height="250px">
            <v-card-title class="size blue--text text--darken-4"> <strong> Co-CEO and IT Engineer </strong></v-card-title>
            <v-card-text>
                Et hanc quidem praeter oppida multa duae civitates exornant Seleucia opus Seleuci regis, et Claudiopolis quam deduxit coloniam Claudius Caesar. Isaura enim antehac nimium potens, olim subversa ut rebellatrix interneciva aegre vestigia claritudinis pristinae monstrat admodum pauca.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-row>
      </v-layout>
</template>

<script>

export default {
  data () {
    return {
      team: [
        { name: 'Zakaria Azakkour', role: 'Web developer', avatar: 'zak.jpg' },
        { name: 'Desmond Conteh', role: 'Graphic designer', avatar: 'desmond.jpg' },
        { name: 'Cédric SOUMAILA', role: 'Web developer', avatar: 'ced.jpg' }
      ]
    }
  }
}
</script>
