const mysql = require('mysql')

pool = mysql.createPool({
	host: 	   'localhost',
	user:      'root',
	password:  'root',
	database:  'myblog',
	connectionLimit: 10
})
module.exports = pool