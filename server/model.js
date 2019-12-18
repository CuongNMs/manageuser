
const db = require('./db')

module.exports = {
    get: (req, res) => {
        let selectSql = 'SELECT tu.user_id, tu.group_id, tu.login_name, tu.password, tu.full_name, tu.full_name_kana, tu.email, tu.tel, tu.birthday, tj.code_level, tj.start_date, tj.end_date, tj.total ' +
            'FROM tbl_user AS tu INNER JOIN tbl_detail_user_japan AS tj ' +
            'ON tu.user_id = tj.user_id ' +
            'LEFT JOIN mst_japan AS mj ' +
            'ON tj.code_level=mj.code_level ' +
            'LEFT JOIN mst_group AS mg ' +
            'ON tu.group_id = mg.group_id ';
        db.query(selectSql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let selectDetailSql = 'SELECT tu.user_id, tu.group_id, tu.login_name, tu.password, tu.full_name, tu.full_name_kana, tu.email, tu.tel, tu.birthday, tj.code_level, tj.start_date, tj.end_date, tj.total ' +
            'FROM tbl_user AS tu INNER JOIN tbl_detail_user_japan AS tj ' +
            'ON tu.user_id = tj.user_id ' +
            'LEFT JOIN mst_japan AS mj ' +
            'ON tj.code_level=mj.code_level ' +
            'LEFT JOIN mst_group AS mg ' +
            'ON tu.group_id = mg.group_id ' +
            'WHERE tu.user_id= ?'
        db.query(selectDetailSql, [req.params.user_id], (err, response) => {
            if (err) throw err
            res.json(response[0]);
        })
    },
    update: (req, res) => {
        let group_id = req.body.group_id;
        let login_name = req.body.login_name;
        let password = req.body.password;
        let full_name = req.body.full_name;
        let full_name_kana = req.body.full_name_kana;
        let email = req.body.email;
        let tel = req.body.tel;
        let birthday = req.body.birthday;
        let code_level = req.body.detail.code_level;
        let start_date = req.body.detail.start_date;
        let end_date = req.body.detail.end_date;
        let total = req.body.detail.total;

        let user_id = req.params.user_id;
        let updateUserSql = 'UPDATE tbl_user SET group_id = ?, login_name = ?, password = ?, full_name = ?, full_name_kana = ?, email = ?, tel = ?, birthday = ? WHERE user_id = ?'

        db.query(updateUserSql, [group_id, login_name, password, full_name, full_name_kana, email, tel, birthday, user_id], (err, response) => {
            if (err) throw err
            let updateDetailSql = 'UPDATE tbl_detail_user_japan SET code_level = ?, start_date = ?, end_date = ?, total = ? WHERE user_id = ?'
            db.query(updateDetailSql, [code_level, start_date, end_date, total, user_id], (err, response) => {
                if (err) throw err
            });
            res.json({ message: 'Update success!' })
        })


    },
    store: (req, res) => {
        let group_id = req.body.group_id;
        let login_name = req.body.login_name;
        let password = req.body.password;
        let full_name = req.body.full_name;
        let full_name_kana = req.body.full_name_kana;
        let email = req.body.email;
        let tel = req.body.tel;
        let birthday = req.body.birthday;
        let rule = req.body.rule;
        let salt = req.body.salt;
        let code_level = req.body.detail.code_level;
        let start_date = req.body.detail.start_date;
        let end_date = req.body.detail.end_date;
        let total = req.body.detail.total;
        let createUserSql = 'INSERT INTO tbl_user (group_id,login_name,password,full_name,full_name_kana,email,tel,birthday,rule,salt) VALUES (?,?,?,?,?,?,?,?,?,?)'
        db.query(createUserSql, [group_id, login_name, password, full_name, full_name_kana, email, tel, birthday, rule, salt], (err, results, fields) => {
            if (err) throw err
            let createDetailUserSql = 'INSERT INTO tbl_detail_user_japan (user_id, code_level, start_date, end_date, total) VALUES (?,?,?,?,?)'
            db.query(createDetailUserSql, [results.insertId, code_level, start_date, end_date, total], (err, response) => {
                if (err) throw err
            });
            res.json({ message: 'Insert success!' })
        })
    },

    delete: (req, res) => {
        let user_id = req.params.user_id;
        let deleteDetailSql = 'DELETE FROM tbl_detail_user_japan WHERE tbl_detail_user_japan.user_id = ?'
        db.query(deleteDetailSql, [user_id], (err, response) => {
            if (err) throw err
            let deleteUserSql = 'DELETE FROM tbl_user WHERE tbl_user.user_id = ?'
            db.query(deleteUserSql, [user_id], (err, response) => {
                if (err) throw err
            });
            res.json({ message: 'Delete success!' })
        })
    }
}