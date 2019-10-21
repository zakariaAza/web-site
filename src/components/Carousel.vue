<template>
  <v-container>
    <v-layout row wrap class="image">
      <v-flex xs12 >
        <v-carousel cycle height="300px">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            ;>
            <div class="title">
              {{ meetup.title }}
            </div>
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
        { imageUrl: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?cs=srgb&dl=camera-coffee-composition-1509428.jpg&fm=jpg', id: 'image1', title: 'Title1 example', width: screen.width },
        { imageUrl: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?cs=srgb&dl=bump-collaboration-colleagues-1068523.jpg&fm=jpg', id: 'image2', title: 'Title2 example', width: screen.width },
        { imageUrl: 'https://cdn.pixabay.com/photo/2017/04/14/17/22/lean-startup-2230822_1280.jpg', id: 'image3', title: 'Title3 example', width: screen.width }
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position:relative;
    left:43%;
    top: 45%;;
    width:max-content;
    height:max-content;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 50em;
    padding: 20px ;
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
