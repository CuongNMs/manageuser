
const db = require('./db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tbl_user'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM tbl_user WHERE user_id = ?'
        db.query(sql, [req.params.user_id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let user_id = req.params.user_id;
        let sql = 'UPDATE tbl_user SET ? WHERE user_id = ?'
        db.query(sql, [data, user_id], (err, response) => {
            if (err) throw err
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
        let sql = 'INSERT INTO tbl_user (group_id,login_name,password,full_name,full_name_kana,email,tel,birthday,rule,salt) VALUES (?,?,?,?,?,?,?,?,?,?)'
        db.query(sql, [group_id, login_name, password, full_name, full_name_kana, email, tel, birthday, rule, salt], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert user success!' })
            console.log(response);
        })
        
        // let sql2 = 'INSERT INTO tbl_detail_user_japan (user_id, code_level, start_date, end_date, total) VALUES (?,?,?,?,?)'
        // db.query(sql2, [user_id, code_level, start_date, end_date, total], (err, response) => {
        //     if (err) throw err
        //     res.json({ message: 'Insert detail success!' })
        // });






    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tbl_user WHERE user_id = ?'
        db.query(sql, [req.params.user_id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}