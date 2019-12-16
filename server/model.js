
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
            res.json({message: 'Update success!'})
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
        // let data=[group_id, login_name, password,full_name, full_name_kana,email, tel, birthday, rule, salt];
        //let data = req.body;
        let data= req.body;
        console.log(data);
        // let code_level = req.body.detail.code_level;
        // let start_date = req.body.detail.start_date;
        // let end_date = req.body.detail.end_date;
        // let total = parseInt(req.body.detail.total);
        // let sql1 = 'INSERT INTO `tbl_user` '+
        // 'SET (`group_id`, `login_name`, `password`, `full_name`, `full_name_kana`, `email`, `tel`, `birthday`, `rule`, `salt`)' +
        // 'VALUES ('+ group_id +','+login_name+','+password +','+full_name+','+full_name_kana+','+email+','+tel+','+birthday+',' +rule+','+salt+')';
        let sql1 = 'INSERT INTO tbl_user (group_id,login_name,password,full_name,full_name_kana,email,tel,birthday,rule,salt) VALUES ?'
        db.query(sql1, data, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tbl_user WHERE user_id = ?'
        db.query(sql, [req.params.user_id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}