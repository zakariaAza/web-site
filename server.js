/**
 *
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
  secret: 'tototo', // changez cette valeur
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
  username: 'admin',
  password: 'tototo'
}]

app.get('/api/test', (req, res) => {
  console.log('ce console.log est appelé au bon moment')
  res.json([
    {
      title: 'truc',
      content: 'machin'
    }, {
      title: 'truc2',
      content: 'machin2'
    }
  ])
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)

  const user = users.find(u => u.username === req.body.email && u.password === req.body.password)
  if (!user) {
    // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
    console.log('fail connexion')
  } else {
    console.log('Connected')
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

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
