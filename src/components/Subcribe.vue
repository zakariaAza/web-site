<template>
  <v-container class="pt-10">
    <h1 class="pt-5 ContactTitle">Subscribe to DCA Consulting Corporation</h1>
    <p class="grey--text">Enter your name and email address, personal information and click “Suscribe”.</p>
   <v-card  class="mt-8 mx-auto " width="1100" height="1000px" >
      <v-img
        class="white--text"
        height="200px"
        src="https://www.docusign.fr/blog/wp-content/uploads/sites/14/2015/10/shutterstock_182769413-Converted-720x542.png"
      >
      <!-- <strong><v-card-title class="align-end black--text justify-center">SUBSCRIBE</v-card-title></strong> -->
      </v-img>
        <v-form class="px-3" ref="form" v-model="valid" lazy-validation>

      <v-text-field
        class="black--text"
        prepend-icon="mdi-account"
        v-model="Firstname"
        :counter="20"
        :rules="FirstnameRules"
        label="Firstname"
        required>
      </v-text-field>

      <v-text-field
        class="black--text"
        prepend-icon="mdi-account"
        v-model="Lastname"
        :counter="20"
        :rules="LastnameRules"
        label="Last Name"
        required>
      </v-text-field>

      <v-text-field
        prepend-icon="mdi-email"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required>
      </v-text-field>

      <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      >
        <template  v-slot:activator="{ on }">
          <v-text-field
          v-model="date"
          label="Birth date"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on">
          </v-text-field>
        </template>
        <v-date-picker
        ref="picker"
        v-model="date"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save">
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <v-card-text class="text-center" > Vous êtes :</v-card-text>

      <v-radio-group column class="pl-12">
        <v-radio label="Une femme"></v-radio>
        <v-radio label="Un homme"></v-radio>
      </v-radio-group>

      <v-text-field
        prepend-icon="mdi-lock-question"
        v-model="password"
        type="password"
        :rules="passwordRules"
        label="Password"
        required>
      </v-text-field>

      <v-text-field
        prepend-icon="mdi-lock-question"
        v-model="Confirmpassword"
        type="password"
        :rules="ConfirmpasswordRules"
        label="Confirm Password"
        required>
      </v-text-field>

    <!-- popup privacy policy -->
<v-dialog v-model="popup" width="600px">
  <template v-slot:activator="{ on }">
    <v-btn small depressed color="primary" dark v-on="on">Privacy policy</v-btn>
  </template>
    <v-card>
      <v-card-title>
        <span class="headline">Society privacy policy</span>
      </v-card-title>
        <v-card-text>This Privacy Policy applies to the website(s) and mobile applications (together, the "Sites") provided by DCA Consulting Corporation, a company headquartered in Boston, Massachusetts, USA, and/or the other companies of the DCA group ("DCA", “we”, “us”) who act as data controllers[1] with respect to the personal data you share with DCA under this Policy.
The Sites include www.DCA.com and additional websites or mobile applications produced and managed by DCA. Please note that this Privacy Policy does not apply to the following websites:
    the DCA Extranet (bcp.DCA.com), which is accessible from the www.DCA.com site but is governed by a separate policy contained in our agreements with Bain clients that are provided access to the Extranet; or
    the DCA Alumni Job Board (careercenter.DCA.com), which is provided and managed by a third party and is governed by a separate privacy policy.
DCA knows that your privacy is important to you and takes user privacy very seriously. We are committed to protecting your personal data[2] (i.e. any information you provide to us from which you can be identified) in accordance with this Privacy Policy.
DCA reserves the right, at its sole discretion, to alter and update this Privacy Policy from time to time. We therefore invite you to review the current version of the Privacy Policy each time you return to our Sites.
Some terms are defined throughout this Policy. Simply hover over the terms in bold to obtain their definition.
          +</v-card-text>
      </v-card>
</v-dialog>

      <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue']"
      label="By signing up I agree to the Society terms & conditions and privacy policy."
      required
    ></v-checkbox>

       <v-btn large :disabled="!valid" color="success" class="mr-4" @click="Submit"> Submit </v-btn>
      <v-btn large color="error" class="mr-4" @click="reset"> Clear</v-btn>
      <router-link to="/signin">
        <v-card-text class="black--text ">Already menbers? Log In</v-card-text>
      </router-link>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // date
      date: null,
      menu: false,
      popup: false,
      watch: {
        menu (val) {
          val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        }
      },
      // firstname
      valid: true,
      Firstname: '',
      FirstnameRules: [
        v => !!v || 'FirstName is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      // lastname
      Lastname: '',
      LastnameRules: [
        v => !!v || 'LastName is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      //  email
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      //  password
      password: '',
      Confirmpassword: '',
      passwordRules: [
        v => !!v || 'password is required'
      ],
      //  Confirmpassword
      ConfirmpasswordRules: [
        v => !!v || 'Confirmpassword is required'
      ],
      //  checkbox
      checkbox: false
    }
  },
  methods: {
    // Suscribe Back End
    async Submit () {
      this.axios({
        method: 'post',
        url: 'http://localhost:4000' + '/api/subscribe',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          console.log(response)
        }, (error) => {
          console.log(error)
        })
    },
    reset () {
      this.$refs.form.reset()
    },
    rememberMe () {
    },
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>
