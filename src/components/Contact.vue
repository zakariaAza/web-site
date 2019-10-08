/* eslint-disable vue/no-parsing-error */
<template>
    <v-container>
      <h3 class="pt-5 blue--text text--darken-4">A propos de DCA Consulting corporation</h3>
      <h1 class="pt-5 Contact">Contactez-Nous</h1>
      <p class="pt-3 TextContact">
        Nous vous remercions de l’intérêt que vous portez à <strong class="blue--text text--darken-4">DCA Consulting corporation</strong> . <br>
        Vous pouvez nous contacter à l’aide des coordonnées indiquées ci-dessous.
      </p>

      <v-layout class="pt-10" row wrap>
        <v-flex xs12 sm6 md4 v-for="information in contact" :key="information">
          <v-card width="600" height="250px" color="" flat class="text-xs-center">
            <v-card-title primary class="size" >  <strong class="blue--text text--darken-4">{{ information.Title }}</strong></v-card-title>
            <v-card-text>
              <!-- bureau de paris -->
              <br><div class="blue--text text--darken-4" >{{information.name}}</div>
              <div>{{information.adresse}}</div>
              <div>{{information.codePostal}}</div>
              <div>{{information.pays}}</div><br>
              <div>{{information.Telephone}}</div>

              <!-- Social media -->
              <div>{{information.media}}</div>

              <!-- bouton -->
              <v-btn color="indigo darken-2" prepend-icon="mdi-arrow-right-drop-circle" small text>{{information.text}}</v-btn>


            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      contact: [
        { Title: 'Bureau de Paris', name: 'DCA consulting Corporation', adresse: '1 Infinite Loop', codePostal: 'CA 95014', pays: 'Etats-Unis', Telephone: 'Téléphone : +33 1 44 55 75 75' },
        { Title: 'Demande de conseil', text: 'Soumettre votre requête' },
        { Title: 'Réseaux sociaux', media: 'Suivez-nous sur LinkedIn, Facebook, Twitter et YouTube.' },
        { Title: 'Question ou commentaires ', text: 'contactez-nous' }
      ]
    }
  }
}
</script>

<style scoped>
.Contact {
  font-size: 40px
}
.TextContact{
  font-size: 30px
}
.size{
  font-size: 30px
}
</style>
