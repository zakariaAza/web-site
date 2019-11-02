/**
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse
 */

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(session({
  secret: 'dca', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

const users = [{
  // admin by default
  username: 'admin@esiea.fr',
  password: 'dca-corporation',
  Firstname: 'admin',
  Lastname: 'admin',
  date: '27/10/2019',
  jobtitle: 'admin',
  country: 'france',
  projectText: ''
}]

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.email && u.password === req.body.password)
    if (!user) {
      console.log(users)
      console.log('fail connexion')
      res.json({
        message: 'did not find any user with these credentials'
      })
      res.status(401)
    } else {
      // connect to the user
      req.session.id = user.id // connect to the user and change the id
      console.log('Connected')
      console.log(users)
      console.log(req.session.id)
      res.json({
        message: 'connected',
        status: 200
      })
      res.status(200)
    }
  } else {
    console.log('you are already connected')
    console.log(users)
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

// app.get('/api/logout', (req, res) => {
//   if (!req.session.userId) {
//     res.status(401)
//     res.json({
//       message: 'you are already disconnected'
//     })
//   } else {
//     req.session.userId = 0
//     res.json({
//       message: 'you are now disconnected'
//     })
//   }
// })

app.post('/api/subscribe', (req, res) => {
  const user = users.find(u => u.username === req.body.email)
  if (!user) {
    users.push({
      username: req.body.email,
      password: req.body.password,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      date: req.body.date,
      jobtitle: req.body.jobtitle,
      country: req.body.country
    })
    console.log(users)
    res.json({
      message: 'Success'
    })
  } else {
    res.json({
      message: 'An account with this user already exist'
    })
  }
})

app.post('/api/profileInformations', (req, res) => {
  const user = users.find(u => u.username === req.body.email)
  console.log('getProfileLaunched')
  console.log(req.body)
  if (!user) {
    console.log(users)
    console.log('failed to retrieve profile informations')
    res.json({
      message: 'did not find any user with this mail'
    })
    res.status(401)
  } else {
    console.log('User informations retrieved')
    console.log(users)
    console.log(req.session.id)
    res.json({
      message: 'User informations retrieved',
      status: 200,
      username: user.username,
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      date: user.date,
      jobtitle: user.jobtitle,
      country: user.country,
      projectText: user.projectText
    })
    res.status(200)
  }
})

// app.get('/api/test', (req, res) => {
//   console.log('ce console.log est appelé au bon moment')
//   res.json([
//     {
//       title: 'truc',
//       content: 'machin'
//     }, {
//       title: 'truc2',
//       content: 'machin2'
//     }
//   ])
// })

// app.get('/api/admin', (req, res) => {
//   if (!req.session.userId || req.session.isAdmin === false) {
//     res.status(401)
//     res.json({ message: 'Unauthorized' })
//     return
//   }

//   res.json({
//     message: 'congrats, you are connected'
//   })
// })

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
