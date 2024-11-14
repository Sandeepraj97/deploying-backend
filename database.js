// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reviews.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      content TEXT,
      reviewer TEXT
    )
  `);
});

module.exports = db;
