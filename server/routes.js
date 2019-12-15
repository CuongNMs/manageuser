
module.exports = function(app) {
  let model = require('./model');

  // todoList Routes
  app.route('/users')
    .get(model.get)
    .post(model.store);

  app.route('/users/:user_id')
    .get(model.detail)
    .put(model.update)
    .delete(model.delete);
};










// express = require('express');
// bodyParser = require('body-parser');
// mysql = require('mysql');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mydatabase'
// });


// const app = express();


// app.get('/users', function (req, res) {
  
//   connection.getConnection(function (err, connection) {

//     connection.query('SELECT tu.user_id, tu.full_name, tu.birthday, mg.group_name, tu.email, tu.tel, mj.name_level, tj.start_date, tj.total ' +
//       'FROM tbl_user AS tu INNER JOIN tbl_detail_user_japan AS tj ' +
//       'ON tu.user_id = tj.user_id ' +
//       'LEFT JOIN mst_japan AS mj ' +
//       'ON tj.code_level=mj.code_level ' +
//       'LEFT JOIN mst_group AS mg ' +
//       'ON tu.group_id = mg.group_id ', function (error, results, fields) {

//         if (error) throw error;

//         res.send(results)
//       });
//   });
// });


// app.get('/details', function (req, res) {

//   let { id } = req.query;
//   connection.getConnection(function (err, connection) {


//     connection.query('SELECT tu.user_id, tu.full_name, tu.birthday, mg.group_name, tu.email, tu.tel, mj.name_level, tj.start_date, tj.total ' +
//       'FROM tbl_user AS tu INNER JOIN tbl_detail_user_japan AS tj ' +
//       'ON tu.user_id = tj.user_id ' +
//       'LEFT JOIN mst_japan AS mj ' +
//       'ON tj.code_level=mj.code_level ' +
//       'LEFT JOIN mst_group AS mg ' +
//       'ON tu.group_id = mg.group_id ' +
//       'WHERE tu.user_id= ' + id, function (error, results, fields) {

//         if (error) throw error;


//         res.send(results)
//       });
//   });
// });

// app.post('/users', function (req, res) {

//   let { id } = req.query;
//   connection.getConnection(function (err, connection) {

//     connection.query('SELECT tu.user_id, tu.full_name, tu.birthday, mg.group_name, tu.email, tu.tel, mj.name_level, tj.start_date, tj.total ' +
//       'FROM tbl_user AS tu INNER JOIN tbl_detail_user_japan AS tj ' +
//       'ON tu.user_id = tj.user_id ' +
//       'LEFT JOIN mst_japan AS mj ' +
//       'ON tj.code_level=mj.code_level ' +
//       'LEFT JOIN mst_group AS mg ' +
//       'ON tu.group_id = mg.group_id ' +
//       'WHERE tu.user_id= ' + id, function (error, results, fields) {

//         if (error) throw error;


//         res.send(results)
//       });
//   });
// });


// // Starting our server.
// app.listen(3000, () => {
//   console.log('Go to http://localhost:3000/tbl_user so you can see the data.');
// });