// fetch data from four different tables in POstgresSQL

const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'social_health',
  password: 'postgres',
  port: 5433,
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch data from PostgreSQL based on table name
app.get('/data/:tableName', async (req, res) => {
  const tableName = req.params.tableName;
  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM ${tableName}`);
    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error fetching data from database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
