import mysql from 'mysql'

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manejomateria'
});
pool.connect();
export default pool;