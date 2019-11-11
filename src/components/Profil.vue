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
          <v-form ref="form">
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
                      disabled= true
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
                      disabled= true
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
                    v-model="city"
                    label="City"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    v-model="postalCode"
                    class="purple-input"
                    label="Postal Code"
                    type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    v-model="projectText"
                    class="purple-input"
                    label="Notre projet"
                    value="Soumettez-nous votre projet ici."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                    <v-col>
                    <div class="my-2">
                      <v-btn class="mx-0 font-weight-light" color="success" @click="updateProfileInformations"> Update Profile</v-btn>
                    </div>
                    <div class="mt-5 pb-12 ">
                      <v-btn class="font-weight-light" color="error" @click="deleteProject">Delete Project</v-btn>
                    </div>
                    <div id="message" v-if="deleteprofile"><h4 class="red--text">Your project is delete from our database ! </h4></div>
                    <div v-if="updateprofile"><h4 class="green--text">Thanks for updating your post ! </h4></div>
                    </v-col>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBZMuk4s3xE4oXZNZ6TNCbFeEhQY4Xmh13j8FWN2eBzGM41yy&s"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <v-row justify="space-around" class="pt-5"><h1>WELCOME {{ Firstname }} ! </h1></v-row>
            <h4 class="category text-gray font-weight-thin mb-3 pt-3">{{ jobtitle}}</h4>
            <h2 class="card-title font-weight-light">{{ Firstname }}  {{ Lastname }} </h2>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

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
      projectText: '',
      city: '',
      postalCode: '',
      updateprofile: false,
      deleteprofile: false
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
  // delayMethod () {
  //   this.updateprofile = true
  //   delay(2000)
  // },
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
    },
    async updateProfileInformations () {
      // connecter l'utilisateur
      var that = this
      this.axios({
        method: 'post',
        url: 'http://localhost:4000' + '/api/updateprofile',
        data: {
          projectText: this.projectText,
          city: this.city,
          postalCode: this.postalCode
        }
      })
        .then(function (response) {
          console.log(response)
          that.updateprofile = true
          sessionStorage.setItem('city', that.city)
          sessionStorage.setItem('postalCode', that.postalCode)
          sessionStorage.setItem('projectText', that.projectText)
        })
    },
    async deleteProject () {
      // connecter l'utilisateur
      var that = this
      this.axios({
        method: 'post',
        url: 'http://localhost:4000' + '/api/deleteProject',
        data: {
          projectText: this.projectText
        }
      })
        .then(function (response) {
          console.log(response)
          that.deleteprofile = true
        })
    }
  },
  mounted () {
    if (sessionStorage.city) {
      this.city = sessionStorage.city
    }
    if (sessionStorage.postalCode) {
      this.postalCode = sessionStorage.postalCode
    }
    if (sessionStorage.projectText) {
      this.projectText = sessionStorage.projectText
    }
  },
  watch: {
    city (newCity) {
      sessionStorage.city = newCity
    },
    postalCode (newcode) {
      sessionStorage.postalCode = newcode
    },
    projectText (newProject) {
      sessionStorage.projectText = newProject
    }
  }
}
</script>

<style scoped>
</style>
