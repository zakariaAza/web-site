<template>
    <v-container>
            <v-flex>
                <v-span class="text-center" v-for="(text, index) in texts" :key="index">
                    <v-span>{{text}}</v-span>
                    <v-divider v-if="index != texts.length -1" class="mx-4" vertical color="black" style="display: inline;"></v-divider>
                </v-span>
            </v-flex>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      texts: ['Il faut savoir que nous somme l' + 'entreprise la plus puissante au moonde',
        'Nous vendons des biscuits aromatisés à la noisette',
        'J' + 'ai dis nonnnnnnnn ']
    }
  }
}
</script>

<style scoped>
  .text-center {
    position: relative;
    color: black;
    max-width: 10px;
    top: 330px;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
