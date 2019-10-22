const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'library'
};

const pool = new Pool (config);

const  getBooks = async () => {
    try {
        const get = await pool.query('select * from books');
        console.log(get.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUsers = async () => {
   try {
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)'
        const VALUES = ['Jhenny', 'Jhenny']
        const res = await pool.query(text, VALUES);
        console.log(res.rows);
        pool.end();
   } catch (e) {
       console.log(e);
   }
};

const deleteUsers =  async () =>  {
    try {
        const text = 'delete FROM users where username = $1';
        const VALUES = ['Jakcson'];
        const res = await pool.query(text, VALUES)
        console.log(res.command);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const updateUsers = async () => {
    try {
        const text  = 'UPDATE users SET username = $1 , password = $2 WHERE username = $3'
        const values = ['Lola', '34234', 'Brian']
        const res = await pool.query(text, values)
        console.log(res.command);
        pool.end();
    } catch (e) {
        console.log(e);
    }
}

updateUsers();

