const { findOne, addOne } = require('../../model/userModel/index.js')

async function userRegist(req, res, next) {
    let { username, password } = req.body

    // 检测是否为空

    if (username.trim() == '') {
        res.send({
            status: 0,
            msg: '用户名不能为空！'
        })
    } else if (password.trim() == '') {
        res.send({
            status: 0,
            msg: '密码不能为空！'
        })
    } else {
        var params = "username = '" + username + "'"
        let check = await findOne(params)
        if (check.length === 0) {
            let result = await addOne(username, password)
            if (result) {
                res.send({
                    status: 1,
                    msg: '注册成功'
                })
            }
        } else {
            res.send({
                status: 0,
                msg: '该用户名已被占用！'
            })
        }
    }
}

// 登录
async function userLogin(req, res, next) {
    let { username, password } = req.body
    let params = "username = '" + username + "' and password = '" + password + "'"
    console.log(params)
    // 检测是否为空

    if (username.trim() == '') {
        res.send({
            status: 0,
            msg: '用户名不能为空！'
        })
    } else if (password.trim() == '') {
        res.send({
            status: 0,
            msg: '密码不能为空！'
        })
    } else {
        // 数据库校验
        let check = await findOne(params)
        if (check.length === 0) {
            res.send({
                status: 0,
                msg: '账号或密码错误'
            })
        } else {
            // 保存用户登陆状态
            req.session.user = {
                id: check[0].id,
                username: check[0].username
            }

            res.send({
                status: 1,
                msg: '登录成功'
            })
        }
    }

}

exports.userRegist = userRegist
exports.userLogin = userLogin