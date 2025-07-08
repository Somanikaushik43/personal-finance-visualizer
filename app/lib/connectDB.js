import mysql from 'mysql2/promise';

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '485269137@6A',  // your password here
    database: 'personal-finance-visualizer',
  });

  return connection;
}
