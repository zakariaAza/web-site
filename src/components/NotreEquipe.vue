<template>
  <v-app>
    <v-parallax
    dark
    src="https://cdn.pixabay.com/photo/2017/01/17/03/58/bonding-1985863_1280.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
       <h1 class="display-2 font-weight-thin mb-4"> <strong>Meet our people</strong> </h1>
        <p class="pt-3 pb-10 TextContact">
        Une équipe compétente et à votre service. <br>
        Faites confiance à nos 30 ans d'expertise pour vous accompagner dans vos projets.
      </p >
      </v-col>
    </v-row>
  </v-parallax>
  <v-divider class="separator pt-5"></v-divider>
  <h1 class="text-center display-1 font-weight-thin mb-4">Notre Equipe</h1>
  <v-divider class="separator"></v-divider>
  <v-row justify="space-around" class="pt-12">
    <v-avatar size="200">
      <img src="zak.jpg">
    </v-avatar>

    <v-avatar size="200">
      <img
        src="desmond.jpg"
        alt="John"
      >
    </v-avatar>

    <v-avatar size="200">
      <img
        src="ced.jpg"
        alt="John"
      >
    </v-avatar>
  </v-row>
  <v-row justify="center">
    <v-layout row wrap class="pb-8 pl-12 pt-5">
        <v-flex xs6 md4>
             <v-card outlined  width="600" height="250px">
                <v-col class="text-center" cols="12">
                  <h3 class="size blue--text text--darken-4">Zakaria AZAKKOUR</h3>
                  <v-card-subtitle class="pb-0">Co-CEO et Directeur associé</v-card-subtitle>
                </v-col>
                <v-card-text>
                Spécialiste des <strong class="blue--text text--darken-1">problématiques stratégiques, organisationnelles et opérationnelles</strong>, il accompagne les grands acteurs et sous-traitants de l’industrie aéronautique et spatiale dans leurs <strong class="blue--text text--darken-1">projets de transformation</strong> à large échelle. Il est aussi expert de l’amélioration opérationnelle des unités de recherche et développement, de test, et de production, ainsi que de <strong class="blue--text text--darken-1">l’optimisation</strong> de la supply chain et des achats.
                </v-card-text>
             </v-card>
          </v-flex>
          <v-flex xs6 md4>
             <v-card outlined  width="600" height="250px">
               <v-col class="text-center" cols="12">
                  <h3 class="size blue--text text--darken-4">Desmond CONTEH</h3>
                  <v-card-subtitle class="pb-0">Co-CEO et Directeur associé</v-card-subtitle>
                </v-col>
                <v-card-text>
                Spécialiste des problématiques d'<strong class="blue--text text--darken-1">amélioration de la performance</strong> et de la conduite du changement à grande échelle, il intervient principalement auprès d'acteurs des biens de grande consommation et des services financiers, en <strong class="blue--text text--darken-1">France</strong> et dans le <strong class="blue--text text--darken-1">monde</strong>.
                </v-card-text>
             </v-card>
          </v-flex>
          <v-flex xs6 md4>
             <v-card outlined  width="600" height="250px">
                <v-col class="text-center" cols="12">
                  <h3 class="size blue--text text--darken-4">Cedric SOUMAILA</h3>
                  <v-card-subtitle class="pb-0">Co-CEO et Directeur associé</v-card-subtitle>
                </v-col>
                <v-card-text>
                Spécialiste de l’optimisation des <strong class="blue--text text--darken-1">systèmes d’information</strong>, il accompagne les entreprises industrielles et commerciales dans le volet technologique de leur <strong class="blue--text text--darken-1">transformation digitale</strong> : minimiser les coûts de fonctionnement des applications historiques pour financer les nouvelles applications digitales, adapter l’interface Métiers – SI et adopter des pratiques Agiles pour <strong class="blue--text text--darken-1">accélérer les projets</strong>.
                </v-card-text>
             </v-card>
          </v-flex>
    </v-layout>
  </v-row>
  <AppFooter/>
  </v-app>
</template>

<script>
import AppFooter from './AppFooter'
export default {
  components: { AppFooter }
}
</script>

<style scoped>
.separator {
  font: bold
}
</style>
