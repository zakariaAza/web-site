<template>
  <v-app id="inspire">
        <Carousel/>
        <p class="text-center"> Etabli en France depuis 2019, notre cabinet conseille les directions générales de grandes entreprises françaises et internationales, ainsi que celles d’institutions publiques et d’organisations à but non lucratif. Le cabinet inscrit l’accompagnement de ses clients dans le long terme. Il les aide à élaborer les orientations stratégiques et à mettre en œuvre les changements qui leur permettent d’améliorer durablement leurs performances. Notre cabinet, offre à ses clients les compétences de 3 grands consultants experts ..</p>
        <VerticalSeparator align="center" justify="center"/>
        <TeamCard class="team" align="center" justify="center"/>
  </v-app>
</template>

<script>
import VerticalSeparator from './VerticalSeparator'
import Carousel from './Carousel'
import TeamCard from './TeamCard'

export default {
  components: { Carousel, VerticalSeparator, TeamCard }
}
</script>

<style scoped>
  .text-center {
    position: relative;
    color: black;
    max-width: 500px;
    top: 640px;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
  }
  .team{
    position: relative;
    color: black;
    top: 640px;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
