<template>
    <v-container>
      <h1>ContactUs</h1>
      <div>
        <p v-if="seen">Maintenant vous me voyez</p>
        <v-icon v-if="seen">mdi-lock-question</v-icon>
        <v-btn @click="seen = !seen">clear</v-btn>
      </div>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      seen: true
    }
  }
}
</script>
