const express = require('express')
const router = express.Router()
const sd = require('silly-datetime')

const { userRegist, userLogin } = require('../controller/userController/index.js')

router.use((req, res, next) => {
	const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm')
	console.log('访问时间：' + time)
	next()
})
// 注册
router.post('/regist', (req, res, next) => {
	var user = req.body
	next ()
}, userRegist)

// 登录
router.post('/login', (req, res, next) => {
	var user = req.body
	next()
}, userLogin)

router.get('/home', (req, res) => {
	console.log(11111111111111)
})

module.exports = router