const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(mysql);
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

const local = {
  // host: '127.0.0.1',
  // user: 'root',
  // password: '',
  // database: 'todolist',
  // port: 3306,
  // charset: 'utf8mb4'
  connectionLimit:50,
  host: "192.17.90.133",
  // host: "66.253.130.27",
  user: "servernotfound_wenxin",
  password: "wenxinquanyuzhoudiyi",
  database: "servernotfound_data"
};

const pool = mysql.createPool(local);
pool.getConnection(function(error){
  if(error){
    console.log('connect to database error');
  }else{
    console.log('Connected to database');
  }
});
module.exports = () => {
  return pool.getConnectionAsync().disposer(function(connection) {
    connection.release();
  });
};
