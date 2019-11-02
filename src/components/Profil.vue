<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                      v-model = "jobtitle"
                      required
                      disabled=  true
                      label = "Job Title"
                      outlined = true
                      rounded= true
                      />
                </v-flex>
                <v-flex
                  xs12
                  md8
                >
                    <v-text-field
                      v-model = "username"
                      required
                      disabled=  true
                      label = "Mail"
                      outlined = true
                      rounded= true
                    ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                    <v-text-field
                      required
                      v-model = "Firstname"
                      disabled=  true
                      label = "First Name"
                      outlined = true
                      rounded= true
                    ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                    <v-text-field
                      v-model = "Lastname"
                      required
                      disabled=  true
                      label = "Last Name"
                      outlined = true
                      rounded= true
                    ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    v-model = "country"
                      required
                      disabled=  true
                      label = "Country"
                      outlined = true
                      rounded= true
                      />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="City"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="Notre projet"
                    value="Soumettez-nous votre projet ici."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">{{ jobtitle}}</h6>
            <h4 class="card-title font-weight-light">{{ Firstname }}  {{ Lastname }} </h4>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!--<template>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex >
                        <v-avatar size="200">
                            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
                        </v-avatar>
                    </v-flex>

                    <v-text-field
                      required
                      v-model = "Firstname"
                      disabled=  true
                      label = "First Name"
                      outlined = true
                      rounded= true
                    ></v-text-field>

                    <v-text-field
                      v-model = "Lastname"
                      required
                      disabled=  true
                      label = "Last Name"
                      outlined = true
                      rounded= true
                    ></v-text-field>

                    <v-text-field
                      v-model = "jobtitle"
                      required
                      disabled=  true
                      label = "Job Title"
                      outlined = true
                      rounded= true
                    ></v-text-field>

                    <v-text-field
                      v-model = "username"
                      required
                      disabled=  true
                      label = "Mail"
                      outlined = true
                      rounded= true
                    ></v-text-field>

                    <v-text-field
                      v-model = "country"
                      required
                      disabled=  true
                      label = "Country"
                      outlined = true
                      rounded= true
                    ></v-text-field>

                    <v-textarea class="pt-5 purple-input" label="Explain your project"/>

                    <v-btn color="success">
                      Add your project
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>
-->
<!--<template>
<v-layout wrap class="pt-10" >
      <v-flex>
        <card class="v-card-profile">
          <v-avatar slot="offset" class="ml-10 d-block" size="200">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class=" text-xs-center">
            <h2 class="pt-10 ml-5 black--text">WELCOME on your profile page !</h2>
            <h1 class="pt-5 ml-5 card-title font-weight-light">name profile</h1><br>
            <p class="ml-5 card-description font-weight-light text">
              <v-icon>
                mdi-map
              </v-icon>
                Country
              </p>
          </v-card-text>
        </card>

        <v-btn class="ml-10" color="error">logout</v-btn>

        <v-form align="left" justify="left">

        <v-text-field
          required
          v-model = "Firstname"
          disabled=  true
          label = "First Name"
          outlined = true
          rounded= true
        ></v-text-field>

        <v-text-field
          v-model = "Lastname"
          required
          disabled=  true
          label = "Last Name"
          outlined = true
          rounded= true
        ></v-text-field>

        <v-text-field
          v-model = "jobtitle"
          required
          disabled=  true
          label = "Job Title"
          outlined = true
          rounded= true
        ></v-text-field>

        <v-text-field
          v-model = "username"
          required
          disabled=  true
          label = "Mail"
          outlined = true
          rounded= true
        ></v-text-field>

        <v-text-field
          v-model = "country"
          required
          disabled=  true
          label = "Country"
          outlined = true
          rounded= true
        ></v-text-field>

        <v-textarea class="pt-5 purple-input" label="Explain your project"/>

        <v-btn color="success">
          Add your project
        </v-btn>

      </v-form>
      </v-flex>
    </v-layout>

</template>
//-->

<script>
export default {
  data () {
    return {
      username: '',
      Firstname: '',
      Lastname: '',
      date: '',
      jobtitle: '',
      country: '',
      projectText: ''
    }
  },
  validate () {
    if (this.$refs.form.validate()) {
      this.snackbar = true
      console.log(this.email, this.password) // to send the data to the back end
    }
  },
  reset () {
    this.$refs.form.reset()
  },
  created () {
    this.getProfileInformations()
  },
  methods: {
    // Login back end
    async getProfileInformations () {
      var emailStored = localStorage.getItem('email')
      var that = this
      console.log('Mail stored : ' + localStorage.getItem('email'))
      // connecter l'utilisateur
      this.axios({
        method: 'post',
        url: 'http://localhost:4000' + '/api/profileInformations',
        data: {
          email: emailStored
        }
      })
        .then(function (response) {
        // On traite la suite une fois la réponse obtenue
          console.log(response)
          const status = JSON.parse(response.data.status)
          // redirect logic
          // eslint-disable-next-line eqeqeq
          if (status == '200') {
            console.log('Profile retrieveeeeedddd')
            that.Firstname = response.data.Firstname
            that.Lastname = response.data.Lastname
            that.username = response.data.username
            that.date = response.data.date
            that.jobtitle = response.data.jobtitle
            that.country = response.data.country
            that.projectText = response.data.projectText
            console.log(that.Firstname)
            console.log(that.jobtitle)
          }
        })
        .catch(function (erreur) {
          // On traite ici les erreurs éventuellement survenues
          console.log(erreur)
        })
      console.log('pass')
    }
  }
}

</script>

<style scoped>
</style>
