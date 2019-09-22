<template>
  <v-container>
    <v-layout row wrap class="image">
      <v-flex xs12>
        <v-carousel>
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
        { imageUrl: 'https://in-storefocus.com/wp-content/uploads/2018/02/professional-services-1.png', id: 'image1', title: 'Title1 example', width: screen.width },
        { imageUrl: 'https://www.business2community.com/wp-content/uploads/2015/01/Professional-Services-New-Business-Development.jpg', id: 'image2', title: 'Title2 example', width: screen.width },
        { imageUrl: 'https://www.therahnuma.com/wp-content/uploads/2018/10/tech-and-innovation-1152x700.jpg', id: 'image3', title: 'Title3 example', width: screen.width }
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position:fixed;
    top:50%;
    left:50%;
    margin:-100px 0 0 -100px;
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
    margin: -10px 0 0 0;
    position:absolute;
    left: 0;
    right: 0;
}
</style>
