// // write a function to create a users table in your database.
// import { Client } from "pg";

// const client = new Client({
//   connectionString:
//     "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable",
// });

// async function insertUserData() {
//   await client.connect();

//   const result = await client.query(`
       
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );
//     `);
//   console.log(result);
// }

// insertUserData();
import { Client } from 'pg';

async function insertUserAndAddress(
    username: string, 
    email: string, 
    password: string, 
    city: string, 
    country: string, 
    street: string, 
    pincode: string
) {
    const client = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable");

    try {
        await client.connect();

        // Start transaction
        await client.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        // Commit transaction
        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
insertUserAndAddress(
    'johndoe', 
    'john.doe@example.com', 
    'securepassword123', 
    'New York', 
    'USA', 
    '123 Broadway St', 
    '10001'
);