<template>
  <v-containers class="pt-10">
   <v-card  class="mt-8 mx-auto " max-width="700" height="600px" >
       <v-img
        class="white--text"
        height="200px"
        src="http://2op.com.br/blog/wp-content/uploads/2015/12/redacao-on-principais-caracteristicas-da-producao-de-conteudo-1000x563.jpg"
      >
      <strong><v-card-title class="align-end black--text ">SIGN IN</v-card-title></strong>
      </v-img>
        <v-form class="px-3" ref="form" v-model="valid" lazy-validation>

      <v-text-field
        class="black--text"
        prepend-icon="mdi-account"
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="User Name"
        required>
      </v-text-field>

      <v-text-field
        prepend-icon="mdi-email"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required>
      </v-text-field>

      <v-text-field
        prepend-icon="mdi-lock-question"
        v-model="password"
        type="password"
        :rules="passwordRules"
        label="Password"
        required>
      </v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="Remember Me"
        required>
      </v-checkbox>

      <v-btn x-large  :disabled="!valid" color="success" class="mr-4" @click="validate"> LOGIN </v-btn>
      <v-btn x-large color="error" class="mr-4" @click="reset"> Clear</v-btn>
      <br><br>

      <v-btn to="/suscribe">Suscribe</v-btn>
      </v-form>
    </v-card>
  </v-containers>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      checkbox: false
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        console.log(this.name, this.password) // to send the data to the back end
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    rememberMe () {
    }
  }
}
</script>
