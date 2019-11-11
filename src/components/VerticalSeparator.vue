<template>
    <v-container >
            <v-flex>
                <span class="text-center blue--text text--darken-4" name="a" v-for="(text, index) in texts" :key="index">
                    {{text}}
                    <v-divider v-if="index != texts.length -1" class="mx-4" vertical color="black" style="display: inline;"></v-divider>
                </span>
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
    top: 640px;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .mx-4{
    height: 200px;
    color: gold;
  }
</style>
