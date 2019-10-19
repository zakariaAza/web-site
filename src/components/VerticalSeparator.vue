<template>
    <v-container >
            <v-flex>
                <v-span class="text-center" v-for="(text, index) in texts" :key="index">
                    {{text}}
                    <v-divider v-if="index != texts.length -1" class="mx-4" vertical color="black" style="display: inline;"></v-divider>
                </v-span>
            </v-flex>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      texts: ['Efficacité',
        'Expertise',
        'Perfection']
    }
  }
}
</script>

<style scoped>
  .text-center {
    position: relative;
    color: gold;
    top: 330px;
    left: 13%;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .mx-4{
    height: 200px;
    color: gold;
  }
</style>
