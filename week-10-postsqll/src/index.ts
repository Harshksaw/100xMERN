import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://Harshksaw:Xue97PItBcby@ep-jolly-heart-a1wz6ju9.ap-southeast-1.aws.neon.tech/LearnDB?sslmode=require",
});

async function createUsersTable() {
  //   await client.connect();
  const result = await client.query(`

  BEGIN; -- Start transaction

  INSERT INTO users (username, email, password)
  VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');
  
  INSERT INTO addresses (user_id, city, country, street, pincode)
  VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');
  
  
    `);
  console.log(result);
}

createUsersTable();
