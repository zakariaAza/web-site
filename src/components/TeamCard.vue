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
        <v-flex xs8 md4>
          <v-card outlined  width="355" height="255px">
            <v-card-title class="size blue--text text--darken-4"> <strong>Co-CEO et Directeur associé</strong></v-card-title>
            <v-card-text class="justify-center pl-4">
                Spécialiste des <strong class="blue--text text--darken-1">problématiques stratégiques, organisationnelles et opérationnelles</strong>, il accompagne les grands acteurs et sous-traitants de l’industrie aéronautique et spatiale dans leurs <strong class="blue--text text--darken-1">projets de transformation</strong> à large échelle. Il est aussi expert de l’amélioration opérationnelle des unités de recherche et développement, de test, et de production, ainsi que de <strong class="blue--text text--darken-1">l’optimisation</strong> de la supply chain et des achats.
            </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs8 md4>
          <v-card outlined  width="355" height="255px">
            <v-card-title class="size blue--text text--darken-4"> <strong>Co-CEO et Directeur associé</strong></v-card-title>
            <v-card-text class="justify-center pl-4">
                Spécialiste des problématiques d'<strong class="blue--text text--darken-1">amélioration de la performance</strong> et de la conduite du changement à grande échelle, il intervient principalement auprès d'acteurs des biens de grande consommation et des services financiers, en <strong class="blue--text text--darken-1">France</strong> et dans le <strong class="blue--text text--darken-1">monde</strong>.
            </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs8 md4>
          <v-card outlined  width="355" height="255px">
            <v-card-title class="size blue--text text--darken-4"> <strong>Co-CEO et Directeur associé</strong></v-card-title>
            <v-card-text class="justify-center pl-4">
                Spécialiste de l’optimisation des <strong class="blue--text text--darken-1">systèmes d’information</strong>, il accompagne les entreprises industrielles et commerciales dans le volet technologique de leur <strong class="blue--text text--darken-1">transformation digitale</strong> : minimiser les coûts de fonctionnement des applications historiques pour financer les nouvelles applications digitales, adapter l’interface Métiers – SI et adopter des pratiques Agiles pour <strong class="blue--text text--darken-1">accélérer les projets</strong>.
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
