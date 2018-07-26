const pool = require('../../utils/connection.js')

async function findOne (params) {
	let sql = "select * from user where " + params + " limit 1"
	let result = await new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			connection.query(sql, (err,res) => {
				err ? reject(err) : resolve(res)
			})

			connection.release()

			if (err) {
				reject(err)
			}
		})
	}).catch(err => {console.log('[user: ]')})
	return result
}

// 添加一条数据
async function addOne (username, password) {
	let sql = "insert into user(id, username, password) values(?, ?, ?)"
	let params = [null, username, password]

	let result = await new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {

			connection.query(sql, params, (err, res) => {
				err ? reject(err) : resolve(res)
			})

			connection.release()

			if (err) {
				reject(err)
			}
		})
	}).catch(err => {console.log('[user:addOne]->'+err)})
	return result
}

exports.findOne = findOne
exports.addOne  = addOne