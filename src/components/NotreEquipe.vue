<template>
<v-container >
    <div class="team">
    <h1 class="pt-5 blue--text text--darken-4">Meet our people</h1>
    <p class="pt-3 pb-10 TextContact">
        Une équipe <strong class="blue--text text--darken-4">compétente</strong> et <strong class="blue--text text--darken-4">professionnelle</strong> à votre service. <br>
        Faites confiance à nos 30 ans d'expertise pour vous accompagner dans vos projets.
      </p >
    <TeamCard/>
  </div>
</v-container>
</template>

<script>
import TeamCard from './TeamCard'

export default {
  components: { TeamCard }
}
</script>
