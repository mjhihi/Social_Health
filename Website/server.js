// server.js handles database interactions

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
const port = 3000;

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'social_health',
    password: 'postgres',
    port: 5432,
});

// Route to fetch data for ADHD
app.get('/data/adhd', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM adhd');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query for ADHD:', error);
        res.status(500).send('Error fetching data for ADHD from database');
    }
});

// Route to fetch data for Anxiety
app.get('/data/anxiety', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM anxiety');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query for Anxiety:', error);
        res.status(500).send('Error fetching data for Anxiety from database');
    }
});

// Route to fetch data for Self-Esteem
app.get('/data/self_esteem', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM self_esteem');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query for Self-Esteem:', error);
        res.status(500).send('Error fetching data for Self-Esteem from database');
    }
});


// Route to fetch data for Depression
app.get('/data/depression', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM depression');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query for Depression:', error);
        res.status(500).send('Error fetching data for Depression from database');
    }
});

// Route to fetch data for states_mh

app.get('/data/states_mh', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM states_mh');
        const data = result.rows;
        client.release();
        res.json(data);
    } catch (error) {
        console.error('Error executing query for states_mh:', error);
        res.status(500).send('Error fetching data for states_mh from database');
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
