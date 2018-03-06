var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit : 10,
    host: 'salesdb.c9u2qbnmhptd.us-east-2.rds.amazonaws.com',
    user: 'root',
    password : 'Liana-samboni',
    database : 'salesdb'
});

exports.query = function query(sql,data) {
    connection.getConnection(function (error,conn) {
        if(error) {
            data(error, conn);
        }
        else{
            conn.query(sql,function (err,result) {
                conn.release();
                data(err,result);
            })
        }
    })
}