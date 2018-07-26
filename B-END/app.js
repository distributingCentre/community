const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const Router = require('./router/index.js')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(session({
	secret: 'liliqiang',
	resave: false,
	saveUninitialized: true,
	coodie: { secure: false }
}))

app.use(Router)

app.listen(3000, () => {
	console.log('服务器已开启')
})