<template>
  <v-container>
    <v-layout row wrap class="image">
      <v-flex xs12 >
        <v-carousel cycle align="center" justify="end" height = "600" jumbotron>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            ;>
            <v-parallax class="img"
            src= meetup.imageUrl
            height = "600"
            jumbotron
          ><v-row
              align="end"
              justify="center"
            >
              <v-col class="text-center title" cols="20">
                <h1 class="display-1 font-weight-thin mb-4"> {{meetup.title}} </h1>
              </v-col>
            </v-row>
          </v-parallax>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?cs=srgb&dl=camera-coffee-composition-1509428.jpg&fm=jpg', id: 'image1', title: 'DCA consulting et Siemens signent un contrat majeur de recherche en cybersécurité.', width: screen.width },
        { imageUrl: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?cs=srgb&dl=bump-collaboration-colleagues-1068523.jpg&fm=jpg', id: 'image2', title: 'DCA consulting reconnue entreprise smart de l\'année.', width: screen.width },
        { imageUrl: 'https://cdn.pixabay.com/photo/2017/04/14/17/22/lean-startup-2230822_1280.jpg', id: 'image3', title: 'Tesla fais confiance à DCA consulting pour innover sa gestion de projet. ', width: screen.width }
      ]
    }
  }
}
</script>

<style scoped>
  .text-center {
    position:relative;
    width:max-content;
    height:max-content;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size:large;
    font:bold;
    padding: 20px ;
    margin:50px;
  }
</style>

<style scoped>
.image{
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
}
</style>
