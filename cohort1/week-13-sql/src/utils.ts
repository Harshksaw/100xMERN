import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://vvxloxfa:qEOEaSOudlrH3lFvtbJOPYBfQT9BBtAy@dumbo.db.elephantsql.com/vvxloxfa",
  );
  await client.connect();
  return client;
}
