// server.js -- server.js handles server setup and data retrieval from the database, 

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'social_health',
    password: 'postgres',
    port: 5432,
});

// Test PostgreSQL connection
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL');
    client.release();
});

// Route to fetch data
app.get('/data', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM adhd');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Error fetching data from database');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
