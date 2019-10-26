/**
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
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
  password: 'dca-corporation'
}]

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.email && u.password === req.body.password)
    if (!user) {
      console.log(users)
      console.log('fail connexion')
      res.status(401)
      res.json({
        message: 'did not find any user with these credentials'
      })
    } else {
      // connect to the user
      req.session.id = user.id // connect to the user and change the id
      console.log('Connected')
      console.log(users)
      console.log(req.session.id)
      res.json({
        message: 'connected'
      })
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

app.post('/api/subscribe', (req, res) => {
  const user = users.find(u => u.username === req.body.email)
  if (!user) {
    users.push({ username: req.body.email, password: req.body.password })
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
